# -*- python -*-

class CallCenter(object):
    def __init__( self ):
        self.calls = []
        self.queue_size = 0

    def add( self, call ):
        self.calls.append( call )
        self.queue_size += 1
        return( self )

    def remove( self ):
        self.calls.remove( self.calls[0] )
        self.queue_size -= 1
        return( self )

    def remove_by_phone_number( self, phone_number ):
        for i in self.calls:
            if i.phone_number == phone_number:
                self.calls.remove( i )
                self.queue_size -= 1
        return( self )

    def info( self ):
        print "instance CallCenter:", self.queue_size, "calls in the queue"
        for i in self.calls:
            print "instance CallCenter: Call:", i.phone_number, i.name, i.time

    def display( self ):
        for i in self.calls:
            i.display()

    def order_calls_by_time( self ):
        self.calls.sort( key=lambda x: x.time )
        return( self )
