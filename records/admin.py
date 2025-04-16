from django.contrib import admin

# Register your models here.
from django.contrib import admin
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

# Basic model registrations
admin.site.register(RecordCategory)
admin.site.register(Asset)
admin.site.register(RecordAsset)
admin.site.register(RecordSource)
admin.site.register(VKey)


# Customize Record admin for better display
@admin.register(Record)
class RecordAdmin(admin.ModelAdmin):
    list_display = ('title', 'record_date', 'status', 'submitted_by', 'approved_by')
    list_filter = ('status', 'record_date')
    search_fields = ('title', 'details')
    autocomplete_fields = ['participants', 'locations', 'tags', 'definition']


@admin.register(Participant)
class ParticipantAdmin(admin.ModelAdmin):
    search_fields = ['name']

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    search_fields = ['city', 'country', 'venue']

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    search_fields = ['name']

@admin.register(RecordDefinition)
class RecordDefinitionAdmin(admin.ModelAdmin):
    search_fields = ['name']
