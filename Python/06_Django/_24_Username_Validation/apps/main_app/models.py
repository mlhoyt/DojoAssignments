from __future__ import unicode_literals

from django.db import models

class Users( models.Model ):
    email = models.CharField( max_length = 255 )
    created_at = models.DateTimeField( auto_now_add = True )
    updated_at = models.DateTimeField( auto_now = True )
