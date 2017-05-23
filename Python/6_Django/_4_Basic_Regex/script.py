# -*- python -*-

import re
def get_matching_words( regex ):
    words = [
        "aimlessness",
        "assassin",
        "baby",
        "beekeeper",
        "belladonna",
        "cannonball",
        "crybaby",
        "denver",
        "embraceable",
        "facetious",
        "flashbulb",
        "gaslight",
        "hobgoblin",
        "iconoclast",
        "issue",
        "kebab",
        "kilo",
        "laundered",
        "mattress",
        "millennia",
        "natural",
        "obsessive",
        "paranoia",
        "queen",
        "rabble",
        "reabsorb",
        "sacrilegious",
        "schoolroom",
        "tabby",
        "tabloid",
        "unbearable",
        "union",
        "videotape",
    ]
    matches = []
    for word in words:
        if re.search( regex, word ):
            matches.append( word )
    return matches

print 'Test: All words that contain a "v"'
print get_matching_words( r'v' )
#=> ['denver', 'obsessive', 'videotape']

print 'Test: All words that contain a double-"s"'
print get_matching_words( r's{2}' )
#=> ['aimlessness', 'assassin', 'issue', 'mattress', 'obsessive']

print 'Test: All words that end with an "e"'
print get_matching_words( r'e$' )
#=> ['embraceable', 'issue', 'obsessive', 'rabble', 'unbearable', 'videotape']

print 'Test: All words that contain an "b", any character, then another "b"'
print get_matching_words( r'b.b' )
#=> ['baby', 'crybaby', 'kebab']

print 'Test: All words that contain an "b", at least one character, then another "b"'
print get_matching_words( r'b.+b' )
#=> ['baby', 'crybaby', 'embraceable', 'flashbulb', 'hobgoblin', 'kebab', 'reabsorb', 'unbearable']

print 'Test: All words that contain an "b", any number of characters (including zero), then another "b"'
print get_matching_words( r'b.*b' )
#=> ['baby', 'crybaby', 'embraceable', 'flashbulb', 'hobgoblin', 'kebab', 'rabble', 'reabsorb', 'tabby', 'unbearable']

print 'Test: All words that include all five vowels in order'
print get_matching_words( r'a.*e.*i.*o.*u' )
#=> ['facetious', 'sacrilegious']

print 'Test: All words that only use the letters in "regular expression" (each letter can appear any number of times)'
print get_matching_words( r'^[regular expression]+$' )
#=> ['assassin', 'issue', 'paranoia', 'union']

print 'Test: All words that contain a double letter'
print get_matching_words( r'([a-z])\1' )
#=> ['aimlessness', 'assassin', 'beekeeper', 'belladonna', 'cannonball', 'issue', 'mattress', 'millennia', 'obsessive', 'queen', 'rabble', 'schoolroom', 'tabby']
