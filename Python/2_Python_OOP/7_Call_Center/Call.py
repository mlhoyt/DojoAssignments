# -*- python -*-

class Call(object):
    def __init__( self, id, name, phone_number, time, reason ):
        self.id = id
        self.name = name
        self.phone_number = phone_number
        self.time = time
        self.reason = reason

    def display( self ):
        print "object Call:"
        print "  id:", self.id
        print "  name:", self.name
        print "  phone_number:", self.phone_number
        print "  time:", self.time
        print "  reason:", self.reason
