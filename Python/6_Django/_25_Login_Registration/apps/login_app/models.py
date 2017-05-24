from __future__ import unicode_literals

from django.db import models

import re

email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


import os, binascii, md5

def get_passwd_salt():
    return( binascii.b2a_hex( os.urandom( 15 ) ) )

def get_passwd_hash( passwd, salt ):
    return( md5.new( passwd + salt ).hexdigest() )


class UsersManager( models.Manager ):
    def login( self, postData ):
        errors = []
        user = None

        # validate email (raw content)
        u_email = postData['email']
        if len( u_email ) < 1:
            errors.append( "The email field is empty." )
        elif not email_regex.match( postData['email'] ):
            errors.append( "Incorrectly formatted email." )
        # validate password (raw content)
        elif len( postData['passwd'] ) < 1:
            errors.append( "The password field is empty." )
        else:
            # validate email (in DB)
            users = self.filter( email = postData['email'] )
            if len( users ) < 1:
                errors.append( "Unknown email." )
            else:
                # validate password (matches DB)
                user = self.get( email = postData['email'] )
                if get_passwd_hash( postData['passwd'], user.salt ) != user.password:
                    errors.append( "Incorrect email or password." )

        # return
        if len( errors ):
            return { 'status': False, 'errors': errors }
        else:
            return { 'status': True, 'user': user }

    def add_predefined_data( self ):
        self.create(
            email = "AbCde@f.x",
            first_name = "Ab",
            last_name = "Cde",
            password = "d554cd79bb09a064e714146fcdf9593e", # 1password
            salt = "28d0e694c86f0c47ecd910a0348130",
        )
        self.create(
            email = "gh_ijk@l.y",
            first_name = "Gh",
            last_name = "Ijk",
            password = "ea9b64123c0bed77a641fbef723a9fb6", # 2password
            salt = "cb52189918385519677cdff03a0012",
        )
        self.create(
            email = "Mn_Opq@r.y",
            first_name = "Mn",
            last_name = "Opq",
            password = "6e8a2346251bb05cf6bf7773501a5997", # password1
            salt = "45e9ae8382bdd321174a89d3091dc3",
        )


class Users( models.Model ):
    first_name = models.CharField( max_length = 255 )
    last_name = models.CharField( max_length = 255 )
    email = models.CharField( max_length = 255 )
    password = models.CharField( max_length = 40 )
    salt = models.CharField( max_length = 40 )
    created_at = models.DateTimeField( auto_now_add = True )
    updated_at = models.DateTimeField( auto_now = True )

    objects = UsersManager()
