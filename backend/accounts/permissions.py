from rest_framework.permissions import BasePermission

class IsPartnerAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'PartnerAdmin'

class IsModeratorAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'ModeratorAdmin'

class IsSuperAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'SuperAdmin'

class IsModeratorOrSuper(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role in ['ModeratorAdmin', 'SuperAdmin']
