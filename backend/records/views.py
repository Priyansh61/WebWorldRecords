from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics, status
from rest_framework.response import Response

from .models import (
    RecordCategory, RecordDefinition, Record, Participant,
    Location, Tag, Asset,RecordSource, VKey
)
from .serializers import (
    RecordCategorySerializer, RecordDefinitionSerializer, RecordSerializer,
    ParticipantSerializer, LocationSerializer, TagSerializer,
    AssetSerializer, RecordSourceSerializer, VKeyBulkCreateSerializer, VKeySerializer
)
from accounts.permissions import IsModeratorOrSuper, IsAuthenticated

class RecordCategoryViewSet(viewsets.ModelViewSet):
    queryset = RecordCategory.objects.all()
    serializer_class = RecordCategorySerializer

class RecordDefinitionViewSet(viewsets.ModelViewSet):
    queryset = RecordDefinition.objects.all()
    serializer_class = RecordDefinitionSerializer

class RecordViewSet(viewsets.ModelViewSet):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer

class ParticipantViewSet(viewsets.ModelViewSet):
    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class AssetViewSet(viewsets.ModelViewSet):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer

class RecordSourceViewSet(viewsets.ModelViewSet):
    queryset = RecordSource.objects.all()
    serializer_class = RecordSourceSerializer

class VKeyViewSet(viewsets.ModelViewSet):
    queryset = VKey.objects.all()
    serializer_class = VKeySerializer
    permission_classes = [IsAuthenticated, IsModeratorOrSuper]

class VKeyBulkCreateView(generics.CreateAPIView):
    serializer_class = VKeyBulkCreateSerializer
    permission_classes = [IsAuthenticated, IsModeratorOrSuper]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({"message": "VKeys generated successfully!"}, status=status.HTTP_201_CREATED)
