# -*- python -*-

from flask import Flask, render_template, redirect, request  # session, flash
from mysqlconnection import MySQLConnector

app = Flask(__name__)

mysql = MySQLConnector( app, 'friends' )

@app.route( '/' )
def index():
    query = "SELECT {}, {}, {}, {} FROM friends".format(
        "name",
        "age",
        "DATE_FORMAT(created_at,'%b %D') AS since_month_day",
        "DATE_FORMAT(created_at,'%Y') AS since_year"
    )
    friends = mysql.query_db( query )
    return render_template('index.html', all_friends=friends )

@app.route( '/create', methods=['POST'] )
def create():
    # Run query, with dictionary values injected into the query.
    # mysql.query_db(query, data)
    query = "INSERT INTO {} {} VALUES {}".format(
        "friends",
        "(name, age, created_at, updated_at)",
        "(:name, :age, NOW(), NOW())"
    )
    data = {
        'name': request.form['name'],
        'age':  request.form['age']
    }
    # Run query, with dictionary values injected into the query.
    mysql.query_db( query, data )
    return redirect( '/' )

if __name__ == '__main__':
    app.run(debug=True)
