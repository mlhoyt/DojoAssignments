# -*- python -*-

from flask import Flask, render_template, request, redirect

app = Flask( __name__ )

@app.route( '/' )
def index():
    return( render_template( "index.html" ) )

@app.route( '/process', methods=['POST'] )
def process():
    print "Got /process POST data"
    name = request.form['name']
    print "name:", name
    return( redirect( '/' ) )

app.run( debug=True )
