from django.shortcuts import render, redirect
import random

VALUES = [
    "alpha",
    "bravo",
    "charlie",
    "delta",
    "echo",
    "foxtrot",
    "golf",
    "hotel",
    "india",
    "juliet",
    "kilo",
    "lima",
    "mike",
]

def shuffle_values():
    for i in range( len( VALUES ) / 2 ):
        j = random.randint( 0, len( VALUES ) - 1 )
        VALUES[i], VALUES[j] = VALUES[j], VALUES[i]
        
def index(request):
    return render( request, "surprise_me/index.html" )

def ready(request):
    shuffle_values()
    nr_items = int( request.POST['nr_items'] )
    request.session['surprises'] = VALUES[:nr_items]
    return redirect( "/results" )

def results(request):
    return render( request, "surprise_me/results.html" )
