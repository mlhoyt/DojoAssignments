from django.shortcuts import render, redirect
from .models import Users

def index( request ):
    if 'success_username' in request.session:
        request.session.pop( 'success_username' )
    return render( request, "main_app/index.html" )

def add_user( request ):
    request.session['username'] = request.POST['username']
    if len( request.session['username'] ) < 8:
        request.session['error_msg'] = "Username is NOT valid -- too short"
        return redirect( "/" )
    elif len( request.session['username'] ) > 16:
        request.session['error_msg'] = "Username is NOT valid -- too long"
        return redirect( "/" )
    elif len( Users.objects.filter( email__startswith = request.session['username'] + "@") ) > 0:
        request.session['error_msg'] = "Username is NOT valid -- already used"
        return redirect( "/" )
    else:
        Users.objects.create(
            email = request.session['username'] + "@codingdojo.com"
        )
        request.session['success_username'] = request.session['username']
        if 'error_msg' in request.session:
            request.session.pop( 'error_msg' )
        request.session.pop( 'username' )
        return redirect( "/success" )

def delete_user( request, id ):
    Users.objects.get( id = id ).delete()
    return redirect( "/success" )

def success( request ):
    context = {
        'users': Users.objects.all(),
        'username': request.session['success_username'],
    }
    return render( request, "main_app/success.html", context )
