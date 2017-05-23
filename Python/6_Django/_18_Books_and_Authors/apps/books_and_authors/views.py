from django.shortcuts import render, redirect

from .models import Authors, Books

def index(request):
    context = {
        "authors": Authors.objects.all(),
        "books": Books.objects.all(),
    }
    return render( request, "books/index.html", context )

def add_author_data():
    Authors.objects.create(
        name = 'Author1',
    )
    Authors.objects.create(
        name = 'Author2',
    )
    Authors.objects.create(
        name = 'Author3',
    )
    Authors.objects.create(
        name = 'Author4',
    )
    Authors.objects.create(
        name = 'Author5',
    )

def add_books_data():
    Books.objects.create(
        title = 'Title1',
        author_id = Authors.objects.get( name = "Author1" ),
        published_date = '2017-05-01 12:34:56',
        category = 'Category1',
    )
    Books.objects.create(
        title = 'Title2',
        author_id = Authors.objects.get( name = "Author1" ),
        published_date = '2017-05-07 23:45:01',
        category = 'Category2',
    )
    Books.objects.create(
        title = 'Title3',
        author_id = Authors.objects.get( name = "Author4" ),
        published_date = '2017-05-13 04:56:12',
        category = 'Category3',
        in_print = True,
    )
    Books.objects.create(
        title = 'Title4',
        author_id = Authors.objects.get( name = "Author4" ),
        published_date = '2017-05-19 05:01:23',
        category = 'Category4',
        in_print = True,
    )
    Books.objects.create(
        title = 'Title5',
        author_id = Authors.objects.get( name = "Author4" ),
        published_date = '2017-05-25 06:12:34',
        category = 'Category5',
    )

def add_data(request):
    add_author_data()
    add_books_data()
    return redirect( "/" )

def remove_data(request):
    Authors.objects.all().delete()
    Books.objects.all().delete()
    return redirect( "/" )
