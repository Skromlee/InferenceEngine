# import serializers from the REST framework
from rest_framework import serializers

# import the Rule data model
from .models import Rule

# create a serializer class


class RuleSerializer(serializers.ModelSerializer):

    # create a meta class
    class Meta:
        model = Rule
        fields = ("id", "fact1", "operator1", "fact2",
                  "operator2", "fact3", "conclude")
