# Generated by Django 3.1.5 on 2021-01-27 15:15

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('releases', '0006_auto_20210127_1224'),
    ]

    operations = [
        migrations.AddField(
            model_name='release',
            name='favourited_by',
            field=models.ManyToManyField(blank=True, related_name='favourited_releases', to=settings.AUTH_USER_MODEL),
        ),
    ]
