# Generated by Django 4.1.5 on 2023-02-05 08:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("inference_engine", "0006_rename_conclude_rule_conclude1_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Fact",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("factName", models.CharField(max_length=1)),
                ("description", models.CharField(max_length=150)),
            ],
        ),
        migrations.AlterField(
            model_name="rule",
            name="conclude1",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="conclude1",
                to="inference_engine.fact",
            ),
        ),
        migrations.AlterField(
            model_name="rule",
            name="conclude2",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="conclude2",
                to="inference_engine.fact",
            ),
        ),
        migrations.AlterField(
            model_name="rule",
            name="fact1",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="fact1",
                to="inference_engine.fact",
            ),
        ),
        migrations.AlterField(
            model_name="rule",
            name="fact2",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="fact2",
                to="inference_engine.fact",
            ),
        ),
    ]
