from django.contrib import admin

# Register your models here.
from .models import Rule, Fact

# create a class for the admin-model integration


class RuleAdmin(admin.ModelAdmin):

    # add the fields of the model here
    list_display = ("fact1_prefix", "fact1", "operator",
                    "fact2_prefix", "fact2", "conclude1", "conclude2")


class FactAdmin(admin.ModelAdmin):
    list_display = ("factName", "description")


# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(Rule, RuleAdmin)
admin.site.register(Fact, FactAdmin)
