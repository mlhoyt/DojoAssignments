# -*- python -*-

from flask import Flask, render_template, redirect, request, session

app = Flask( __name__ )
app.secret_key = "CounterSecretKey"

@app.route( '/' )
def index():
    if 'counter' not in session:
        session['counter'] = 1
    else:
        session['counter'] += 1
    return( render_template( "index.html" ) )

@app.route( '/update', methods=['POST'] )
def update():
    # Increment by 1 because index() will also increment by 1
    session['counter'] += 1
    return( redirect( '/' ) )

@app.route( '/reset', methods=['POST'] )
def reset():
    # Reset to 0 because index() will also increment by 1
    session['counter'] = 0
    return( redirect( '/' ) )

# @app.route( '/update', methods=['POST'] )
# def update():
#     if request.form['action'] == "incr":
#         # Increment by 1 because index() will also increment by 1
#         session['counter'] += 1
#     else:
#         # Reset to 0 because index() will also increment by 1
#         session['counter'] = 0
#     return( redirect( '/' ) )

app.run( debug=True )
