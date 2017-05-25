# -*- text -*-

Optional Assignment: Searching Text

The provided file contains the first chapter of the novel Pride and Prejudice.

Your assignment is to open this file and search it for some keywords.
Below are some hints you'll need to do this assignment.
You'll certainly need to search Google and the Python docs to help you with this assignment. It's all part of being a developer!

You'll need the built-in 'open()' function in order to open this file.
Make sure that your file is located in the same directory as your project.
Try assigning this newly opened file to a variable.
You'll need the file method 'read' in order to get the contents out of this file.
Ex: text = file.read()
Instead of search or match (what's the difference?), try using the findall method.
What does findall require as input (arguments) and what does it output (return)?
How would you use the results of findall to report to your user the number of times a pattern appears in a string?
You'll also need to use the re.split() method.  How does this function work?
How would you go about replacing a word in a string?
How about the re function sub? How does it work? What are the required inputs and resulting outputs?
Here are some more useful matching shortcuts. These are specific to the python library.

This is definitely a ninja level assignment
The ability to make sense of relevant pieces of a large quantity of data feels
like a super power once you get the hang of it.

#1 Find all the occurrences of the word wife in the document.
- Print the number of times that word occurs in the document.

#2 Print a new string (the entire contents of the document) where the word 'wife'
is replaced with the word 'unicorn'.

#3 Print a list of all the words containing the letter 't'

#4 Split the document into a list of words and print the list to the terminal.

#5 Find and print a list of all of the punctuation in the document.

#6 Split the document into a list of sentences and print the list to the terminal.

#7 Extra challenging: remove all the spaces and newline characters from the string.

#8 Replace the contents of the document with the new space-less string.

Hint: Text must be encoded in order to write to a file. Try using the 'ur' instead of 'r' prefix for your patterns and text.

