from django.shortcuts import render, redirect
from .models import Books

def index(request):
    context = {
        "books": Books.objects.all()
    }
    return render( request, "main_app/index.html", context )

def add_books_data():
    Books.objects.create(
        title = "Crime and Punishment",
        author = "Fyodor Dostoyevsky",
        category = "Classic"
    )
    Books.objects.create(
        title = "Horton Hears a Who",
        author = "Dr Seuss",
        category = "Children's"
    )
    Books.objects.create(
        title = "Howl",
        author = "Allen Ginsberg",
        category = "Poetry"
    )
    Books.objects.create(
        title = "The Joy of Cooking",
        author = "Irma S. Rombauer",
        category = "Cooking"
    )

def add_predefined_data(request):
    add_books_data()
    return redirect( "/" )

def remove_all_data(request):
    Books.objects.all().delete()
    return redirect( "/" )

def add_book(request):
    Books.objects.create(
        title = request.POST['title'],
        author = request.POST['author'],
        category = request.POST['category'],
    )
    return redirect( "/" )
