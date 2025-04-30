from django.contrib import admin
from rest_framework import serializers
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User
from .forms import CustomUserCreationForm, CustomUserChangeForm
from records.serializers import LocationSerializer
from .models import User, PartnerRequest
from django.contrib.auth.password_validation import validate_password

class PartnerApprovalSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnerRequest
        fields = ['id', 'user', 'approved', 'approved_by', 'approved_at']
        read_only_fields = ['user', 'approved_by', 'approved_at']


class UserSignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'role', 'password', 'confirm_password']

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        validated_data['role'] = 'User'  # default role on signup
        user = User.objects.create_user(**validated_data)
        return user