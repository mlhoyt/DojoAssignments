from django.shortcuts import render
import datetime

class tz( datetime.tzinfo ):
    def __init__( self, offset, is_dst, name ):
        self.offset = offset
        self.is_dst = is_dst
        self.name = name
    def utcoffset( self, dt ):
        return datetime.timedelta( hours = self.offset ) + self.dst( dt )
    def dst( self, dt ):
        return datetime.timedelta( hours = 1 ) if self.is_dst else datetime.timedelta( 0 )
    def tzname( self, dt ):
         return self.name

def index(request):
    dt = datetime.datetime.now( tz( -7, False, 'PST' ) )
    context = { 'currentDateTime': dt.strftime("%Y-%m (%B)-%d (%A) at %H:%M:%S (%I:%M%p)") }
    return render( request, 'time_display/index.html', context )
