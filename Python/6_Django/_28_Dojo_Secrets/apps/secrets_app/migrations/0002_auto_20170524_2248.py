# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-05-24 22:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('secrets_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='secrets',
            name='liked_by',
            field=models.ManyToManyField(null=True, related_name='likes_secrets', to='login_app.Users'),
        ),
    ]
