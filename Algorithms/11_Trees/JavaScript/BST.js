// -*- script -*-

// ----------------------------------------------------------------------
// class BTNode
// ----------------------------------------------------------------------
function BTNode( value ) {
  this.val = value;
  this.left = null;
  this.right = null;
}

// ----------------------------------------------------------------------
// class BST
// ----------------------------------------------------------------------
function BST() {
  this.root = null;

  this.add = function( val ) {
    this.root = this.addNode( this.root, val );
  }

  this.addNode = function( node, val ) {
    if( ! node ) {
      node = new BTNode( val );
    }
    else if( node.val > val ) {
      node.left = this.addNode( node.left, val );
    }
    else {
      node.right = this.addNode( node.right, val );
    }

    return( node );
  }
}

// ----------------------------------------------------------------------
// Testing
// ----------------------------------------------------------------------
bst0 = new BST();
bst0.add( 2 );
bst0.add( 3 );
bst0.add( 1 );
console.log( bst0 );
