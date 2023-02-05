# Generated by Django 4.1.5 on 2023-02-05 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "inference_engine",
            "0007_fact_alter_rule_conclude1_alter_rule_conclude2_and_more",
        ),
    ]

    operations = [
        migrations.AddField(
            model_name="rule",
            name="fact1_prefix",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="rule",
            name="fact2_prefix",
            field=models.BooleanField(default=False),
        ),
    ]