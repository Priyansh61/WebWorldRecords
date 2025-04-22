from rest_framework import serializers

from records.serializers import LocationSerializer
from .models import User, PartnerRequest, UserProfile
from django.contrib.auth.password_validation import validate_password

class PartnerApprovalSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnerRequest
        fields = ['id', 'user', 'approved', 'approved_by', 'approved_at']
        read_only_fields = ['user', 'approved_by', 'approved_at']


class UserProfileSerializer(serializers.ModelSerializer):
    address = LocationSerializer(many=True)
    class Meta:
        model = UserProfile
        fields = ['phone_number', 'address', 'profile_picture']

class UserSignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role', 'password', 'confirm_password']

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        if 'role' not in validated_data:
            validated_data['role'] = 'User'
        user = User.objects.create_user(**validated_data)
        return user
