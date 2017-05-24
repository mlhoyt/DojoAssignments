from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Users
import re
import os, binascii, md5

email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

def get_passwd_salt():
    return( binascii.b2a_hex( os.urandom( 15 ) ) )

def get_passwd_hash( passwd, salt ):
    return( md5.new( passwd + salt ).hexdigest() )


def index( request ):
    if 'login_id' in request.session:
        return render( request, "login_app/welcome.html" )
    else:
        return render( request, "login_app/index.html" )

def add_predefined_data( request ):
    Users.objects.add_predefined_data()
    return redirect( "/" )

def register_validate_email( request, u_email ):
    if len( u_email ) < 1:
        messages.add_message( request, messages.INFO, 'Unable to register! The email field is empty.' )
        return( False )
    elif not email_regex.match( u_email ):
        messages.add_message( request, messages.INFO, 'Unable to register! Incorrectly formatted email.' )
        return( False )
    else:
        if len( Users.objects.filter( email = u_email ) ) > 0:
            messages.add_message( request, messages.INFO, "Unable to register! This email ({}) is already used.".format( u_email ) )
            return( False)
        else:
            return( True )

def register_validate_first_name( request, u_name ):
    if len( u_name ) < 1:
        messages.add_message( request, messages.INFO, "Unable to register! The first name field is empty." )
        return( False )
    elif not u_name.isalpha():
        messages.add_message( request, messages.INFO, "Unable to register! The first name field can only contain letters." )
        return( False )
    else:
        return( True )

def register_validate_last_name( request, u_name ):
    if len( u_name ) < 1:
        messages.add_message( request, messages.INFO, "Unable to register! The last name field is empty." )
        return( False )
    elif not u_name.isalpha():
        messages.add_message( request, messages.INFO, "Unable to register! The last name field can only contain letters." )
        return( False )
    else:
        return( True )

def register_validate_password( request, u_passwd ):
    if len( u_passwd ) < 1:
        messages.add_message( request, messages.INFO, "Unable to register! The password field is empty." )
        return( False )
    elif len( u_passwd ) < 8:
        messages.add_message( request, messages.INFO, "Unable to register! The password field MUST be AT LEAST 8 characters!" )
        return( False )
    elif not re.match( r'^.*[A-Z]+.*$', u_passwd ):
        messages.add_message( request, messages.INFO, "Unable to register! The password field MUST contain AT LEAST 1 capital letter!" )
        return( False )
    elif not re.match( r'^.*\d+.*$', u_passwd ):
        messages.add_message( request, messages.INFO, "Unable to register! The password field MUST contain AT LEAST 1 number!" )
        return( False )
    else:
        return( True )

def register( request ):
    u_email = request.POST['email']
    u_f_name = request.POST['f_name']
    u_l_name = request.POST['l_name']
    u_passwd_1 = request.POST['passwd_1']
    u_passwd_2 = request.POST['passwd_2']

    # validate
    if not register_validate_email( request, u_email ):
        return redirect( "/status" )
    if not register_validate_first_name( request, u_f_name ):
        return redirect( "/status" )
    if not register_validate_last_name( request, u_l_name ):
        return redirect( "/status" )
    if not register_validate_password( request, u_passwd_1 ):
        return redirect( "/status" )
    # validate passwd_1 against passwd_2
    if u_passwd_1 != u_passwd_2:
        messages.add_message( request, messages.INFO, "Unable to register! The password and confirm password fields MUST match!" )
        return( redirect( '/status' ) )

    # store registration in db
    u_passwd_salt = get_passwd_salt()
    u_passwd_hash = get_passwd_hash( u_passwd_1, u_passwd_salt )
    db_result = Users.objects.create(
        email = u_email,
        first_name = u_f_name,
        last_name = u_l_name,
        password = u_passwd_hash,
        salt = u_passwd_salt,
    )
    request.session['login_id'] = db_result.id
    request.session['email'] = u_email
    request.session['f_name'] = u_f_name
    request.session['new_registration'] = 1
    return( redirect( '/success' ) )

def login( request ):
    db_result = Users.objects.login( request.POST )

    if not db_result['status']:
        messages.add_message( request, messages.INFO, "Unable to login!" )
        for i in db_result['errors']:
            messages.add_message( request, messages.INFO, "- " + i )
        return( redirect( '/status' ) )
    else:
        request.session['login_id'] = db_result['user'].id
        request.session['email'] = db_result['user'].email
        request.session['f_name'] = db_result['user'].first_name
        return( redirect( '/success' ) )

def status( request ):
    return render( request, "login_app/status.html" )

def success( request ):
    return render( request, "login_app/success.html" )

def logout( request ):
    request.session.clear()
    return redirect( "/" )
