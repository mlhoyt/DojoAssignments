# -*- python -*-

# Make Change
#
# You'll probably remember this one from your morning algorithm sessions,
# but I'll explain it just in case you haven't done it yet.
#
# Write a function that takes an amount of money in cents and returns the fewest number of coins possible for
# the number of cents. Here's an example, given the input 387. Now that you have a few tools at your disposal,
# the output should be a dictionary, as shown below:
#
# Solving this problem may seem relatively simple, and it is, as long as we use only one type of currency.
# Here we are assuming American currency:
#     - Dollar: 1
#     - Half-Dollar: 0.5 (optional)
#     - Quarter: 0.25
#     - Dime: 0.1
#     - Nickel: 0.05
#     - Penny: 0.01
# To help get you started, here's the basic outline for your function:
#
#     def change(cents):
#         # {'dollars': 3, 'quarters': 3, 'dimes': 1, 'nickels': 0, 'pennies': 2}
#         coins = {}
#         ...
#         return coins
#
# Modifying this algorithm to work with any currency is a very difficult to solve problem. If you want an
# extra hard challenge or to learn about something called dynamic programming, you can give it a shot, but
# don't spend too long on it (no more than 2 hours).

def change( cents ):
    money_values = [
        ('dollars', 100),
        ('half-dollars', 50),
        ('quarters', 25),
        ('dimes', 10),
        ('nickels', 5),
        ('pennies', 1)
    ]

    coins = {}

    for k,v in money_values:
        coins[k] = cents / v
        cents %= v

    return( coins )

# Testing
print "Money:", 19, "Change:", change( 19 )
print "Money:", 78, "Change:", change( 78 )
print "Money:", 183, "Change:", change( 183 )
