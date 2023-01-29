from django.shortcuts import render

# import view sets from the REST framework
from rest_framework import viewsets

# import the RuleSerializer from the serializer file
from .serializers import RuleSerializer

# import the Rule model from the model file
from .models import Rule

# create a class for the Rule model viewsets


class RuleView(viewsets.ModelViewSet):

    # create a serializer class and
    # assign it to the RuleSerializer class
    serializer_class = RuleSerializer

    # define a varaible and populate it
    # with the Rule list Object
    queryset = Rule.objects.all()
