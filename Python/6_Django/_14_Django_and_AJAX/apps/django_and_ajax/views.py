from django.shortcuts import render, HttpResponse

def index(request):
    return render( request, "django_and_ajax/index.html" )

def message(request):
    return HttpResponse( "Hello, from the server!" )
