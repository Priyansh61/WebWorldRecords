from django.urls import path
from .views import UserSignupView, ApprovePartnerRequestView, PendingPartnerRequestsListView

urlpatterns = [
    path('signup/', UserSignupView.as_view(), name='user-signup'),
    path('partner-request/<int:pk>/approve/', ApprovePartnerRequestView.as_view(), name='approve-partner-request'),
    path('partner-requests/pending/', PendingPartnerRequestsListView.as_view(), name='pending-partner-requests'),


]
