from django.shortcuts import render, redirect

def index(request):
    if 'nr_submits' not in request.session:
        request.session['nr_submits'] = 0
    return render( request, "survey_form/index.html" )

def submit(request):
    if request.method == "POST":
        print request.POST
        request.session['nr_submits'] += 1
        request.session['name'] = request.POST['name'][:]
        request.session['location'] = request.POST['location'][:]
        request.session['fav_lang'] = request.POST['fav_lang'][:]
        request.session['comments'] = request.POST['comments'][:]
        return redirect ( '/result' )
    else:
        return redirect ( '/' )

def result(request):
    return render( request, "survey_form/result.html" )
