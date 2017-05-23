from django.shortcuts import render, redirect
from datetime import datetime
import random

def index(request):
    if "your_gold" not in request.session:
        request.session["your_gold"] = 0
        request.session["activity"] = ""
    return render( request, 'ninja_gold/index.html' )

def process_money(request):
    if request.method == "POST":
        loc = request.POST["loc"]
        c_date = datetime.now()
        if loc == "farm":
            new_gold = random.randint( 10, 20 )
            request.session["activity"] += "Earned {} golds from the farm! ({})\n".format( new_gold, c_date )
            request.session["your_gold"] += new_gold
        elif loc == "cave":
            new_gold = random.randint( 5, 10 )
            request.session["activity"] += "Earned {} golds from the cave! ({})\n".format( new_gold, c_date )
            request.session["your_gold"] += new_gold
        elif loc == "house":
            new_gold = random.randint( 2, 5 )
            request.session["activity"] += "Earned {} golds from the house! ({})\n".format( new_gold, c_date )
            request.session["your_gold"] += new_gold
        elif loc == "casino":
            new_gold = random.randint( -50, 50 )
            if new_gold >= 0:
                request.session["activity"] += "Entered a casino and won {} golds... Cool.. ({})\n".format( new_gold, c_date )
            else:
                request.session["activity"] += "Entered a casino and lost {} golds... Ouch.. ({})\n".format( abs( new_gold ), c_date )
            request.session["your_gold"] += new_gold
    return( redirect( "/" ) )

def reset(request):
    if request.method == "POST":
        request.session.clear()
    return( redirect( "/" ) )
