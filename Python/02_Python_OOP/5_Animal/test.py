# -*- python -*-

# Assignment: Animal

# Create an Animal class and give it the below attributes and methods.
# Extend the Animal class to two child classes, Dog and Dragon.

# Objective
# The objective of this assignment is to help you understand inheritance.
# Remember that a class is more than just a collection of properties and methods.
# If you want to create a new class with attributes and methods that are already
# defined in another class, you can have this new class inherit from that other
# class (called the parent) instead of copying and pasting code from the original
# class. Child classes can access all the attributes and methods of a parent class
# AND have new attributes and methods of its own, for child instances to call.
# As we see with Wizard / Ninja / Samurai (that are each descended from Human),
# we can have numerous unique child classes that inherit from the same parent class.

# Animal Class
# Create a class called Animal:
# - attributes:
#   - name
#   - health
#     - Give a new Animal 100 health when it gets created.
# - methods:
#   - walk
#     - When the walk() method is invoked, have the health decrease by 1.
#   - run
#     - When the run() method is invoked, have the health decrease by 5.
#   - displayHealth
#     - When the displayHealth() method is invoked, display on screen the name of the Animal and the health.

# Create an instance of the Animal, have it:
# - walk() three times
# - run() twice
# - displayHealth()
# Confirm that the health attribute has changed.

# Dog Class
# Create a class called Dog that inherits everything that the Animal does:
# - the Dog class should have a default health of 150
# - a new method called pet(), which increases the health by 5.

# Create an instance of the Dog, have it:
# - walk() three times
# - run() twice
# - pet() once
# - displayHealth()

# Dragon Class
# Create a class called Dragon that also inherits everything from Animal.
# - the Dragon class should have the default health be 170
# - a new method called fly(), which decreased the health by 10.

# Create an instance of the Dragon, have it:
# - walk() three times,
# - run() twice,
# - fly() twice,
# - displayHealth().
# When the Dragon's displayHealth() function is called, it should say 'this is a dragon!' before it displays the default information.
# You can achieve this by calling the parent's displayHealth() function.

# Create a new Animal and confirm that it can not call the pet() and fly() methods,
# and it's displayHealth() is not saying 'this is a dragon!'.
# Also confirm that your Dog class can not fly().

import Animal

animal1 = Animal.Animal( "myAnimal1" )
animal1.walk()
animal1.walk()
animal1.walk()
animal1.run()
animal1.run()
animal1.displayHealth()
# Confirm that the health attribute has changed.

import Dog

dog1 = Dog.Dog( "myDog1" )
dog1.walk()
dog1.walk()
dog1.walk()
dog1.run()
dog1.run()
dog1.pet()
dog1.displayHealth()
try:
    dog1.fly()
except Exception as e:
    print "Exception: Cannot use method .fly() on Dog instance!"

import Dragon

dragon1 = Dragon.Dragon( "myDragon1" )
dragon1.walk()
dragon1.walk()
dragon1.walk()
dragon1.run()
dragon1.run()
dragon1.fly()
dragon1.displayHealth()

animal2 = Animal.Animal( "myAnimal2" )
try:
    animal2.pet()
except Exception as e:
    print "Exception: Cannot use method .pet() on Animal instance!"
try:
    animal2.fly()
except Exception as e:
    print "Exception: Cannot use method .fly() on Animal instance!"
animal2.displayHealth()
# Should NOT say 'this is a dragon!'.

# Should organize modules as:
# .../
#   Animals/
#     __init__.py: __all__ = ["Animal", "Dog", "Dragon"]
#     Animal.py
#     Dog.py
#     Dragon.py
#
# test.py: import Animals
#
# Not clear if there are other implicatons (Animal.<blah> -> Animals.<blah>)
