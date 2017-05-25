from django.shortcuts import render, redirect
import random

def get_random_alphanum_str( length=8 ):
    rv = ""
    for i in range( length ):
        t = random.randint(1,3)
        if t == 1:
            rv += chr( random.randint( 48, 57 ) )
        elif t == 2:
            rv += chr( random.randint( 65, 90 ) )
        else:
            rv += chr( random.randint( 97, 122 ) )
    return( rv )

def index(request):
    if 'nr_attempts' not in request.session:
        request.session['nr_attempts'] = 1
        request.session['random_word'] = get_random_alphanum_str( 14 )
    return render( request, 'random_word_generator/index.html' )

def generate(request):
    request.session['nr_attempts'] += 1
    request.session['random_word'] = get_random_alphanum_str( 14 )
    return redirect( '/' )

def reset(request):
    request.session['nr_attempts'] = 1
    request.session['random_word'] = get_random_alphanum_str( 14 )
    return redirect( '/' )
