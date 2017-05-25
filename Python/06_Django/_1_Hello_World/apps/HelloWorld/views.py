from django.shortcuts import render
import sys

def index(request):
  print >>sys.stderr, 'Hello, World!'
  return render( request, 'HelloWorld/index.html' )

