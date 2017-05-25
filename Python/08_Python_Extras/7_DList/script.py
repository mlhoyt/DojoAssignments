# -*- python -*-

# Doubly-Linked Lists
#
# These exercises are designed to help you prepare for technical interviews and to reinforce concepts you've learned about OOP. If you want to be better prepared for technical interviews, it's helpful to know linked lists and how they are used. Some interesting puzzles can be solved using linked lists (and you may be asked to solve problems using linked lists in technical interviews).
#
# In technical interviews, our alumni are commonly asked problems involving linked lists. Learn about doubly-linked lists, also known as DLists. (You may already know singly-linked lists (SLists), which are simpler and more common, but you'll learn more by researching doubly-linked lists.)
#
# http://en.wikipedia.org/wiki/Doubly_linked_list would be a great start.
#
# Once you have learned about linked lists, build a class in Python and demonstrate how you can
#
# add a new node to the end of the list delete an existing node insert a node in between existing nodes(before and after node of given value)
#
# You should have two classes for this: DoublyLinkedList and Node. Have DoublyLinkedList be the class that allows you to add a new node, delete an existing node, insert a new node between existing nodes, print out the values in the linked list. Have Node be the class that has the necessary properties for the node.
#
# Spend no more than 5 hours implementing this.
#
# Analogy of Linked List
# After you read the Wikipedia's version, if you want, you can also watch Michael's videos where he explains ideas around Linked Lists, and how to implement them.  Watch these videos, but read Wikipedia's version first, to get familiar with technical terms.

class DLNode( object ):
    def __init__( self, value ):
        self.value = value;
        self.prev = None;
        self.next = None;

    def __repr__( self ):
        return( "({})".format( self.value ) )

class DList( object ):
    NODE_ID = 0;

    @staticmethod
    def get_node_id():
        DList.NODE_ID += 1
        return( DList.NODE_ID )

    def __init__( self ):
        self.head = None

    def __repr__( self ):
        nodeVals = ""
        runner = self.head
        while runner != None:
            nodeVals += "{}".format( runner )
            runner = runner.next
        return( "({})".format( nodeVals ) )

    def push_back( self, value ):
        newNode = DLNode( value )

        if not self.head:
            self.head = newNode
            return( True )
        else:
            runner = self.head
            while runner.next != None:
                runner = runner.next
            runner.next = newNode
            newNode.prev = runner
            return( True )

    def remove( self, value ):
        if not self.head:
            return( False )
        elif self.head.value == value:
            if not self.head.next:
                self.head = None
            else:
                self.head = self.head.next
                self.head.prev = None
            return( True )
        else:
            runner = self.head
            while( runner.next != None ):
                if runner.next.value == value:
                    runner.next = runner.next.next
                    if runner.next:
                        runner.next.prev = runner
                    return( True )
                runner = runner.next
            return( False )

    # insert a node in before an existing node
    def insert_before( self, cmpValue, value ):
        if not self.head:
            return( False )
        elif self.head.value == cmpValue:
            newNode = DLNode( value )
            newNode.next = self.head
            self.head = newNode
            return( True )
        else:
            runner = self.head
            while runner.next != None:
                if runner.next.value == cmpValue:
                    newNode = DLNode( value )
                    newNode.next = runner.next
                    runner.next = newNode
                    return( True )
                runner = runner.next
            return( False )

    # insert a node in after an existing node
    def insert_after( self, cmpValue, value ):
        if not self.head:
            return( False )
        else:
            runner = self.head
            while runner.next != None:
                if runner.value == cmpValue:
                    newNode = DLNode( value )
                    nextNode = runner.next
                    nextNode.prev = newNode
                    newNode.next = nextNode
                    newNode.prev = runner
                    runner.next = newNode
                    return( True )
                runner = runner.next
            if runner.value == cmpValue:
                newNode = DLNode( value )
                newNode.prev = runner
                runner.next = newNode
                return( True )
            else:
                return( False )

# Testing - constructor
dllEmpty = DList()
print dllEmpty

# Testing - push_back
dll0 = DList()
print dll0
print "dll0.push_back(5)", dll0.push_back( 5 )
print dll0
print "dll0.push_back(4)", dll0.push_back( 4 )
print dll0
print "dll0.push_back(3)", dll0.push_back( 3 )
print dll0
print "dll0.push_back(2)", dll0.push_back( 2 )
print dll0
print "dll0.push_back(1)", dll0.push_back( 1 )
print dll0

print "dllEmpty.remove(13)", dllEmpty.remove( 13 )
print dll0
print "dll0.remove(13)", dll0.remove( 13 )
print dll0
print "dll0.remove(5)", dll0.remove( 5 )
print dll0
print "dll0.remove(1)", dll0.remove( 1 )
print dll0
print "dll0.remove(3)", dll0.remove( 3 )
print dll0
print "dll0.remove(2)", dll0.remove( 2 )
print dll0
print "dll0.remove(2)", dll0.remove( 4 )
print dll0
print "dll0.remove(13)", dll0.remove( 13 )
print dll0

print "dll0.push_back(5)", dll0.push_back( 5 )
print "dll0.push_back(4)", dll0.push_back( 4 )
print "dll0.push_back(3)", dll0.push_back( 3 )
print "dll0.push_back(2)", dll0.push_back( 2 )
print "dll0.push_back(1)", dll0.push_back( 1 )
print "dllEmpty.insert_before(13,6)", dllEmpty.insert_before( 13, 6 )
print dll0
print "dll0.insert_before(13,6)", dll0.insert_before( 13, 6 )
print dll0
print "dll0.insert_before(5,6)", dll0.insert_before( 5, 6 )
print dll0
print "dll0.insert_before(3,7)", dll0.insert_before( 3, 7 )
print dll0
print "dll0.insert_before(1,8)", dll0.insert_before( 1, 8 )
print dll0

dll1 = DList();
print "dll1.push_back(5)", dll1.push_back( 5 )
print "dll1.push_back(4)", dll1.push_back( 4 )
print "dll1.push_back(3)", dll1.push_back( 3 )
print "dll1.push_back(2)", dll1.push_back( 2 )
print "dll1.push_back(1)", dll1.push_back( 1 )
print "dllEmpty.insert_after(13,6)", dllEmpty.insert_after( 13, 6 )
print dll1
print "dll1.insert_after(13,6)", dll1.insert_after( 13, 6 )
print dll1
print "dll1.insert_after(5,6)", dll1.insert_after( 5, 6 )
print dll1
print "dll1.insert_after(3,7)", dll1.insert_after( 3, 7 )
print dll1
print "dll1.insert_after(1,8)", dll1.insert_after( 1, 8 )
print dll1
