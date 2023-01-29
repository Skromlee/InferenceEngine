from django.contrib import admin

# Register your models here.
from .models import Rule

# create a class for the admin-model integration


class RuleAdmin(admin.ModelAdmin):

    # add the fields of the model here
    # list_display = ("fact1", "operator", "fact2", "conclude")
    list_display = ("fact1", "operator1", "fact2",
                    "operator2", "fact3", "conclude")
    # list_display = ("fact1", "conclude")


# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(Rule, RuleAdmin)