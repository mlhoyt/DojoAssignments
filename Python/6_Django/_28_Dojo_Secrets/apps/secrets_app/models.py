from __future__ import unicode_literals
from django.db.models import Count
from ..login_app.models import Users

from django.db import models

class SecretsManager( models.Manager ):
    def add_secret( self, author_id, postData ):
        if len( postData['secret'] ) > 0:
            self.create(
                secret = postData['secret'],
                authored_by = Users.objects.get( id = author_id ),
            )

    def delete_secret( self, secret_id ):
        self.get( id = secret_id ).delete()

    def add_like( self, secret_id, liker_id ):
        if len( Users.objects.filter( likes_secrets__id = secret_id ).filter( id = liker_id ) ) == 0:
            self.get( id = secret_id ).liked_by.add( Users.objects.get( id = liker_id ) )

    def get_recent_secrets( self ):
        return self.all().annotate( num_likes = Count( 'liked_by' ) ).order_by( 'created_at' ).reverse()[:10]

class Secrets( models.Model ):
    secret = models.CharField( max_length = 255 )
    authored_by = models.ForeignKey( Users, related_name = "authored_secrets" )
    liked_by = models.ManyToManyField( Users, related_name = "likes_secrets" )
    created_at = models.DateTimeField( auto_now_add = True )
    updated_at = models.DateTimeField( auto_now = True )

    objects = SecretsManager()
