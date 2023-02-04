from django.db import models


class Rule(models.Model):
    OPERATOR_CHOICES = (
        ('AND', 'AND'),
        ('OR', 'OR'),
    )

    fact1 = models.CharField(max_length=150)

    operator = models.CharField(
        max_length=3, choices=OPERATOR_CHOICES, null=True, blank=True)

    fact2 = models.CharField(max_length=150, null=True, blank=True)

    conclude1 = models.CharField(max_length=150)

    conclude2 = models.CharField(max_length=150, null=True, blank=True)

    # string representation of the class
    def __str__(self):
        if self.operator:
            if self.conclude1 and self.conclude2:
                return self.fact1 + " " + self.operator + " " + self.fact2 + " THEN " + self.conclude1 + " AND " + self.conclude2
            else:
                return self.fact1 + " " + self.operator + " " + self.fact2 + " THEN " + self.conclude1
        else:
            if self.conclude1 and self.conclude2:
                return self.fact1 + " THEN " + self.conclude1 + " AND " + self.conclude2
            else:
                return self.fact1 + " THEN " + self.conclude1
