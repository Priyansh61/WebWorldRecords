from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import (
    RecordCategory, RecordDefinition, Record, Participant,
    Location, Tag, Asset,RecordSource, VKey
)
from .serializers import (
    RecordCategorySerializer, RecordDefinitionSerializer, RecordSerializer,
    ParticipantSerializer, LocationSerializer, TagSerializer,
    AssetSerializer, RecordSourceSerializer, VKeyBulkCreateSerializer, VKeyListSerializer, RecordSubmissionSerializer,
    RecordDefinitionCreateSerializer
)
from accounts.permissions import IsModeratorOrSuper, IsAuthenticated, IsPartnerAdmin


class RecordCategoryViewSet(viewsets.ModelViewSet):
    queryset = RecordCategory.objects.all()
    serializer_class = RecordCategorySerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAuthenticated(), IsModeratorOrSuper()]
        return [AllowAny()]

    def create(self, request, *args, **kwargs):
        category_name = request.data.get('name')
        if RecordCategory.objects.filter(name=category_name).exists():
            return Response({"error": "Category with this name already exists."}, status=status.HTTP_400_BAD_REQUEST)
        return super().create(request, *args, **kwargs)



class RecordDefinitionViewSet(viewsets.ModelViewSet):
    queryset = RecordDefinition.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return RecordDefinitionCreateSerializer
        return RecordDefinitionSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAuthenticated(), IsModeratorOrSuper()]
        return [AllowAny()]

class RecordSubmissionViewSet(generics.CreateAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSubmissionSerializer
    permission_classes = [IsAuthenticated, IsPartnerAdmin]

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

class VKeyBulkCreateView(generics.CreateAPIView):
    serializer_class = VKeyBulkCreateSerializer
    permission_classes = [IsAuthenticated, IsModeratorOrSuper]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({"message": "VKeys generated successfully!"}, status=status.HTTP_201_CREATED)

class VKeyListView(generics.ListAPIView):
    serializer_class = VKeyListSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.role in ['ModeratorAdmin', 'SuperAdmin']:
            # Moderator / SuperAdmin → Can see all, filter by partner if query param provided
            assigned_to = self.request.query_params.get('assigned_to')
            queryset = VKey.objects.all()
            if assigned_to:
                queryset = queryset.filter(assigned_to_id=assigned_to)
            return queryset.order_by('-created_at')

        elif user.role == 'PartnerAdmin':
            # PartnerAdmin → Can only see their own VKeys
            return VKey.objects.filter(assigned_to=user).order_by('-created_at')

        # Others get nothing
        return VKey.objects.none()