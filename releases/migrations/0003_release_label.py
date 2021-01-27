# Generated by Django 3.1.5 on 2021-01-27 10:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('labels', '0001_initial'),
        ('releases', '0002_release_artist'),
    ]

    operations = [
        migrations.AddField(
            model_name='release',
            name='label',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='label_releases', to='labels.label'),
            preserve_default=False,
        ),
    ]
