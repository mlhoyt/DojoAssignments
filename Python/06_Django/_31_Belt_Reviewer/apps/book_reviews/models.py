from __future__ import unicode_literals

from django.db import models
## aggregate functions
# from django.db.models import Count
## ORM tables from other apps
from ..login.models import Users

class Authors( models.Model ):
    name = models.CharField( max_length = 255 )

class Reviews( models.Model ):
    rating = models.IntegerField( default = 0 )
    comments = models.TextField()
    author = models.ForeignKey( Users, related_name = "authored_reviews" )

class Books( models.Model ):
    title = models.CharField( max_length = 255 )
    author = models.ForeignKey( Authors, related_name = "authored_books" )
    reviews = models.ForeignKey( Reviews, related_name = "book" )
