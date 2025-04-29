from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import *

router = DefaultRouter()
router.register('categories', RecordCategoryViewSet)
router.register('definitions', RecordDefinitionViewSet)
router.register('records', RecordViewSet)
router.register('participants', ParticipantViewSet)
router.register('locations', LocationViewSet)
router.register('tags', TagViewSet)
router.register('assets', AssetViewSet)
router.register('sources', RecordSourceViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('vkeys/create/', VKeyBulkCreateView.as_view(), name='vkey-create'),
    path('vkeys/', VKeyListView.as_view(), name='vkey-list'),
]

