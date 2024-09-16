# Generated by Django 5.0.7 on 2024-08-29 03:55

from django.db import migrations


def clear_phone_numbers(apps, schema_editor):
    ClientProfile = apps.get_model("accounts", "ClientProfile")
    ClientContact = apps.get_model("accounts", "ClientContact")
    ClientProfile.objects.update(phone_number=None)
    ClientContact.objects.update(phone_number=None)


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0033_alter_clientcontact_phone_number_and_more"),
    ]

    operations = [
        migrations.RunPython(clear_phone_numbers),
    ]