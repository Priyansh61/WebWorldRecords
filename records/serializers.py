from rest_framework import serializers
from .models import (
    RecordCategory,
    RecordDefinition,
    Record,
    Participant,
    Location,
    Tag,
    Asset,
    RecordAsset,
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

class VKeySerializer(serializers.ModelSerializer):
    class Meta:
        model = VKey
        fields = '__all__'

class RecordSerializer(serializers.ModelSerializer):
    definition = RecordDefinitionSerializer(read_only=True)
    participants = ParticipantSerializer(many=True, read_only=True)
    locations = LocationSerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    assets = AssetSerializer(many=True, read_only=True)
    sources = RecordSourceSerializer(many=True, read_only=True)
    vkey = VKeySerializer(read_only=True)

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
            'vkey',
            'created_at',
            'updated_at',
        ]
