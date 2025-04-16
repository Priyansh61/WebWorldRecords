from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

from core import settings


class User(AbstractUser):
    ROLE_CHOICES = (
        ('User', 'User'),
        ('PartnerAdmin', 'Partner Admin'),
        ('ModeratorAdmin', 'Moderator Admin'),
        ('SuperAdmin', 'Super Admin'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    def __str__(self):
        return f"{self.username} ({self.role})"

class PartnerRequest(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='partner_request')
    requested_at = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)
    approved_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='approved_partner_requests'
    )
    approved_at = models.DateTimeField(null=True, blank=True)
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.username} - {'Approved' if self.approved else 'Pending'}"