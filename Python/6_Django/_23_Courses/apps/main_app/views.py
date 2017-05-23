from django.shortcuts import render, redirect
from .models import Courses, Descriptions

def index(request):
    context = {
        'courses': Courses.objects.all(),
    }
    return render( request, "main_app/index.html", context )

def add_predefined_data(request):
    desc = Descriptions.objects.create(
        description = "Description1",
    )
    Courses.objects.create(
        name = "How to be a ninja",
        description_id = desc,
    )
    desc = Descriptions.objects.create(
        description = "Description2",
    )
    Courses.objects.create(
        name = "How to fly",
        description_id = desc,
    )
    desc = Descriptions.objects.create(
        description = "Description3",
    )
    Courses.objects.create(
        name = "How to get more energy in the bootcamp",
        description_id = desc,
    )
    desc = Descriptions.objects.create(
        description = "Description4",
    )
    Courses.objects.create(
        name = "How to pair program more efficiently",
        description_id = desc,
    )
    return redirect( "/" )

def add_course( request ):
    desc = Descriptions.objects.create(
        description = request.POST['description'],
    )
    Courses.objects.create(
        name = request.POST['title'],
        description_id = desc,
    )
    return redirect( "/" )

def remove_course( request, id ):
    context = {
        "course": Courses.objects.get( id = id ),
    }
    return render( request, "main_app/remove_course.html", context )

def remove_course_confirm( request, id ):
    if request.POST['action'] == "continue":
        Courses.objects.get( id = id ).delete()
    return redirect( "/" )
