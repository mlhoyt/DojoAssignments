from django.shortcuts import render, redirect, reverse, HttpResponse

def index(request):
    if 'login_id' in request.session:
        return render( request, "secrets_app/index.html" )
    else:
        return redirect( reverse( "login:index" ) )

def most_popular(request):
    return HttpResponse( "TODO: secrets:most_popular" )

def add_secret(request):
    if request.method == "POST":
        return HttpResponse( "TODO: secrets:add_secret")
    else:
        return redirect( reverse( "secrets:index" ) )
