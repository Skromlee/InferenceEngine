# import serializers from the REST framework
from rest_framework import serializers

# import the Rule data model
from .models import Rule, Fact

# create a serializer class


class RuleSerializer(serializers.ModelSerializer):

    # create a meta class
    class Meta:
        model = Rule
        fields = ("id", "fact1_prefix", "fact1", "operator", "fact2_prefix",  "fact2",
                  "conclude1", "conclude2")


class FactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fact
        fields = ("id", "factName", "description")


class InferenceSerializer(serializers.Serializer):
    # inputFact = serializers.CharField()
    inputFact = serializers.ListField()
    prev_asked_premise = serializers.ListField()
