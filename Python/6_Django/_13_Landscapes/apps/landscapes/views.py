from django.shortcuts import render, redirect

def is_prime( n ):
    for i in range( 2, n ):
        if n % i == 0:
            return False
    else:
        return True

def index(request):
    return render( request, "landscapes/index.html" )

def random(request, id):
    id_nr = int( id )
    img_root = "http://lorempixel.com"
    img_size = "400/400"
    img_category = ""
    if id_nr <= 0:
        img_category = "ERROR"
    elif id_nr <= 10:
        img_category = "abstract"
    elif id_nr <= 20:
        img_id = id_nr - 10
        img_category = "animals"
    elif id_nr <= 30:
        img_id = id_nr - 20
        img_category = "nature"
    elif id_nr <= 40:
        img_id = id_nr - 30
        img_category = "sports"
    elif id_nr <= 50:
        img_id = id_nr - 40
        img_category = "technics"
    else:
        img_category = "ERROR"

    if img_category == "ERROR":
        return redirect ( '/' )
    else:
        if is_prime( id_nr ):
            img_root += "/g"
            if img_category == "abstract":
                img_category = "food"
        context = { 'img_src': "{}/{}/{}/{}".format( img_root, img_size, img_category, img_id ) }
        return render( request, "landscapes/random.html", context )
