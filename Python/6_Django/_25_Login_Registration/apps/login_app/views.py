from django.shortcuts import render, redirect
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
    Users.objects.create(
        email = "AbCde@f.x",
        first_name = "Ab",
        last_name = "Cde",
        password = "d554cd79bb09a064e714146fcdf9593e", # 1password
        salt = "28d0e694c86f0c47ecd910a0348130",
    )
    Users.objects.create(
        email = "gh_ijk@l.y",
        first_name = "Gh",
        last_name = "Ijk",
        password = "ea9b64123c0bed77a641fbef723a9fb6", # 2password
        salt = "cb52189918385519677cdff03a0012",
    )
    Users.objects.create(
        email = "Mn_Opq@r.y",
        first_name = "Mn",
        last_name = "Opq",
        password = "6e8a2346251bb05cf6bf7773501a5997", # password1
        salt = "45e9ae8382bdd321174a89d3091dc3",
    )
    return redirect( "/" )

def register_validate_email( u_email ):
    if len( u_email ) < 1:
        # flash( "Unable to register!  The email field is empty." )
        return( redirect( '/status' ) )
    elif not email_regex.match( u_email ):
        # flash( "Unable to register!  Incorrectly formatted email." )
        return( redirect( '/status' ) )
    else:
        if len( Users.objects.filter( email = u_email ) ) > 0:
            # flash( "Unable to register!  This email ({}) is already used.".format( u_email ) )
            return( redirect( '/status' ) )

def register_validate_first_name( u_name ):
    if len( u_name ) < 1:
        # flash( "Unable to register!  The first name field is empty." )
        return( redirect( '/status' ) )
    elif not u_name.isalpha():
        # flash( "Unable to register!  The first name field can only contain letters." )
        return( redirect( '/status' ) )

def register_validate_last_name( u_name ):
    if len( u_name ) < 1:
        # flash( "Unable to register!  The last name field is empty." )
        return( redirect( '/status' ) )
    elif not u_name.isalpha():
        # flash( "Unable to register!  The last name field can only contain letters." )
        return( redirect( '/status' ) )

def register_validate_password( u_passwd ):
    if len( u_passwd ) < 1:
        # flash( "Unable to register!  The password field is empty." )
        return( redirect( '/status' ) )
    elif len( u_passwd ) < 8:
        # flash( "Unable to register!  The password field MUST be AT LEAST 8 characters!" )
        return( redirect( '/status' ) )
    elif not re.match( r'^.*[A-Z]+.*$', u_passwd ):
        # flash( "Unable to register!  The password field MUST contain AT LEAST 1 capital letter!" )
        return( redirect( '/status' ) )
    elif not re.match( r'^.*\d+.*$', u_passwd ):
        # flash( "Unable to register!  The password field MUST contain AT LEAST 1 number!" )
        return( redirect( '/status' ) )

def register( request ):
    u_email = request.POST['email']
    u_f_name = request.POST['f_name']
    u_l_name = request.POST['l_name']
    u_passwd_1 = request.POST['passwd_1']
    u_passwd_2 = request.POST['passwd_2']

    # validate
    register_validate_email( u_email )
    register_validate_first_name( u_f_name )
    register_validate_last_name( u_l_name )
    register_validate_password( u_passwd_1 )
    # validate passwd_1 against passwd_2
    if u_passwd_1 != u_passwd_2:
        # flash( "Unable to register!  The password and confirm password fields MUST match!" )
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

def login_validate_email( u_email ):
    if len( u_email ) < 1:
        # flash( "Unable to login!  The email field is empty." )
        return( redirect( '/status' ) )
    elif not email_regex.match( u_email ):
        # flash( "Unable to login!  Incorrectly formatted email." )
        return( redirect( '/status' ) )

def login_validate_password( u_passwd ):
    if len( u_passwd ) < 1:
        # flash( "Unable to login!  The password field is empty." )
        return( redirect( '/status' ) )

def login( request ):
    u_email = request.POST['email']
    u_passwd = request.POST['passwd']

    # validate
    login_validate_email( u_email )
    login_validate_password( u_passwd )

    users = Users.objects.filter( email = u_email )
    if len( users ) < 1:
        # flash( "Unable to login!  Unknown email." )
        return( redirect( '/status' ) )
    user = Users.objects.get( email = u_email )
    if get_passwd_hash( u_passwd, user.salt ) != user.password:
        # flash( "Unable to login!  Incorrect email or password." )
        return( redirect( '/status' ) )
    else:
        request.session['login_id'] = user.id
        request.session['email'] = user.email
        request.session['f_name'] = user.first_name
        return( redirect( '/success' ) )

def status( request ):
    return render( request, "login_app/status.html" )

def success( request ):
    return render( request, "login_app/success.html" )

def logout( request ):
    request.session.clear()
    return redirect( "/" )
