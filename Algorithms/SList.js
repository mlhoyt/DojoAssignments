// -*- javascript -*-

// From: CodingDojo Algorithm Challenges, v1.1.1, pg 95

// class: SLNode
function SLNode( value ) {
  this.val = value;
  this.next = null;
}

// class: SList
function SList() {
  // field: SList::head
  this.head = null;

  // method: SList::back
  this.back = function() {
    if( ! this.head ) {
      return( null );
    }
    else {
      var runner = this.head;
      while( runner.next ) {
        runner = runner.next;
      }
      return( runner.val );
    }
  } // end method: SList::back

  // method: SList::pushBack
  this.pushBack = function( value ) {
    var newNode = new SLNode( value );

    if( ! this.head ) {
      this.head = newNode;
    }
    else {
      var runner = this.head;
      while( runner.next ) {
        runner = runner.next;
      }
      runner.next = newNode;
    }
  } // end method: SList::pushBack

  // method SList::popBack
  this.popBack = function() {
    if( ! this.head ) {
      return( null );
    }

    var returnVal;
    if( ! this.head.next ) {
      returnVal = this.head.val;
      this.head = null;
      return( returnVal );
    }
    else {
      var runner = this.head;
      while( runner.next.next ) {
        runner = runner.next;
      }
      returnVal = runner.next.val;
      runner.next = null;
      return( returnVal );
    }
  } // end method SList::popBack

  // method SList::pushFront
  this.pushFront = function( value ) {
    var oldHead = this.head;
    this.head = new SLNode( value );
    this.head.next = oldHead;
  } // end method SList::pushFront

  // method SList::popFront
  this.popFront = function( value ) {
    var returnVal = null;
    if( this.head ) {
      returnVal = this.head.val;
      this.head = this.head.next;
    }
    return( returnVal );
  } // end method SList::popFront

  // method SList::contains
  this.contains = function( value ) {
    var runner = this.head;
    while( runner ) {
      if( runner.val === value ) {
        return( true );
      }
      else {
        runner = runner.next;
      }
    }
    return( false );
  } // end method SList::contains

  // method SList::removeVal
  this.removeVal = function( value ) {
    if( ! this.head ) {
      return( false );
    }
    else if( this.head.val === value ) {
      this.head = this.head.next;
      return( true );
    }
    else {
      var runner = this.head;
      while( runner.next ) {
        if( runner.next.val == value ) {
          runner.next = runner.next.next;
          return( true );
        }
        else {
          runner = runner.next;
        }
      }
      return( false );
    }
  } // end method SList::removeVal
}

// Testing

slist0 = new SList();
console.log( slist0 );
console.log( slist0.back() );
console.log( slist0 );
console.log( slist0.popBack() );
console.log( slist0 );
slist0.pushBack( 3 );
console.log( slist0 );
slist0.pushBack( 4 );
console.log( slist0 );
console.log( slist0.back() );
console.log( slist0 );
console.log( slist0.popBack() );
console.log( slist0 );
console.log( slist0.back() );
console.log( slist0 );
console.log( slist0.popBack() );
console.log( slist0 );
console.log( slist0.back() );
console.log( slist0 );

slist1 = new SList();
console.log( slist1 );
console.log( slist1.popFront() );
console.log( slist1 );
slist1.pushFront( 2 );
console.log( slist1 );
slist1.pushFront( 1 );
console.log( slist1 );
console.log( slist1.popFront() );
console.log( slist1 );
console.log( slist1.popFront() );
console.log( slist1 );

slist2 = new SList();
console.log( slist2 );
slist2.pushFront( 2 );
console.log( slist2 );
slist2.pushFront( 1 );
console.log( slist2 );
slist2.pushBack( 3 );
console.log( slist2 );
slist2.pushBack( 4 );
console.log( slist2 );
console.log( slist2.contains( 1 ) )
console.log( slist2.contains( 2 ) )
console.log( slist2.contains( 3 ) )
console.log( slist2.contains( 4 ) )
console.log( slist2.contains( 5 ) )
console.log( slist2.removeVal( 2 ) )
console.log( slist2.removeVal( 4 ) )
console.log( slist2.removeVal( 1 ) )
console.log( slist2.removeVal( 5 ) )
