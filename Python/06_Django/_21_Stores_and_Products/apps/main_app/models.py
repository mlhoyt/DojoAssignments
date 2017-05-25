from __future__ import unicode_literals

from django.db import models

# See: https://docs.djangoproject.com/en/1.11/ref/models/fields/
class Product( models.Model ):
    name = models.CharField( max_length = 45 )
    description = models.TextField()
    weight = models.IntegerField()
    price = models.DecimalField( max_digits = 10, decimal_places = 2 )
    cost = models.DecimalField( max_digits = 10, decimal_places = 2 )
    category = models.CharField( max_length = 45 )
    created_at = models.DateTimeField( auto_now_add = True )
    updated_at = models.DateTimeField( auto_now = True )

class Store( models.Model ):
    name = models.CharField( max_length = 255 )
    products = models.ManyToManyField( Product )
    created_at = models.DateTimeField( auto_now_add = True )
    updated_at = models.DateTimeField( auto_now = True )
