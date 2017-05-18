# -*- python -*-

class Patient(object):
    def __init__( self, id, name, allergies ):
        self.id = id
        self.name = name
        self.allergies = allergies
        self.bed_number = None

    def __repr__( self ):
        return(
            "{" +
            " " + "type:" + " " + "Patient" +
            ", " + "id:" + " " + str( self.id ) +
            ", " + "name:" + " \"" + self.name + "\"" +
            ", " + "allergies:" + " " + str( self.allergies ) +
            ", " + "bed_number:" + " " + str( self.bed_number ) +
            " " + "}"
        )
