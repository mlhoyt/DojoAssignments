# -*- python -*-

# Assignment: Call Center

# You're creating a program for a call center.
# Every time a call comes in you need a way to track that call.
# One of your program's requirements is to store calls in a queue
# while callers wait to speak with a call center employee.

# You will create two classes. One class should be Call, the other CallCenter.

# Call():
# Create your Call class with an init method.
# - attributes:
#   - unique id
#   - caller name
#   - caller phone number
#   - time of call
#   - reason for call
# - methods:
#   - display
#     - Prints all attributes

# CallCenter():
# Create your call center class with an init method.
# - attributes:
#   - calls: should be a list of call objects
#   - queue size: should be the length of the call list
# - methods:
#   - add: adds a new call to the end of the call list
#   - remove: that removes the call from the beginning of the list (index 0).
#   - info: shows the name and phone number for each call in the queue as well as the length of the queue.
#   Ninja Level
#   - remove_by_phone_number: that can find and remove a call from the queue according to the phone number of the caller.
#   Hacker Level: Your queue SHOULD be sorted by time of call, but what if your calls get out of order?
#   - add a method to the call center class that sorts the calls in the queue according to time of call in ascending order.

# You should be able to test your code to prove that it works. Remember to build one piece at a time and test as you go for easier debugging!

import Call
from datetime import datetime

import CallCenter

callCenter1 = CallCenter.CallCenter()
callCenter1.add( Call.Call( 123, "Jane Doe", "555-123-4567", datetime.now(), "PICNIC" ) )
callCenter1.add( Call.Call( 131, "John Smith", "123-456-7890", datetime.now(), "BSOD" ) )
callCenter1.add( Call.Call( 145, "Jess Queen", "456-789-0123", datetime.now(), "Unknown" ) )
callCenter1.info()

callCenter1.remove()
callCenter1.info()

callCenter1.remove_by_phone_number( "456-789-0123" )
callCenter1.info()

callCenter1.calls.insert( 0, Call.Call( 157, "Jack Humble", "789-246-8024", datetime.now(), "Preempt" ) )
callCenter1.queue_size += 1
callCenter1.info()
callCenter1.order_calls_by_time()
callCenter1.info()
