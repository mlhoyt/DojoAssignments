from django.shortcuts import render, redirect, reverse, HttpResponse
from django.contrib import messages
from .models import Authors, Books, Reviews
from ..login.models import Users

def index( request ):
    context = {
        'recent_reviews': Reviews.objects.all(),
        'other_book_reviews': Books.objects.all(),
    }
    return render( request, "book_reviews/index.html", context )

def catcher( request ):
    return redirect( reverse( "book_reviews:index" ) )
