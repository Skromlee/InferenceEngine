# from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import FactSerializer
from .models import Rule
from .Inference_engine import inference_engine

key = ["fact1", "operator", "fact2", "conclude1", "conclude2"]

NewRules = []

res = ""


def createRule():
    global NewRules

    NewRules = []

    queryset = Rule.objects.all()

    rule = list(queryset)
    for rule in rule:
        newRule = {}
        WordList = str(rule).split()
        idx = 1
        conclude1Section = False
        conclude2Section = False

        for word in WordList:
            if conclude1Section:
                if conclude2Section:
                    newRule[key[4]] = word
                    break

                if word == "AND":
                    conclude2Section = True
                    continue

                newRule[key[3]] = word
                continue

            if word != "THEN":
                newRule[key[idx-1]] = word
                idx += 1
            else:
                conclude1Section = True
                continue
        NewRules.append(newRule)


@api_view(['POST'])
def members(request):
    serializer = FactSerializer(data=request.data)
    if serializer.is_valid():
        inputFact = serializer.validated_data.get('inputFact')
        prev_asked_premise = serializer.validated_data.get(
            'prev_asked_premise')
        print(prev_asked_premise, "<===========")
        createRule()
        answer = inference_engine(NewRules, inputFact, prev_asked_premise)
        return Response({"message": answer})
    return Response(serializer.errors, status=400)
