# -*- python -*-

# Assignment: Hospital

# You're going to build a hospital with patients in it! Create a hospital class.
# Before looking at the requirements below, think about what you might want each patient and hospital to be able to do.

# Patient:
# - attributes:
#   - id: an id number
#   - name
#   - allergies
#   - bed_number: should be none by default

# Hospital
# - attributes:
#   - patients: an empty array
#   - name: hospital name
#   - capacity: an integer indicating the maximum number of patients the hospital can hold.
# - methods:
#   - admit:
#     1) if the length of the list is >= the capacity then do not admit the patient.
#        Return a message saying the hospital is full.
#     2) add a patient to the list of patients
#     3) assign the patient a bed number
#     4) Return a message confirming that admission is complete
#   - discharge:
#     1) look up and remove a patient from the list of patients.
#     2) change bed number for that patient back to none.

# This is a challenging assignment. Ask yourself what input each method requires and what output you will need.

import Patient
patient1 = Patient.Patient( 123, "John Doe", [] )
print patient1
patient2 = Patient.Patient( 131, "Jane Smith", ["Penicilin"] )
print patient2
patient3 = Patient.Patient( 145, "Jess Queen", ["Nuts", "Dairy", "Gluten"] )
print patient3
patient4 = Patient.Patient( 157, "Jack Humble", ["Pollen"] )
print patient4
patient5 = Patient.Patient( 157, "Princess Leia", ["Smugglers"] )
print patient5

import Hospital
hospital1 = Hospital.Hospital( "MiniDojo", 3 )
print hospital1.admit( patient1 )
print patient1
print hospital1.admit( patient2 )
print patient2
print hospital1.admit( patient3 )
print patient3
print hospital1.admit( patient4 )
print patient4
print patient5
print hospital1
print hospital1.discharge( 131 )
print patient1
print patient2
print patient3
print patient4
print hospital1.admit( patient4 )
print patient4
print hospital1
print hospital1.admit( patient5 )
print patient5
print hospital1
