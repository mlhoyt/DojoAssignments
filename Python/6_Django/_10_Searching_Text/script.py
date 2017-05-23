# -*- pythong -*-

import re

ifh = open( "Pride_and_Prejudice_Chapter_01.txt", "r" )
ifh_text = ifh.read()
ifh.close()

# See: https://www.tutorialspoint.com/python/python_reg_expressions.htm

# re match - re.match(pattern, string, flags=0) => reMatchObject
# -- Implicitly at BEGINNING of string
# re search - re.search(pattern, string, flags=0) => reMatchObject
# -- ANYWHERE in string
# re findall - re.findall(pattern, string) => list
# re split -- re.split(pattern, string) => list
# re sub - re.sub(pattern, repl, string, max=0) => string

######################################################################

# #0 Print the length of the read string to roughly verify content
# print len( ifh_text )

#1 Find all the occurrences of the word wife in the document.
# - Print the number of times that word occurs in the document.
print "Test #1 ..."
test1 = re.findall( r'wife', ifh_text )
ofh = open( "output1.txt", "w" );
ofh.write( str( len( test1 ) ) )
ofh.write( "\n" );
for i in test1:
    ofh.write( i );
    ofh.write( "\n" );
ofh.close()

#2 Print a new string (the entire contents of the document) where
# the word 'wife' is replaced with the word 'unicorn'.
print "Test #2 ..."
test2 = re.sub( r'wife', 'unicorn', ifh_text )
ofh = open( "output2.txt", "w" ); ofh.write( test2 ); ofh.close()

#3 Print a list of all the words containing the letter 't'
print "Test #3 ..."
tmp3 = re.split( r'\s+', ifh_text )
ofh = open( "output3.txt", "w" );
for word in tmp3:
    if re.search( r't', word ):
        ofh.write( word );
        ofh.write( "\n" );
ofh.close()

#4 Split the document into a list of words and print the list to the terminal.
print "Test #4 ..."
tmp4 = re.split( r'\s+', re.sub( r'[\"\.\,]', ' ', ifh_text ) )
ofh = open( "output4.txt", "w" );
for word in tmp4:
    ofh.write( word );
    ofh.write( "\n" );
ofh.close()

#5 Find and print a list of all of the punctuation in the document.
print "Test #5 ..."
tmp5dict = {}
for i in ifh_text:
    if re.match( r'[^\s\w]', i ):
        if i not in tmp5dict:
            tmp5dict[ i ] = 1
        else:
            tmp5dict[ i ] += 1
ofh = open( "output5.txt", "w" );
for k in tmp5dict:
    ofh.write( "{}: {}\n".format( k, tmp5dict[ k ] ) )
ofh.close()

#6 Split the document into a list of sentences and print the list to the terminal.
print "Test #6 ..."
tmp6 = re.split( r'\s*\n+\s*', ifh_text )
ofh = open( "output6.txt", "w" );
for i in tmp6:
    ofh.write( "{}\n".format( i ) );
ofh.close()

#7 Extra challenging: remove all the spaces and newline characters from the string.
print "Test #7 ..."
tmp7 = re.sub( r'\s', '', ifh_text )
ofh = open( "output7.txt", "w" );
ofh.write( "{}\n".format( tmp7 ) );
ofh.close()

#8 Replace the contents of the document with the new space-less string.
# print "Test #8 ..."
# ofh = open( "Pride_and_Prejudice_Chapter_01.txt", "w" )
# ofh.write( "{}\n".format( tmp7 ) );
# ofh.close()
