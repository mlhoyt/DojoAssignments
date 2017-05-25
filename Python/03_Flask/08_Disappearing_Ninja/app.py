# -*- python -*-

from flask import Flask, render_template

app = Flask( __name__ )

@app.route( '/' )
def index():
    return( render_template( "index.html" ) )

@app.route( '/ninja' )
def ninja():
    return( render_template( "ninja.html" ) )

@app.route( '/ninja/<color>' )
def ninja_select( color ):
    img_src = "img/notapril.jpg"
    if color.lower() == "purple":
        img_src = "img/donatello.jpg"
    elif color.lower() == "blue":
        img_src = "img/leonardo.jpg"
    elif color.lower() == "orange":
        img_src = "img/michelangelo.jpg"
    elif color.lower() == "red":
        img_src = "img/raphael.jpg"
    return( render_template( "ninja_select.html", img_src=img_src ) )

app.run( debug=True )
