# -*- python -*-

import sys
import os, binascii
import md5

# if sys.argv[1] == '':
if len( sys.argv ) < 2:
    sys.exit( "Fatal: " + sys.argv[0] + ": You must provide one argument that is the raw password to hash(md5)!" )

raw_passwd = sys.argv[1]

salt = binascii.b2a_hex( os.urandom( 15 ) )
passwd = md5.new( raw_passwd + salt ).hexdigest()

print "raw passwd:", raw_passwd
print "salt:", salt
print "passwd:", passwd

