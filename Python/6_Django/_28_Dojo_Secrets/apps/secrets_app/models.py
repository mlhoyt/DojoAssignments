from __future__ import unicode_literals
from ..login_app.models import Users

from django.db import models

class Secrets( models.Model ):
    secret = models.CharField( max_length = 255 )
    authored_by = models.ForeignKey( Users, related_name = "authored_secrets" )
    liked_by = models.ManyToManyField( Users, related_name = "likes_secrets" )
    created_at = models.DateTimeField( auto_now_add = True )
    updated_at = models.DateTimeField( auto_now = True )
