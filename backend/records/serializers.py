from rest_framework import serializers

from accounts.models import User
from .models import (
    RecordCategory,
    RecordDefinition,
    Record,
    Participant,
    Location,
    Tag,
    Asset,
    RecordSource,
    VKey
)

class RecordCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = RecordCategory
        fields = '__all__'

class RecordDefinitionSerializer(serializers.ModelSerializer):
    category = RecordCategorySerializer(read_only=True)

    class Meta:
        model = RecordDefinition
        fields = '__all__'

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = '__all__'

class RecordSourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecordSource
        fields = '__all__'

class VKeyBulkCreateSerializer(serializers.Serializer):
    assigned_to = serializers.PrimaryKeyRelatedField(queryset=User.objects)
    number_of_keys = serializers.IntegerField(min_value=1)

    @staticmethod
    def validate_assigned_to(value):
        if value.role != 'PartnerAdmin':
            raise serializers.ValidationError("The assigned user must have the role 'PartnerAdmin'.")
        return value

    def create(self, validated_data):
        assigned_to = validated_data['assigned_to']
        number_of_keys = validated_data['number_of_keys']
        created_by = self.context['request'].user

        vkeys = [
            VKey(assigned_to=assigned_to, created_by=created_by)
            for _ in range(number_of_keys)
        ]
        return VKey.objects.bulk_create(vkeys)


class VKeyListSerializer(serializers.ModelSerializer):
    assigned_to_email = serializers.EmailField(source='assigned_to.email', read_only=True)
    created_by_email = serializers.EmailField(source='created_by.email', read_only=True)

    class Meta:
        model = VKey
        fields = ['key',
                  'assigned_to',
                  'assigned_to_email',
                  'created_by',
                  'created_by_email',
                   'used',
                  'used_at',
                  'created_at']

class RecordSerializer(serializers.ModelSerializer):
    definition = RecordDefinitionSerializer(read_only=True)
    participants = ParticipantSerializer(many=True, read_only=True)
    locations = LocationSerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    assets = AssetSerializer(many=True, read_only=True)
    sources = RecordSourceSerializer(many=True, read_only=True)

    class Meta:
        model = Record
        fields = [
            'id',
            'title',
            'record_date',
            'value',
            'details',
            'status',
            'approved_at',
            'submitted_by',
            'approved_by',
            'definition',
            'participants',
            'locations',
            'tags',
            'assets',
            'sources',
            'created_at',
            'updated_at',
        ]
