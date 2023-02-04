# Generated by Django 4.1.5 on 2023-02-01 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("inference_engine", "0005_alter_rule_operator1_alter_rule_operator2"),
    ]

    operations = [
        migrations.RenameField(
            model_name="rule",
            old_name="conclude",
            new_name="conclude1",
        ),
        migrations.RenameField(
            model_name="rule",
            old_name="operator1",
            new_name="operator",
        ),
        migrations.RemoveField(
            model_name="rule",
            name="fact3",
        ),
        migrations.RemoveField(
            model_name="rule",
            name="operator2",
        ),
        migrations.AddField(
            model_name="rule",
            name="conclude2",
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]
