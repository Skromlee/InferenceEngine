# from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import InferenceSerializer
from .models import Rule
from .Inference_engine import inference_engine

key = ["fact1_prefix", "fact1", "fact1_description", "operator", "fact2_prefix", "fact2",
       "fact2_description", "conclude1", "conclude1_description", "conclude2", "conclude2_description"]

NewRules = []

res = ""


def createRule():
    global NewRules

    NewRules = []

    queryset = Rule.objects.all()
    rules = list(queryset)
    for rule in rules:
        newRule = {}
        WordList = str(rule).split(" ")
        idx = 1
        conclude1Section = False
        conclude2Section = False

        for word in WordList:
            if "(" in word:
                word = word[1:-1]

            if conclude1Section:
                if conclude2Section:
                    newRule[key[idx-1]] = word
                    idx += 1
                    continue

                if word == "AND":
                    conclude2Section = True
                    continue

                newRule[key[idx-1]] = word
                idx += 1

                continue

            if word != "THEN":
                newRule[key[idx-1]] = word
                idx += 1
                continue
            else:
                conclude1Section = True
                idx = 8
                continue
        NewRules.append(newRule)


@api_view(['POST'])
def members(request):
    serializer = InferenceSerializer(data=request.data)
    if serializer.is_valid():
        inputFact = serializer.validated_data.get('inputFact')
        prev_asked_premise = serializer.validated_data.get(
            'prev_asked_premise')
        createRule()
        answer = inference_engine(NewRules, inputFact, prev_asked_premise)
        return Response({"message": answer})
    return Response(serializer.errors, status=400)
