# -*- python -*-

# Optional Assignment: The Requests Library
# Build a simple program that makes use of the requests module.

# In addition to including a lot of great features in the language itself, there
# are many modules available for install via pip that are a lot of fun to work with.
# We talked a little about pip before, so you should have the basic idea that pip
# exists so that developers can use code other people have written.

# One of those code libraries is called requests.
# It allows you to make HTTP requests from a python file and get back a useful
# response. This library is a simple way to make requests to and get responses
# from a server without having to set one up yourself. This might remind you a
# little of using AJAX to interact with API's like you did in web fundamentals.
# Give it a try and get creative with the data you try to get back.

# You'll have a much easier time if you install a virtual environment.
# Find the instructions to do so from below or from external resource:
#     http://learn.codingdojo.com/m/7/3677/24671

# You'll find the documentation for requests from below:
#     http://docs.python-requests.org/en/master/
# We highly recommend trying the code samples in the Quickstart Guide:
#     http://docs.python-requests.org/en/master/user/quickstart/

# NOTE: Make sure to call this with "python2.7" rather than just "python"

import requests

# r = requests.get('https://api.github.com/events')
r = requests.get('http://www.google.com')

print "StatusCode:", r.status_code
print "Encoding:", r.encoding
print "Headers:"
for k in r.headers:
    print "    {}: {}".format( k, r.headers[k] )
print "Content:"
print r.content
