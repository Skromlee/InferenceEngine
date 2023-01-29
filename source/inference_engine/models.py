from django.db import models

# Create your models here.


class Rule(models.Model):
    fact1 = models.CharField(max_length=150)
    # operator = models.CharField(max_length=150)
    OPERATOR_CHOICES = (
        ('AND', 'AND'),
        ('OR', 'OR'),
    )

    operator1 = models.CharField(
        max_length=3, choices=OPERATOR_CHOICES, null=True, blank=True)

    fact2 = models.CharField(max_length=150, null=True, blank=True)

    operator2 = models.CharField(
        max_length=3, choices=OPERATOR_CHOICES, null=True, blank=True)

    fact3 = models.CharField(max_length=150, null=True, blank=True)

    conclude = models.CharField(max_length=150)

    # string representation of the class
    def __str__(self):
        if self.operator1 and self.operator2:
            return self.fact1 + " " + self.operator1 + " " + self.fact2 + " " + self.operator2 + " " + self.fact3 + " THEN " + " " + self.conclude
        elif self.operator1:
            return self.fact1 + " " + self.operator1 + " " + self.fact2 + " THEN " + self.conclude
        else:
            return self.fact1 + " THEN " + self.conclude
