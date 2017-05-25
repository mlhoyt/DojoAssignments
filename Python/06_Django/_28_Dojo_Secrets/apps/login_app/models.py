from __future__ import unicode_literals

from django.db import models

import re

email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


import bcrypt

def get_passwd_hash( passwd ):
    return( bcrypt.hashpw( passwd, bcrypt.gensalt() ) )


class UsersManager( models.Manager ):
    def register( self, postData ):
        errors = []

        # validate email (raw content)
        if len( postData['email'] ) < 1:
            errors.append( "The email field is empty." )
        elif not email_regex.match( postData['email'] ):
            errors.append( "Incorrectly formatted email." )
        # validate email (not in DB)
        elif len( self.filter( email = postData['email'] ) ) > 0:
            errors.append( "The email ({}) is already used.".format( postData['email'] ) )
        # validate first_name (raw content)
        if len( postData['f_name'] ) < 1:
            errors.append( "The first name field is empty." )
        elif not postData['f_name'].isalpha():
            errors.append( "The first name field can only contain letters." )
        # validate last_name (raw content)
        if len( postData['l_name'] ) < 1:
            errors.append( "The last name field is empty." )
        elif not postData['l_name'].isalpha():
            errors.append( "The last name field can only contain letters." )
        # validate passwd_1 (raw content)
        if len( postData['passwd_1'] ) < 1:
            errors.append( "The password field is empty." )
        elif len( postData['passwd_1'] ) < 8:
            errors.append( "The password field MUST be AT LEAST 8 characters!" )
        elif not re.match( r'^.*[A-Z]+.*$', postData['passwd_1'] ):
            errors.append( "The password field MUST contain AT LEAST 1 capital letter!" )
        elif not re.match( r'^.*\d+.*$', postData['passwd_1'] ):
            errors.append( "The password field MUST contain AT LEAST 1 number!" )
        # validate passwd_1 against passwd_2
        if postData['passwd_1'] != postData['passwd_2']:
            errors.append( "The password and confirm password fields MUST match!" )

        # return
        if len( errors ):
            return {
                'status': False,
                'errors': errors
            }
        else:
            return {
                'status': True,
                'user': self.create(
                    email = postData['email'],
                    first_name = postData['f_name'],
                    last_name = postData['l_name'],
                    password = get_passwd_hash( postData['passwd_1'].encode() ),
                )
            }

    def login( self, postData ):
        errors = []

        # validate email (raw content)
        if len( postData['email'] ) < 1:
            errors.append( "The email field is empty." )
        elif not email_regex.match( postData['email'] ):
            errors.append( "Incorrectly formatted email." )
        # validate email (in DB)
        elif len( self.filter( email = postData['email'] ) ) < 1:
            errors.append( "Unknown email." )
        # validate password (raw content)
        elif len( postData['passwd'] ) < 1:
            errors.append( "The password field is empty." )
        # validate password (matches DB)
        else:
            user = self.get( email = postData['email'] )
            if bcrypt.hashpw( postData['passwd'].encode(), user.password.encode() ) != user.password:
                errors.append( "Incorrect email or password." )

        # return
        if len( errors ):
            return {
                'status': False,
                'errors': errors
            }
        else:
            return {
                'status': True,
                'user': self.get( email = postData['email'] )
            }

    def add_predefined_data( self ):
        self.create(
            email = "AbCde@f.x",
            first_name = "Ab",
            last_name = "Cde",
            password = get_passwd_hash( "1password".encode() ),
        )
        self.create(
            email = "a@b.c",
            first_name = "A",
            last_name = "Bc",
            password = get_passwd_hash( "2password".encode() ),
        )
        self.create(
            email = "x@y.z",
            first_name = "X",
            last_name = "Yz",
            password = get_passwd_hash( "password2".encode() ),
        )


class Users( models.Model ):
    first_name = models.CharField( max_length = 255 )
    last_name = models.CharField( max_length = 255 )
    email = models.CharField( max_length = 255 )
    password = models.CharField( max_length = 40 )
    created_at = models.DateTimeField( auto_now_add = True )
    updated_at = models.DateTimeField( auto_now = True )

    objects = UsersManager()
