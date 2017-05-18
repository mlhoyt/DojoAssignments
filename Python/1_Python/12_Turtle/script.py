# -*- python -*-

# Optional Assignment: Python Turtle
# Try drawing a simple picture using the Python module Turtle.
#
# Turtle is a Python drawing module for kids. It uses Python's built-in ability
# to test GUI apps as you write the code. Even though it's for kids, you can do
# some complex drawing with it.
#
# Learning new technologies, languages, modules, plugins, and libraries is a
# very common practice for any programmer.
#
# When you learn about something new, make sure to try it, even if it's silly!
# Being curious is key to being a good developer!

# Here is an example of what we can do using Turtle:

# # try this either as a .py file or in the python shell
# import turtle
# # the distance we want the pointer to travel each time
# DIST = 100
# for x in range(0,6):
#     print "x", x
#     for y in range(1,5):
#         print "y", y
#         # turn the pointer 90 degrees to the right
#         turtle.right(90)
#         # advance according to set distance
#         turtle.forward(DIST)
#     # add to set distance
#     DIST += 20

######################################################################
# Turtle API
#   References:
#     https://michael0x2a.com/blog/turtle-examples)
#     http://stackoverflow.com/questions/20502766/setting-the-angle-of-a-turtle-in-python
# --------------------------------------------------------------------
# NOTE: position starts at (0,0) which is the MIDDLE of the window
# import turtle
# turtle.Screen()                   ## This appears unnecessary
# <var> = turtle.Turtle()           ## Return an instance of a pen
# turtle.forward( <nrPixels:int> )  ## Moves pen FORWARD <nrPixels> pixels
# turtle.backward( <nrPixels:int> ) ## Moves pen BACKWARD <nrPixels> pixels
# turtle.left( <nrDegrees:int> )    ## Rotates pen LEFT <nrDegress> degrees
# turtle.right( <nrDegrees:int> )   ## Rotates pen RIGHT <nrDegress> degrees
# turtle.pencolor( <color:str> )    ## Set pen COLOR (names or #rrggbb)
# turtle.dot()                      ## Draw a DOT at the current location
# turtle.penup()                    ## LIFT pen (lines are NOT drawn if moved)
# turtle.setposition(0, 0)          ## Set pen ABSOLUTE POSITION
# turtle.pendown()                  ## LOWER pen (lines ARE drawn if moved)
# turtle.speed( <speed:int(0..10)>) ## Set pen draw SPEED: 1=slow, 10=fast, 0=warp
# turtle.done()                     ## Waits for window to be closed
######################################################################

import turtle

# ------------------------------------------------------------------------------
# Square::ClockWise
# ------------------------------------------------------------------------------
def turtle_draw_square_cw( p, l, xc=0, yc=0, c="black", s=5 ):
    s_prev = p.speed()
    p.penup()
    p.setposition( xc, yc )
    p.pencolor( c )
    p.speed( s )
    p.dot()
    p.setposition( (xc - (l / 2)), (yc - (l / 2)) )
    p.setheading( 90 )
    p.dot()
    p.pendown()
    for i in range( 0, 4 ):
        p.forward( l )
        p.right( 90 )
    p.speed( s_prev )

# ------------------------------------------------------------------------------
# Square::CounterClockWise
# ------------------------------------------------------------------------------
def turtle_draw_square_ccw( p, l, xc=0, yc=0, c="black", s=5 ):
    s_prev = p.speed()
    p.penup()
    p.setposition( xc, yc )
    p.pencolor( c )
    p.speed( s )
    p.dot()
    p.setposition( (xc - (l / 2)), (yc - (l / 2)) )
    p.setheading( 180 )
    p.dot()
    p.pendown()
    for i in range( 0, 4 ):
        p.backward( l )
        p.left( 90 )
    p.speed( s_prev )

# ------------------------------------------------------------------------------
# Circle::ClockWise
# ------------------------------------------------------------------------------
def turtle_draw_circle_cw( p, r, xc=0, yc=0, c="black", s=5 ):
    s_prev = p.speed()
    p.penup()
    p.setposition( xc, yc )
    p.pencolor( c )
    p.speed( s )
    p.dot()
    p.setposition( xc, (yc - r) )
    p.setheading( 180 )
    p.dot()
    p.pendown()
    l = (2 * 3.14159 * r) / 180
    for i in range( 0, 180 ):
        p.forward( l )
        p.right( 2 )
    p.speed( s_prev )

# ------------------------------------------------------------------------------
# Circle::CounterClockWise
# ------------------------------------------------------------------------------
def turtle_draw_circle_ccw( p, r, xc=0, yc=0, c="black", s=5 ):
    s_prev = p.speed()
    p.penup()
    p.setposition( xc, yc )
    p.pencolor( c )
    p.speed( s )
    p.dot()
    p.setposition( xc, (yc - r) )
    p.setheading( 180 )
    p.dot()
    p.pendown()
    l = (2 * 3.14159 * r) / 180
    for i in range( 0, 180 ):
        p.backward( l )
        p.left( 2 )
    p.speed( s_prev )

# ------------------------------------------------------------------------------
# 5-point Star
# ------------------------------------------------------------------------------
def turtle_draw_5pt_star( p, r, xc=0, yc=0, c="black", s=5 ):
    s_prev = p.speed()
    a = 360 / 5
    l = r * 1.9  ## TODO: This is not quite right
    p.penup()
    p.setposition( xc, yc )
    p.pencolor( c )
    p.speed( s )
    p.dot()
    p.setposition( xc, (yc + r) )
    p.setheading( 90 + (2.25 * a) )
    p.dot()
    p.pendown()
    for i in range( 0, 5 ):
        if i != 0:
            p.left( 2 * a )
        p.forward( l )
    p.speed( s_prev )

# ------------------------------------------------------------------------------
# 5-point Spiraling (outward) Star
# ------------------------------------------------------------------------------
def turtle_draw_5pt_star_spiral( p, r, n=1, xc=0, yc=0, c="black", s=5 ):
    s_prev = p.speed()
    a = 360.0 / 5
    l = r * 1.9 ## TODO: This is not quite right
    p.penup()
    p.setposition( xc, yc )
    p.pencolor( c )
    p.speed( s )
    p.dot()
    p.setposition( xc, (yc + r) )
    p.setheading( 90 + (2.25 * a) )
    p.dot()
    p.pendown()
    for i in range( 0, (5 * n) ):
        if i != 0:
            p.left( 2 * a )
        p.forward( l + (i * 10) )
    p.speed( s_prev )


# ------------------------------------------------------------------------------
# Polygon
# ------------------------------------------------------------------------------
def turtle_draw_polygon( p, r, n, xc=0, yc=0, c="black", s=5):
    s_prev = p.speed()
    a = 360.0 / n
    l = r
    p.penup()
    p.setposition( xc, yc )
    p.pencolor( c )
    p.speed( s )
    p.dot()
    p.setposition( xc, (yc + r) )
    p.setheading( 270 - (1.0 * a) )
    p.dot()
    p.pendown()
    for i in range( 0, n ):
        if i != 0:
            p.left( a )
        p.forward( l )
    p.speed( s_prev )

# ------------------------------------------------------------------------------
# Dot Grid
# ------------------------------------------------------------------------------
def turtle_draw_dot_grid( p, xn, yn, xs, ys, xc=0, yc=0, c="black", s=5):
    p.penup()
    p.setposition( xc, yc )
    p.pencolor( "cyan" )
    p.speed( s )
    p.dot()
    p.pencolor( c )
    p.setposition( (xc - (xn * xs / 2)), (yc + (yn * ys / 2)) )
    p.setheading( 0 )
    for r in range( 0, yn ):
        for c in range( 0, xn ):
            p.dot()
            p.forward( xs )
        p.backward( xn * xs )
        p.right( 90 )
        p.forward( ys )
        p.left( 90 )
    p.pendown()

# ------------------------------------------------------------------------------
# XY Axis
# ------------------------------------------------------------------------------
def turtle_draw_line( p, x1, y1, x2, y2, c="black", s=5):
    p.penup()
    p.setposition( x1, y1 )
    p.pencolor( c )
    p.speed( s )
    p.down()
    p.setposition( x2, y2 )

def turtle_draw_xy_axis( p, xl, yl, xt, yt, xc=0, yc=0, c="black", s=5):
    turtle_draw_line( p, xc, (yc + (yl / 2)), xc, (yc - (yl / 2)), c, s )
    turtle_draw_line( p, (xc - (xl / 2)), yc, (xc + (xl / 2)), yc, c, s )
    for x in range( (xc - (xl / 2)), (xc + (xl / 2)) + 1, xt ):
        turtle_draw_line( p, x, (yc - 5), x, (yc + 5), c, s )
    for y in range( (yc - (yl / 2)), (yc + (yl / 2)) + 1, yt ):
        turtle_draw_line( p, (xc - 5), y, (xc + 5), y, c, s )

# ------------------------------------------------------------------------------
# Testing
# ------------------------------------------------------------------------------
turtle_draw_square_cw       ( turtle, 50,        -150, 150, "red" )
turtle_draw_square_ccw      ( turtle, 50,         -50, 150, "orange" )
turtle_draw_circle_cw       ( turtle, (50/2),      50, 150, "yellow" )
turtle_draw_circle_ccw      ( turtle, (50/2),     150, 150, "green" )

turtle_draw_circle_cw       ( turtle, (50/2),    -150,  50, "yellow", 0 )
turtle_draw_5pt_star        ( turtle, (50/2),    -150,  50, "blue" )
turtle_draw_5pt_star_spiral ( turtle, (50/2), 3,  -50,  50, "cyan" )

turtle_draw_polygon         ( turtle, (50/2), 3, -150, -50, "red", 2)
turtle_draw_polygon         ( turtle, (50/2), 5,  -50, -50, "orange", 2)
turtle_draw_polygon         ( turtle, (50/2), 6,   50, -50, "yellow", 2)
turtle_draw_polygon         ( turtle, (50/2), 7,  150, -50, "green", 2)

turtle_draw_dot_grid ( turtle, 5, 5, 10, 15, -150, -150, "blue", 2)
turtle_draw_xy_axis  ( turtle, 50, 100, 5, 10, -50, -150, "gray", 2)

# ------------------------------------------------------------------------------
# Done
# ------------------------------------------------------------------------------
turtle.done()
