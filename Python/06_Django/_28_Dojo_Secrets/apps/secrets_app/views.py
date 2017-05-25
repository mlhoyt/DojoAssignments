from django.shortcuts import render, redirect, reverse
from .models import Secrets
from ..login_app.models import Users

def index(request):
    if 'login_id' in request.session:
        context = {
            'recent_secrets': Secrets.objects.get_recent_secrets(),
            'user': Users.objects.get( id = request.session['login_id'] ),
        }
        return render( request, "secrets_app/index.html", context )
    else:
        return redirect( reverse( "login:index" ) )

def most_popular(request):
    if 'login_id' in request.session:
        context = {
            'popular_secrets': Secrets.objects.get_popular_secrets(),
            'user': Users.objects.get( id = request.session['login_id'] ),
        }
        return render( request, "secrets_app/most_popular.html", context )
    else:
        return redirect( reverse( "login:index" ) )

def add_secret(request):
    if request.method == "POST":
        Secrets.objects.add_secret( int( request.session['login_id'] ), request.POST )

    return redirect( reverse( "secrets:index" ) )

def delete_secret( request, id ):
    Secrets.objects.delete_secret( id )
    return redirect( reverse( "secrets:index" ) )

def add_like( request, s_id, u_id ):
    Secrets.objects.add_like( s_id, u_id )
    return redirect( reverse( "secrets:index" ) )

def db_debug( request ):
    context = {
        'users': Users.objects.all(),
        'secrets': Secrets.objects.all(),
    }
    return render( request, "secrets_app/db_debug.html", context )
