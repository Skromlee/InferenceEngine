from django.db import models


class Fact(models.Model):
    factName = models.CharField(max_length=1)
    description = models.CharField(max_length=150)

    def __str__(self):
        return self.factName + " (" + self.description + ")"


class Rule(models.Model):
    OPERATOR_CHOICES = (
        ('AND', 'AND'),
        ('OR', 'OR'),
    )
    PREFIX_CHOICES = (
        ("NOT", "NOT"),
    )
    fact1_prefix = models.CharField(
        max_length=3, choices=PREFIX_CHOICES, null=True, blank=True)
    fact1 = models.ForeignKey(
        Fact, related_name='fact1', on_delete=models.CASCADE)

    operator = models.CharField(
        max_length=3, choices=OPERATOR_CHOICES, null=True, blank=True)

    fact2_prefix = models.CharField(
        max_length=3, choices=PREFIX_CHOICES, null=True, blank=True)
    fact2 = models.ForeignKey(
        Fact, related_name='fact2', null=True, blank=True, on_delete=models.CASCADE)

    conclude1 = models.ForeignKey(
        Fact, related_name='conclude1', on_delete=models.CASCADE)

    conclude2 = models.ForeignKey(
        Fact, related_name='conclude2', null=True, blank=True, on_delete=models.CASCADE)

  # fact1 = models.CharField(max_length=150)

  # operator = models.CharField(
  #     max_length=3, choices=OPERATOR_CHOICES, null=True, blank=True)

  # fact2 = models.CharField(max_length=150, null=True, blank=True)

  # conclude1 = models.CharField(max_length=150)

  # conclude2 = models.CharField(max_length=150, null=True, blank=True)

  # string representation of the class

    def __str__(self):
        if self.operator:
            if self.conclude1 and self.conclude2:
                return str(self.fact1_prefix) + " " + str(self.fact1) + " " + self.operator + " " + str(self.fact2_prefix) + " " + str(self.fact2) + " THEN " + str(self.conclude1) + " AND " + str(self.conclude2)
            else:
                return str(self.fact1_prefix) + " " + str(self.fact1) + " " + self.operator + " " + str(self.fact2_prefix) + " " + str(self.fact2) + " THEN " + str(self.conclude1)
        else:
            if self.conclude1 and self.conclude2:
                return str(self.fact1_prefix) + " " + str(self.fact1) + " THEN " + str(self.conclude1) + " AND " + str(self.conclude2)
            else:
                return str(self.fact1_prefix) + " " + str(self.fact1) + " THEN " + str(self.conclude1)
