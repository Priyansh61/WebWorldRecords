import datetime
from datetime import timezone

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from . import permissions
from .models import User, PartnerRequest
from .permissions import IsModeratorOrSuper
from .serializers import UserSignupSerializer, PartnerApprovalSerializer


class PendingPartnerRequestsListView(generics.ListAPIView):
    queryset = PartnerRequest.objects.filter(approved=False)
    serializer_class = PartnerApprovalSerializer
    permission_classes = [IsModeratorOrSuper]

class ApprovePartnerRequestView(generics.UpdateAPIView):
    queryset = PartnerRequest.objects.filter(approved=False)
    serializer_class = PartnerApprovalSerializer
    permission_classes = [IsModeratorOrSuper]

    def update(self, request, *args, **kwargs):
        instance = self.get_object()

        # Upgrade user's role
        user = instance.user
        user.role = 'PartnerAdmin'
        user.save()

        # Mark request as approved
        instance.approved = True
        instance.approved_by = request.user
        instance.approved_at = datetime.datetime.now(timezone.utc)
        instance.save()

        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignupSerializer


    def perform_create(self, serializer):
        user = serializer.save()
        print(f"User created with role: {user.role}")
        print(user)
        if user.role == 'PartnerAdmin':
            print("Creating PartnerRequest for PartnerAdmin user.")
            PartnerRequest.objects.create(user=user)
        else:
            print("PartnerRequest not created as user role is not PartnerAdmin.")

        refresh = RefreshToken.for_user(user)
        self.tokens = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

    def create(self, request, *args, **kwargs):
        # Call perform_create to ensure the logic is executed
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        response = Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        response.data.update(self.tokens)
        return response