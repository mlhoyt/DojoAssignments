# -*- python -*-

class Hospital(object):
    def __init__( self, name, capacity ):
        self.name = name
        self.capacity = capacity
        self.patients = []
        self.available_beds = range( 1, (self.capacity + 1) )

    def admit( self, patient ):
        if len( self.patients ) < self.capacity:
            self.patients.append( patient )
            patient.bed_number = self.available_beds.pop( 0 )
            return( "Welcome! Added patient {}".format( patient ) )
        else:
            return( "Sorry, the hospital is full!  Cannot add patient {}".format( patient ) )

    def discharge( self, id ):
        for i in self.patients:
            if i.id == id:
                self.available_beds.append( i.bed_number )
                i.bed_number = None
                self.patients.remove( i )
                return( "Goodbye! Discharged patient {}".format( i ) )
        else:
            return( "Sorry, could not find patient with id {}".format( id ) )

    def __repr__( self ):
        return(
            "{" +
            " " + "type:" + " " + "Hospital" +
            ", " + "name:" + " \"" + self.name + "\"" +
            ", " + "capacity:" + " " + str( self.capacity ) +
            ", " + "patients:" + " " + str( self.patients ) +
            " " + "}"
        )
