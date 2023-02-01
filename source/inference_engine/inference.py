# from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import FactSerializer
from .models import Rule
from .Inference_engine import inference_engine

key = ["fact1", "operator1", "fact2", "operator2", "fact3", "conclude"]

factList = []

res = ""


def createRule():
    global factList
    queryset = Rule.objects.all()
    rule = list(queryset)
    for rule in rule:
        perRow = {}
        txt = str(rule).split()
        idx = 1
        check = False
        for element in txt:
            if check:
                perRow[key[5]] = element
                break
            if element != "THEN":
                perRow[key[idx-1]] = element
                idx += 1
            else:
                check = True
                continue
        factList.append(perRow)


@api_view(['POST'])
def members(request):
    serializer = FactSerializer(data=request.data)
    if serializer.is_valid():
        inputFact = serializer.validated_data.get('inputFact')
        createRule()
        matches = inference_engine(factList, inputFact)
        # print(matches)
        return Response({"message": matches})
    return Response(serializer.errors, status=400)
