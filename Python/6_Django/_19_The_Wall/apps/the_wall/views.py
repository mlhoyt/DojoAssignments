from django.shortcuts import render, redirect
from .models import Users, Messages, Comments

def index(request):
    context = {
        "users": Users.objects.all(),
        "messages": Messages.objects.all(),
        "comments": Comments.objects.all(),
    }
    return render( request, "the_wall/index.html", context )

def add_users_data():
    Users.objects.create(
        first_name = 'Michael',
        last_name = 'Choi',
        email = 'mchoi@codingdojo.co',
        password = 'd554cd79bb09a064e714146fcdf9593e',  # 1password
        salt = '28d0e694c86f0c47ecd910a0348130',
    )
    Users.objects.create(
        first_name = 'Corey',
        last_name = 'Whiteland',
        email = 'cwhiteland@codingdojo.co',
        password = 'd554cd79bb09a064e714146fcdf9593e',  # 1password
        salt = '28d0e694c86f0c47ecd910a0348130',
    )
    Users.objects.create(
        first_name = 'Ab',
        last_name = 'Cde',
        email = 'AbCde@f.x',
        password = 'd554cd79bb09a064e714146fcdf9593e',  # 1password
        salt = '28d0e694c86f0c47ecd910a0348130',
    )
    Users.objects.create(
        first_name = 'Victor',
        last_name = 'Tran',
        email = 'Victor_Tran@codingdojo.co',
        password = 'd554cd79bb09a064e714146fcdf9593e',  # 1password
        salt = '28d0e694c86f0c47ecd910a0348130',
    )
    Users.objects.create(
        first_name = 'Eva',
        last_name = 'Roa',
        email = 'Eva_Roa@codingdojo.co',
        password = 'd554cd79bb09a064e714146fcdf9593e',  # 1password
        salt = '28d0e694c86f0c47ecd910a0348130',
    )

def add_messages_data():
    Messages.objects.create(
        user_id = Users.objects.get( id = 2 ),
        message = "This is my message." * 10,
    )
    Messages.objects.create(
        user_id = Users.objects.get( id = 2 ),
        message = "This is my message." * 10,
    )
    Messages.objects.create(
        user_id = Users.objects.get( id = 1 ),
        message = "This is my message." * 10,
    )

def add_comments_data():
    Comments.objects.create(
        message_id = Messages.objects.get( id = 2 ),
        user_id = Users.objects.get( id = 4 ),
        comment = "This is a comment." * 5,
    )
    Comments.objects.create(
        message_id = Messages.objects.get( id = 3 ),
        user_id = Users.objects.get( id = 4 ),
        comment = "This is a comment." * 5,
    )
    Comments.objects.create(
        message_id = Messages.objects.get( id = 3 ),
        user_id = Users.objects.get( id = 5 ),
        comment = "This is a comment." * 5,
    )

def add_data(request):
    add_users_data()
    add_messages_data()
    add_comments_data()
    return redirect( "/" )

def remove_data(request):
    Comments.objects.all().delete()
    Messages.objects.all().delete()
    Users.objects.all().delete()
    return redirect( "/" )
    
