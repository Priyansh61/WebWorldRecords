from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import PartnerRequest, User
from django.utils.translation import gettext_lazy as _


class UserAdmin(BaseUserAdmin):
    # Define the fields to display in the admin interface
    fieldsets = (
        (None, {'fields': ('email', 'password', 'role')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'role', 'is_active', 'is_staff', 'is_superuser'),
        }),
    )
    list_display = ('email', 'is_staff','id')
    search_fields = ('email',)
    ordering = ('email',)

# Register the custom User model with the updated UserAdmin
admin.site.register(User, UserAdmin)

@admin.register(PartnerRequest)
class PartnerRequestAdmin(admin.ModelAdmin):
    list_display = ('user', 'requested_at', 'approved', 'approved_by', 'approved_at')
    list_filter = ('approved', 'requested_at')
    search_fields =('user__email',)
    autocomplete_fields = ['user']
    readonly_fields = ['requested_at', 'approved_at']