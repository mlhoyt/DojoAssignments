#!/usr/bin/env perl

use Data::Dumper;
$Data::Dumper::Indent = 1;

######################################################################
# Global Variables
######################################################################

$opt_debug = 0;

@ELEMENTS = ();

######################################################################
# Command-line Processing
######################################################################

######################################################################
# Main Routine
######################################################################

&read_data_file( "data.txt" );
# print Dumper( @ELEMENTS ) if( $opt_debug );
&write_html();

######################################################################
# Subroutine Definitions
######################################################################

sub read_data_file
{
  my( $file ) = @_;

  open( IF, "< ${file}" ) or do {
    printf STDERR "Fatal: read_data_file: Cannot open file \"${file}\"!\n";
    return( 0 );
  };

  my $nr_errors = 0;

  while( <IF> ) {
    if( /^\s*#/ ) {
      # Comment - do nothing
    }
    elsif( /^\s*$/ ) {
      # Blank line - do nothing
    }
    elsif( /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([^\s\,]+)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\S+)\s*$/ ) {
      push @ELEMENTS, {
        'row' => int( $1 ),
        'col' => int( $2 ),
        'id'  => int( $3 ),
        'sym' => $4,
        'wgt' => $5,
        'grp' => $6,
      };
    }
    else {
      printf STDERR "Error: read_data_file: Syntax error near line $.\n> $_";
      $nr_errors++;
    }

    if( $nr_errors >= 3 ) {
      printf STDERR "Fatal: read_data_file: Too many errors.  Terminating!\n";
      close( IF );
      return( 0 );
    }
  }

  close( IF );

  return( 1 );
}

sub write_html
{
  my $cur_r = 0;
  my $cur_c = 0;

  foreach my $el_ref ( @ELEMENTS ) {
printf "Debug: write_html: cur_r:%d cur_c:%d el_ref:%d\n", $cur_r, $cur_c, $el_ref if( $opt_debug );
print Dumper( $el_ref ) if( $opt_debug );
    if( $el_ref->{'row'} != $cur_r ) {
      ## End previous "row" if necessary
      printf "></div\n" if( $cur_r != 0 );
      ## Start new "row"
      printf "><div class=\"row\"\n";
      ## Label new "row"
      printf "  ><div class=\"row_num noborder\">%d</div\n", $el_ref->{'row'};
      ## Reset $cur_(r|c) values
      $cur_r = $el_ref->{'row'};
      $cur_c = 1;
    }

    while( $cur_c < $el_ref->{'col'} ) {
      printf "  ><div class=\"noborder\"></div\n";
      $cur_c++;
    }
    if( $cur_c == $el_ref->{'col'} ) {
      printf "  ><div class=\"ebox %s\">%d<br /><span class=\"elabel\">%s</span><br />%s</div\n",
        $el_ref->{'grp'},
        $el_ref->{'id'},
        $el_ref->{'sym'},
        $el_ref->{'wgt'};
    }
    $cur_c++;
  }

  printf "></div\n";

  return( 1 );
}

__END__
><div class="row"
  ><div class="row_num noborder">2</div
  ><div class="ebox blue">3<br /><span class="elabel">Li</span><br />6.94</div
  ><div class="ebox blue">4<br /><span class="elabel">Be</span><br />9.0122</div
  ><div class="noborder">3</div
  ><div class="noborder">4</div
  ><div class="noborder">5</div
  ><div class="noborder">6</div
  ><div class="noborder">7</div
  ><div class="noborder">8</div
  ><div class="noborder">9</div
  ><div class="noborder">10</div
  ><div class="noborder">11</div
  ><div class="noborder">12</div
  ><div class="ebox yellow">5<br /><span class="elabel">B</span><br />10.81</div
  ><div class="ebox yellow">6<br /><span class="elabel">C</span><br />12.011</div
  ><div class="ebox yellow">7<br /><span class="elabel">N</span><br />14.007</div
  ><div class="ebox yellow">8<br /><span class="elabel">O</span><br />15.999</div
  ><div class="ebox yellow">9<br /><span class="elabel">F</span><br />18.998</div
  ><div class="ebox yellow">10<br /><span class="elabel">Ne</span><br />20.180</div
></div>
