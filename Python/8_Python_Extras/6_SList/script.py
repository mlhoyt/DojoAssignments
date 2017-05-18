# -*- python -*-

# SLists

# Given that we now know how to create singly linked lists and nodes, add a few methods to your SList class.
# - PrintAllVals
# - AddBack(val)
# - AddFront(val)
# - InsertBefore(nextVal, val)
# - InsertAfter(preval, val)
# - RemoveNode(val)
# - ReverseList()

# Hint: How to traverse through an SList:
#
#     list = SList()
#     list.head = SLNode('Alice')
#     list.head.next = SLNode('Chad')
#     list.head.next.next = SLNode('Debra')
#     # something close to this should be utilized for all of the above problems
#     runner = list.head
#     while(runner.next != None):
#         print(runner.val)
#         runner = runner.next

class SLNode( object ):
    def __init__( self, value ):
        self.value = value
        self.next = None

class SList( object ):
    def __init__( self ):
        self.head = None
        self.tail = None

    def AddFront( self, value ):
        if self.head == None:
            self.head = SLNode( value )
            self.tail = self.head
        elif self.head == self.tail:
            self.head = SLNode( value )
            self.head.next = self.tail
        else:
            currHead = self.head
            self.head = SLNode( value )
            self.head.next = currHead
        return( self )

    def AddBack( self, value ):
        if self.tail == None:
            self.tail = SLNode( value )
            self.head = self.tail
        elif self.tail == self.head:
            self.tail = SLNode( value )
            self.head.next = self.tail
        else:
            currTail = self.tail
            self.tail = SLNode( value )
            currTail.next = self.tail
        return( self )

    def InsertBefore( self, cmpValue, value ):
        if self.head == None:
            return( False )
        elif self.head.value == cmpValue:
            currHead = self.head
            self.head = SLNode( value )
            self.head.next = currHead
            return( True )
        else:
            runner = self.head
            while( runner.next != None ):
                if runner.next.value == cmpValue:
                    newNode = SLNode( value )
                    newNode.next = runner.next
                    runner.next = newNode
                    return( True )
                runner = runner.next
            return( False )

    def InsertAfter( self, cmpValue, value ):
        if self.head == None:
            return( False )
        else:
            runner = self.head
            while( runner != None ):
                if runner.value == cmpValue:
                    newNode = SLNode( value )
                    newNode.next = runner.next
                    runner.next = newNode
                    if self.tail == runner:
                        self.tail = newNode
                    return( True )
                runner = runner.next
            return( False )

    def RemoveNode( self, value ):
        if self.head == None:
            return( False )
        elif self.head.value == value:
            self.head = self.head.next
            return( True )
        else:
            runner = self.head
            while( runner.next != None ):
                if runner.next.value == value:
                    if self.tail == runner.next:
                        self.tail = runner
                    runner.next = runner.next.next
                    return( True )
                runner = runner.next
            return( False )

    def ReverseList( self ):
        if self.head != None and self.head.next != None:
            self.head, self.tail = self.tail, self.head
            a = None
            b = self.tail
            c = self.tail.next
            while b.next != None:
                b.next = a
                a = b
                b = c
                c = c.next
            b.next = a
            self.head = b

    def PrintAllVals( self ):
        ci = 0
        cp = self.head
        print "<SList:",
        while cp != None:
            # print "[{}]=>({})".format( ci, cp.value ),
            print "[{}]=>({})".format( ci, cp.value ),
            ci += 1
            cp = cp.next
        print ">"
        return( self )

# Testing
sllEmpty = SList()

sll0 = SList()
sll0.PrintAllVals()
print "sll0.AddBack(3)", sll0.AddBack( 3 )
sll0.PrintAllVals()
print "sll0.AddBack(2)", sll0.AddBack( 2 )
sll0.PrintAllVals()
print "sll0.AddBack(1)", sll0.AddBack( 1 )
sll0.PrintAllVals()

sll1 = SList()
sll1.PrintAllVals()
print "sll1.AddFront(4)", sll1.AddFront( 4 )
sll1.PrintAllVals()
print "sll1.AddFront(5)", sll1.AddFront( 5 )
sll1.PrintAllVals()
print "sll1.AddFront(6)", sll1.AddFront( 6 )
sll1.PrintAllVals()

sll0.PrintAllVals()
print "sll0.AddFront(4)", sll0.AddFront( 4 )
sll0.PrintAllVals()
print "sll0.AddFront(5)", sll0.AddFront( 5 )
sll0.PrintAllVals()
print "sll0.AddFront(6)", sll0.AddFront( 6 )
sll0.PrintAllVals()

print "sllEmpty.InsertBefore(69,13)", sllEmpty.InsertBefore( 69, 13 )
sll1.PrintAllVals()
print "sll1.InsertBefore(1,7)", sll1.InsertBefore( 1, 7 )
sll1.PrintAllVals()
print "sll1.InsertBefore(6,7)", sll1.InsertBefore( 6, 7 )
sll1.PrintAllVals()
print "sll1.InsertBefore(6,8)", sll1.InsertBefore( 6, 8 )
sll1.PrintAllVals()

print "sllEmpty.InsertAfter(69,13)", sllEmpty.InsertAfter( 69, 13 )
sll1.PrintAllVals()
print "sll1.InsertAfter(1,7)", sll1.InsertAfter( 1, 7 )
sll1.PrintAllVals()
print "sll1.InsertAfter(4,7)", sll1.InsertAfter( 4, 7 )
sll1.PrintAllVals()
print "sll1.InsertAfter(4,8)", sll1.InsertAfter( 4, 8 )
sll1.PrintAllVals()

print "sllEmpty.RemoveNode(69)", sllEmpty.RemoveNode( 69 )
sll1.PrintAllVals()
print "sll1.RemoveNode(69)", sll1.RemoveNode( 69 )
sll1.PrintAllVals()
print "sll1.RemoveNode(7)", sll1.RemoveNode( 7 )
sll1.PrintAllVals()
print "sll1.RemoveNode(5)", sll1.RemoveNode( 5 )
sll1.PrintAllVals()
print "sll1.RemoveNode(7)", sll1.RemoveNode( 7 )
sll1.PrintAllVals()

print "sllEmpty.ReverseList()", sllEmpty.ReverseList()
sllEmpty.PrintAllVals()

sll1.PrintAllVals()
print "sll1.AddBack(1)", sll1.AddBack( 1 )
sll1.PrintAllVals()
print "sll1.ReverseList()", sll1.ReverseList()
sll1.PrintAllVals()
