# -*- python -*-

from flask import Flask, render_template, redirect, request, session
import random

app = Flask( __name__ )

app.secret_key = "GreatNumberGameSecretKey"

@app.route( '/' )
def index():
    if 'state' not in session:
        session["state"] = "init"
        session["value"] = random.randint( 1, 100 )

    return( render_template( "index.html" ) )

@app.route( '/guess', methods=['POST'] )
def guess():
    c_guess = int( request.form['c_guess'] )
    if c_guess < session['value']:
        session["state"] = "too_low"
    elif c_guess > session['value']:
        session["state"] = "too_high"
    else:
        session["state"] = "bingo"

    return( redirect( '/' ) )

@app.route( '/again', methods=['POST'] )
def again():
    session.pop( "state" )

    return( redirect( '/' ) )

app.run( debug=True )
