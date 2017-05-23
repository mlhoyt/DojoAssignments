# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-05-22 16:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45)),
                ('description', models.TextField()),
                ('weight', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('cost', models.DecimalField(decimal_places=2, max_digits=10)),
                ('category', models.CharField(max_length=45)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
