# -*- python -*-

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index.html')
def index():
    return render_template( "index.html" )

@app.route('/success')
@app.route('/success/')
@app.route('/success.html')
def success():
    return render_template( "success.html" )

app.run(debug=True)
