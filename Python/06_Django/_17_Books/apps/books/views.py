from django.shortcuts import render, redirect

from .models import Books

def index(request):
    context = { "books": Books.objects.all() }
    return render( request, "books/index.html", context )

def add_data(request):
    Books.objects.create(
        title = 'Title1',
        author = 'Author1',
        published_date = '2017-05-01 12:34:56',
        category = 'Category1',
    )
    Books.objects.create(
        title = 'Title2',
        author = 'Author2',
        published_date = '2017-05-07 23:45:01',
        category = 'Category2',
    )
    Books.objects.create(
        title = 'Title3',
        author = 'Author3',
        published_date = '2017-05-13 04:56:12',
        category = 'Category3',
        in_print = True,
    )
    Books.objects.create(
        title = 'Title4',
        author = 'Author4',
        published_date = '2017-05-19 05:01:23',
        category = 'Category4',
        in_print = True,
    )
    Books.objects.create(
        title = 'Title5',
        author = 'Author5',
        published_date = '2017-05-25 06:12:34',
        category = 'Category5',
    )
    return redirect( "/" )

def remove_data(request):
    Books.objects.all().delete()
    return redirect( "/" )
