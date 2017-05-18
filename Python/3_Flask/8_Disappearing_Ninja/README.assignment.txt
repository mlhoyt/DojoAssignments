# -*- text -*-

Assignment: Disappearing Ninja

Build a flask application with the below functionality.
This exercise will help you practice URL routing, using views, and rendering static content.

These are the routes that you need to set up:
  - The default page ('localhost:5000')
    - Display a view that says "No ninjas here"
  - /ninja
    - Display all four Ninja Turtles (Leonardo, Michelangelo, Raphael, and Donatello)
  - /ninja/[ninja_color]
    - Display the corresponding Ninja Turtle (grab the color parameter out of the requested URL)
    - Ex: /ninja/blue, it should only display the Ninja Turtle Leonardo.
    - Ex: /ninja/orange - ... Ninja Turtle Michelangelo.
    - Ex: /ninja/red - ... Ninja Turtle Raphael
    - Ex: /ninja/purple - ... Ninja Turtle Donatello
  - /ninja/<other>
    - Display the image notapril.jpg

You'll need to remember how to use static files for this assignment.
Take a minute to refresh your memory back to the static files section.

