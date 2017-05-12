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

  this.contains = function( val ) {
    return( this.nodeContains( this.root, val ) );
  }

  this.nodeContains = function( node, val ) {
    if( node.val === val ) {
      return( true );
    }
    else if( node.left && this.nodeContains( node.left, val ) ) {
      return( true );
    }
    else if( node.right && this.nodeContains( node.right, val ) ) {
      return( true );
    }

    return( false );
  }

  this.min = function() {
    if( ! this.root ) {
      return( null );
    }
    else {
      return( this.nodeMin( this.root ) );
    }
  }

  this.nodeMin = function( node ) {
    if( node.left ) {
      return( this.nodeMin( node.left ) );
    }
    else {
      return( node.val );
    }
  }

  this.max = function() {
    if( ! this.root ) {
      return( null );
    }
    else {
      return( this.nodeMax( this.root ) );
    }
  }

  this.nodeMax = function( node ) {
    if( node.right ) {
      return( this.nodeMax( node.right ) );
    }
    else {
      return( node.val );
    }
  }

  this.size = function() {
    return( this.sizeNode( this.root ) );
  }

  this.sizeNode = function( node ) {
    if( ! node ) {
      return( 0 );
    }
    else {
      return(
        this.sizeNode( node.left ) +
        1 +
        this.sizeNode( node.right )
      );
    }
  }
}
