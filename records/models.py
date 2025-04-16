from django.db import models

from core import settings
import uuid


# Create your models here.
class RecordCategory(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class RecordDefinition(models.Model):
    RECORD_NATURE_CHOICES = (
        ('individual', 'Individual'),
        ('group', 'Group'),
    )

    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    unit = models.CharField(max_length=50, blank=True, help_text="e.g. seconds, meters")
    higher_is_better = models.BooleanField(default=True)
    record_nature = models.CharField(max_length=20, choices=RECORD_NATURE_CHOICES)
    category = models.ForeignKey(RecordCategory, on_delete=models.CASCADE, related_name="definitions")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Participant(models.Model):
    name = models.CharField(max_length=255)
    country_code = models.CharField(max_length=2, blank=True, help_text="ISO country code")
    birth_date = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Location(models.Model):
    venue = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100)
    region = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.venue}, {self.city}, {self.country}" if self.venue else f"{self.city}, {self.country}"

class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Asset(models.Model):
    FILE_TYPE_CHOICES = (
        ('image', 'Image'),
        ('video', 'Video'),
        ('pdf', 'PDF'),
        ('certificate', 'Certificate'),
        ('other', 'Other'),
    )

    file_url = models.TextField()
    file_type = models.CharField(max_length=20, choices=FILE_TYPE_CHOICES)
    description = models.TextField(blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.file_type}: {self.file_url}"

class RecordAsset(models.Model):
    record = models.ForeignKey('Record', on_delete=models.CASCADE)
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE)
    usage = models.CharField(max_length=50, blank=True, help_text="e.g., primary, evidence, supporting")

    class Meta:
        unique_together = ('record', 'asset')

    def __str__(self):
        return f"{self.record.title} → {self.asset.file_type}"

class RecordSource(models.Model):
    record = models.ForeignKey('Record', on_delete=models.CASCADE, related_name='sources')
    source_url = models.TextField()
    description = models.CharField(max_length=255, blank=True, help_text="e.g., News article, Video link")

    def __str__(self):
        return f"Source for {self.record.title}"


class VKey(models.Model):
    key = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    expiry_date = models.DateTimeField()
    record = models.OneToOneField('Record', on_delete=models.CASCADE, related_name='vkey')
    used = models.BooleanField(default=False)

def __str__(self):
        return f"VKey for {self.record.title} (expires {self.expiry_date})"


class Record(models.Model):
    definition = models.ForeignKey(RecordDefinition, on_delete=models.CASCADE, related_name='records')
    title = models.CharField(max_length=255)
    record_date = models.DateField()
    participants = models.ManyToManyField(Participant, related_name='records')
    locations = models.ManyToManyField(Location, related_name='records')
    tags = models.ManyToManyField(Tag, blank=True, related_name='records')
    value = models.DecimalField(max_digits=12, decimal_places=3, null=True, blank=True)
    details = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=(('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')), default='pending')
    approved_at = models.DateTimeField(null=True, blank=True)
    previous_record = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='broken_by')
    submitted_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name='submitted_records')
    approved_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name='approved_records')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.title


