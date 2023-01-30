from django.urls import path
from . import inference

urlpatterns = [
    path('', inference.members, name='members'),
]
