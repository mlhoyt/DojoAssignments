from django.shortcuts import render, redirect, reverse
from django.contrib import messages
from .models import Users

def index( request ):
    if 'login_id' in request.session:
        return redirect( "secrets:index" )
    else:
        return render( request, "login_app/index.html" )

def register( request ):
    db_result = Users.objects.register( request.POST )

    if not db_result['status']:
        messages.add_message( request, messages.INFO, "Unable to register!" )
        for i in db_result['errors']:
            messages.add_message( request, messages.INFO, "- " + i )
        return redirect( "login:status" )
    else:
        request.session['login_id'] = db_result['user'].id
        request.session['email'] = db_result['user'].email
        request.session['f_name'] = db_result['user'].first_name
        request.session['new_registration'] = 1
        return redirect( "secrets:index" )

def login( request ):
    db_result = Users.objects.login( request.POST )

    if not db_result['status']:
        messages.add_message( request, messages.INFO, "Unable to login!" )
        for i in db_result['errors']:
            messages.add_message( request, messages.INFO, "- " + i )
        return redirect( "login:status" )
    else:
        request.session['login_id'] = db_result['user'].id
        request.session['email'] = db_result['user'].email
        request.session['f_name'] = db_result['user'].first_name
        return redirect( "secrets:index" )

def status( request ):
    return render( request, "login_app/status.html" )

def logout( request ):
    request.session.clear()
    return redirect( reverse( "login:index" ) )

def add_predefined_data( request ):
    Users.objects.add_predefined_data()
    return redirect( reverse( "login:index" ) )

def catcher( request ):
    return redirect( reverse( "login:index" ) )
