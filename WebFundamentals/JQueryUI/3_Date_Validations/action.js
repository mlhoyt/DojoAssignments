// -*- javascript -*-

$(document).ready( function(){
  // Activate JQueryUI elements
  $('#from_date').datepicker();
  $('#to_date').datepicker();

  // Initialize form elements "data-changed"
  $('#from_date').data( "changed", false );
  $('#to_date').data( "changed", false );
  $('#name').data( "changed", false );

  $('#name').on(
    "click",
    function(){
      $('#name').next().html( "" );
      $(this).val( "" );
      $(this).data( "changed", true );
    }
  );

  $('.date_entry').on(
    "change",
    function(){
      $(this).datepicker( "option", "dateFormat", "yy-mm-dd" );
      $(this).data( "changed", true );
    }
  );

  $(document).on(
    "click",
    ".button",
    function(){
      // Check form fields
      var do_submit = true;
      var now_time = (new Date()).getTime();

      // Check #from_date IS SET
      if( do_submit && (! $('#from_date').data( "changed" )) ) {
        alert( "Must select a valid departure date!" );
        do_submit = false;
      }
      var from_time = (new Date( $('#from_date').val() )).getTime();
      // Check #from_date IS IN FUTURE
      if( from_time < now_time ) {
        alert( "Departure date cannot be in the past!" );
        do_submit = false;
      }

      // Check #to_date IS SET
      if( do_submit && (! $('#to_date').data( "changed" )) ) {
        alert( "Must select a valid return date!" );
        do_submit = false;
      }
      var to_time = (new Date( $('#to_date').val() )).getTime();
      // Check #to_date IS AFTER #from_date
      if( to_time < from_time ) {
        alert( "Return date must be after the departure date!" );
        do_submit = false;
      }

      // Check #name !== EMPTY
      if( do_submit && (! $('#name').data( "changed") || $('#name').val() == "") ) {
        $('#name').next().html( "Your name cannot be blank!" );
        do_submit = false;
      }

      if( do_submit ) {
        $('form').submit();
      }
    }
  );

  // Catch form::submit
  $('form').submit( function(){
    alert(
      "Thanks " + $('#name').val() + "!" + " " +
      "Your cruise leaves on " + $('#from_date').val() + " " +
      "and returns on " + $('#from_date').val() + "!"
    );
    // Validate form fields
    return( false );
  });
});
