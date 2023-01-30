from django.http import HttpResponse
from random import choice
from experta import *


class Light(Fact):
    """Info about the traffic light."""
    pass


res = ""


class RobotCrossStreet(KnowledgeEngine):
    @Rule(Light(color='green'))
    def green_light(self):
        global res
        res = "walk"
        # print("Walk")

    @Rule(Light(color='red'))
    def red_light(self):
        global res
        res = "Don't walk"
        # print("Don't walk")

    @Rule(AS.light << Light(color=L('yellow') | L('blinking-yellow')))
    def cautious(self, light):
        global res
        res = "Be cautious because light is", light["color"]
        # print("Be cautious because light is", light["color"])


def members(request):
    print(request)
    global res
    engine = RobotCrossStreet()
    engine.reset()
    engine.declare(
        Light(color=choice(['green', 'yellow', 'blinking-yellow', 'red'])))
    engine.run()

    return HttpResponse(res)
