# -*- python -*-
from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
import os, binascii, md5
import re

app = Flask(__name__)
app.secret_key = "LoginRegistrationSecretKey"

mysql = MySQLConnector( app, '5_Users_App' )


email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

def get_passwd_salt():
    return( binascii.b2a_hex( os.urandom( 15 ) ) )

def get_passwd_hash( passwd, salt ):
    return( md5.new( passwd + salt ).hexdigest() )


@app.route( '/' )
def index():
    if 'login_id' in session:
        return( render_template( 'welcome.html' ) )
    else:
        return( render_template( 'index.html' ) )

@app.route( '/register', methods=['POST'] )
def register():
    u_email = request.form['email']
    u_f_name = request.form['f_name']
    u_l_name = request.form['l_name']
    u_passwd_1 = request.form['passwd_1']
    u_passwd_2 = request.form['passwd_2']

    # validate email
    if len( u_email ) < 1:
        flash( "Unable to register!  The email field is empty." )
        return( redirect( '/status' ) )
    elif not email_regex.match( u_email ):
        flash( "Unable to register!  Incorrectly formatted email." )
        return( redirect( '/status' ) )
    else:
        db_query = "SELECT id FROM users WHERE email = :email"
        db_data = { 'email': u_email }
        db_result = mysql.query_db( db_query, db_data )
        if len( db_result ) > 0:
            flash( "Unable to register!  This email ({}) is already used.".format( u_email ) )
            return( redirect( '/status' ) )

    # validate f_name
    if len( u_f_name ) < 1:
        flash( "Unable to register!  The first name field is empty." )
        return( redirect( '/status' ) )
    elif not u_f_name.isalpha():
        flash( "Unable to register!  The first name field can only contain letters." )
        return( redirect( '/status' ) )

    # validate l_name
    if len( u_l_name ) < 1:
        flash( "Unable to register!  The last name field is empty." )
        return( redirect( '/status' ) )
    elif not u_l_name.isalpha():
        flash( "Unable to register!  The last name field can only contain letters." )
        return( redirect( '/status' ) )

    # validate passwd_1
    if len( u_passwd_1 ) < 1:
        flash( "Unable to register!  The password field is empty." )
        return( redirect( '/status' ) )
    elif len( u_passwd_1 ) < 8:
        flash( "Unable to register!  The password field MUST be AT LEAST 8 characters!" )
        return( redirect( '/status' ) )
    elif not re.match( r'^.*[A-Z]+.*$', u_passwd_1 ):
        flash( "Unable to register!  The password field MUST contain AT LEAST 1 capital letter!" )
        return( redirect( '/status' ) )
    elif not re.match( r'^.*\d+.*$', u_passwd_1 ):
        flash( "Unable to register!  The password field MUST contain AT LEAST 1 number!" )
        return( redirect( '/status' ) )

    # validate passwd_2 against passwd_1
    if u_passwd_1 != u_passwd_2:
        flash( "Unable to register!  The password and confirm password fields MUST match!" )
        return( redirect( '/status' ) )

    # store registration in db
    u_passwd_salt = get_passwd_salt()
    u_passwd_hash = get_passwd_hash( u_passwd_1, u_passwd_salt )
    db_query = "INSERT INTO users {} VALUES {}".format(
        "(email, first_name, last_name, password, salt, created_at, updated_at)",
        "(:email, :f_name, :l_name, :passwd, :salt, NOW(), NOW())"
    )
    db_data = {
        'email': u_email,
        'f_name': u_f_name,
        'l_name': u_l_name,
        'passwd': u_passwd_hash,
        'salt': u_passwd_salt
    }
    db_result = mysql.query_db( db_query, db_data )
    session['login_id'] = db_result
    session['email'] = u_email
    session['f_name'] = u_f_name
    session['new_registration'] = 1
    return( redirect( '/success' ) )

@app.route( '/login', methods=['POST'] )
def login():
    u_email = request.form['email']
    u_passwd = request.form['passwd']

    if len( u_email ) < 1:
        flash( "Unable to login!  The email field is empty." )
        return( redirect( '/status' ) )
    elif not email_regex.match( u_email ):
        flash( "Unable to login!  Incorrectly formatted email." )
        return( redirect( '/status' ) )
    elif len( u_passwd ) < 1:
        flash( "Unable to login!  The password field is empty." )
        return( redirect( '/status' ) )
    else:
        db_query = "SELECT id, email, first_name, password, salt FROM users WHERE email = :email"
        db_data = { 'email': u_email }
        db_result = mysql.query_db( db_query, db_data )
        if len( db_result ) < 1:
            flash( "Unable to login!  Unknown email." )
            return( redirect( '/status' ) )
        elif get_passwd_hash( u_passwd, db_result[0]['salt'] ) != db_result[0]['password']:
            flash( "Unable to login!  Incorrect email or password." )
            return( redirect( '/status' ) )
        else:
            print db_result[0]
            session['login_id'] = db_result[0]['id']
            session['email'] = db_result[0]['email']
            session['f_name'] = db_result[0]['first_name']
            return( redirect( '/success' ) )

@app.route( '/status' )
def status():
    return( render_template( 'status.html' ) )

@app.route( '/success' )
def success():
    return( render_template( 'success.html' ) )

@app.route( '/logout', methods=['POST'] )
def logout():
    session.clear()
    return( redirect( '/' ) )

if __name__ == '__main__':
    app.run(debug=True)
