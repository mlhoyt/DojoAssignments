from django.shortcuts import render, redirect, reverse, HttpResponse
from django.contrib import messages
from .models import Authors, Books, Reviews
from ..login.models import Users

# render
def index( request ):
    context = {
        'recent_reviews': Reviews.objects.recent(),
        'all_books': Books.objects.all(),
        # dbview
        'all_users': Users.objects.all(),
        'all_authors': Authors.objects.all(),
        'all_reviews': Reviews.objects.all(),
    }
    return render( request, "book_reviews/index.html", context )

# render
def add_book( request ):
    context = {
        'all_authors': Authors.objects.all(),
    }
    return render( request, "book_reviews/add_book.html", context )

# render
def view_book( request, id ):
    context = {
        'book': Books.objects.get( id = id ),
    }
    return render( request, "book_reviews/view_book.html", context )

# action
def add_book_and_review( request ):
    if request.method == "POST":
        db_result = Books.objects.add_book_and_review( int( request.session['login_id'] ), request.POST )
        if not db_result['status']:
            for i in db_result['errors']:
                messages.add_message( request, messages.INFO, "- " + i )
            return redirect( reverse ( "book_reviews:add_book" ) )
        else:
            return redirect( reverse ( "book_reviews:view_book", kwargs = { 'id': db_result['book'].id } ) )
    else:
        return redirect( reverse( "book_reviews:add_book" ) )

# action
def add_review( request ):
    if request.method == "POST":
        Reviews.objects.add_review( int( request.session['login_id'] ), request.POST )
        return redirect( request.META['HTTP_REFERER'] )
    else:
        return redirect( request.META['HTTP_REFERER'] )

# action
def delete_review( request, id ):
    if 'login_id' not in request.session:
        return redirect( reverse( 'login:index' ) )
    else:
        Reviews.objects.remove( id )
        return redirect( request.META['HTTP_REFERER'] )

# redirect -> render
def catcher( request ):
    return redirect( reverse( "book_reviews:index" ) )
