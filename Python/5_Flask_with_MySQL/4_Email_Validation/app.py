# -*- python -*-

from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
import re

app = Flask(__name__)

app.secret_key = "EmailValidationSecretKey"

mysql = MySQLConnector( app, 'emails' )

email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route( '/' )
def index():
    return render_template( 'index.html' )

@app.route( '/verify', methods=['POST'] )
def verify():
    nr_errors = 0

    s_email = request.form['email']
    if len( s_email ) < 1:
        flash( "Email is NOT valid!" )
        nr_errors += 1
    elif not email_regex.match( s_email ):
        flash( "Email is NOT valid!" )
        nr_errors += 1
    else:
        query = "SELECT {} FROM {}".format(
            "email",
            "emails",
        )
        db_emails = mysql.query_db( query )
        is_match = False
        for db_email in db_emails:
            if db_email['email'] == s_email:
                is_match = True
                break;
        if is_match:
            flash( "Email IS VALID but already exists")
            nr_errors += 1

    if nr_errors > 0:
        return redirect( '/' )
    else:
        query = "INSERT INTO {} {} VALUES {}".format(
            "emails",
            "(email, created_at, updated_at)",
            "(:email, NOW(), NOW())"
        )
        data = {
            'email': s_email
        }
        mysql.query_db( query, data )
        flash( "The email address you entered ({}) is a VALID email address!  Thank you!".format(
            s_email
        ))
        return redirect( '/success' )

@app.route( '/success' )
def success():
    query = "SELECT {}, {}, {} FROM {}".format(
        "email",
        "DATE_FORMAT(created_at, '%Y-%m-%d') AS since_date",
        "DATE_FORMAT(created_at, '%l:%i%p') AS since_time",
        "emails"
    )
    db_emails = mysql.query_db( query )
    return render_template( 'success.html', all_emails=db_emails )

@app.route( '/remove_email', methods=['POST'] )
def remove_email():
    remove_email = request.form['remove_email']
    query = "DELETE FROM emails WHERE email = :email"
    data = { 'email': remove_email }
    mysql.query_db( query, data )
    return redirect( '/success' )

if __name__ == '__main__':
    app.run(debug=True)
