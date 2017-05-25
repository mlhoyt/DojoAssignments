# -*- python -*-

from flask import Flask, render_template, redirect, request, session, flash

app = Flask( __name__ )

app.secret_key = "DojoSurveyWithValidationSecretKey"

@app.route( '/' )
def index():
    return( render_template( "index.html" ) )

@app.route( '/submit', methods=['GET', 'POST'] )
def results():
    # print "Got /submit POST data"
    # print request.form
    # validate 'name' field - length GT 0
    name = request.form['name']
    if len( name ) < 1:
        flash( "The 'Your Name' field CANNOT be blank!" )
        return( redirect( "/" ) )
    # validate 'loc' field - length GT 0
    loc = request.form['loc']
    if len( loc ) < 1:
        flash( "The 'Dojo Location' field CANNOT be blank!" )
        return( redirect( "/" ) )
    # validate 'lang' field - implicitly valid
    lang = request.form['lang']
    # validate 'comments' field - length GT 0, length LT 120
    comments = request.form['comments']
    if len( comments ) < 1:
        flash( "The 'Comments' field CANNOT be blank!" )
        return( redirect( "/" ) )
    elif len( comments ) > 120:
        flash( "The 'Comments' field must be LESS THAN 120 characters!" )
        return( redirect( "/" ) )

    return( render_template( "results.html", name=name, loc=loc, lang=lang, comments=comments ) )

app.run( debug=True )
