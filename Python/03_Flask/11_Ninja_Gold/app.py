# -*- python -*-

from flask import Flask, render_template, redirect, request, session
import random
from datetime import datetime

app = Flask( __name__ )

app.secret_key = "NinjaGoldSecretKey"

@app.route( "/" )
def index():
    if "your_gold" not in session:
        session["your_gold"] = 0
        session["activity"] = ""
    return( render_template( "index.html" ) )

@app.route( "/process_money", methods=["POST"] )
def process_money():
    loc = request.form["loc"]
    c_date = datetime.now()
    if loc == "farm":
        new_gold = random.randint( 10, 20 )
        session["activity"] += "Earned {} golds from the farm! ({})\n".format( new_gold, c_date )
        session["your_gold"] += new_gold
    elif loc == "cave":
        new_gold = random.randint( 5, 10 )
        session["activity"] += "Earned {} golds from the cave! ({})\n".format( new_gold, c_date )
        session["your_gold"] += new_gold
    elif loc == "house":
        new_gold = random.randint( 2, 5 )
        session["activity"] += "Earned {} golds from the house! ({})\n".format( new_gold, c_date )
        session["your_gold"] += new_gold
    elif loc == "casino":
        new_gold = random.randint( -50, 50 )
        if new_gold >= 0:
            session["activity"] += "Entered a casino and won {} golds... Cool.. ({})\n".format( new_gold, c_date )
        else:
            session["activity"] += "Entered a casino and lost {} golds... Ouch.. ({})\n".format( abs( new_gold ), c_date )
        session["your_gold"] += new_gold
    return( redirect( "/" ) )

@app.route( "/reset", methods=["POST"] )
def reset():
    session.pop( "your_gold" )
    return( redirect( "/" ) )

app.run( debug=True )
