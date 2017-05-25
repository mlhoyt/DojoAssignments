from flask import Flask, render_template, request, redirect

app = Flask( __name__ )

@app.route( '/' )
def index():
    return render_template( "index.html", greeting="Hello and welcome!" )

@app.route( '/ninjas' )
def ninjas():
    return render_template( "ninjas.html" )

@app.route( '/dojos/new' )
def dojos():
    return render_template( "dojos.html" )

@app.route( '/dojos/update', methods=['POST'] )
def dojos_update():
    print "Got dojos/update POST data"
    name = request.form['ninja_name']
    attr = request.form['attr_name']
    val = request.form['attr_val']
    return redirect( "/" )

app.run(debug=True)
