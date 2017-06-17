# -*- perl -*-

$GET = "-X GET";
$POST = "-X POST";
$PUT = "-X PUT";
$DELETE = "-X DELETE";

$URL  = "http://localhost:8000";

$HEADER_CONTENT_TYPE_JSON = "--header 'Content-Type: application/json'";

$DATA1a = "--data '{\"text\":\"First note\"}'";
$DATA1b = "--data '{\"text\":\"Updated first note\"}'";
$DATA1c = "--data '{\"text\":\"Again updated first note\"}'";
$ID = "5945985018ce18410407d9b8";

$DATA2 = "--data '{\"text\":\"Another (second) note\"}'";

$DATA3 = "--data '{\"text\":\"Yet another (third) note\"}'";
$DATA3b = "--data '{\"text\":\"Updated yet another (third) note\"}'";
$ID3 = "59459f8dced5874179c1e399";

$DATA4 = "--data '{\"text\":\"wa\"}'";

######################################################################

sub root
{
  my( $method, $url ) = @_;

  printf STDERR "\n";
  printf STDERR "Test: ${method} ${url} => Error\n";
  system( "curl ${method} ${url}" );
  printf STDERR "\n";
}

sub read_all
{
  my( $method, $url ) = @_;

  printf STDERR "\n";
  printf STDERR "Test: ${method} ${url} => read_all\n";
  system( "curl ${method} ${url}" );
  printf STDERR "\n";
}

sub create
{
  my( $method, $url, $data ) = @_;

  printf STDERR "\n";
  printf STDERR "Test: ${method} ${url} => create\n";
  system( "curl ${HEADER_CONTENT_TYPE_JSON} ${method} ${data} ${url}" );
  printf STDERR "\n";
}

sub read_one
{
  my( $method, $url ) = @_;

  printf STDERR "\n";
  printf STDERR "Test: ${method} ${url} => read_one\n";
  system( "curl ${method} ${url}" );
  printf STDERR "\n";
}

sub update
{
  my( $method, $url, $data ) = @_;

  printf STDERR "\n";
  printf STDERR "Test: ${method} ${url} => update\n";
  system( "curl ${HEADER_CONTENT_TYPE_JSON} ${method} ${data} ${url}" );
  printf STDERR "\n";
}

sub delete
{
  my( $method, $url ) = @_;

  printf STDERR "\n";
  printf STDERR "Test: ${method} ${url} => delete\n";
  system( "curl ${method} ${url}" );
  printf STDERR "\n";
}

######################################################################

# &root( ${GET}, "${URL}/" );

# &read_all( ${GET}, "${URL}/notes/" );

# &create( ${POST}, "${URL}/notes/", ${DATA1a} );
# &read_one( ${GET}, "${URL}/notes/${ID}" );

# &read_one( ${GET}, "${URL}/notes/${ID}" );
# &update( ${PUT}, "${URL}/notes/${ID}", ${DATA1b} );
# &read_one( ${GET}, "${URL}/notes/${ID}" );

# &read_one( ${GET}, "${URL}/notes/${ID}" );
# &update( ${PUT}, "${URL}/notes/${ID}", ${DATA1c} );
# &read_one( ${GET}, "${URL}/notes/${ID}" );

# &read_all( ${GET}, "${URL}/notes/" );
# &create( ${POST}, "${URL}/notes/", ${DATA2} );
# &read_all( ${GET}, "${URL}/notes/" );
# &create( ${POST}, "${URL}/notes/", ${DATA3} );
# &read_all( ${GET}, "${URL}/notes/" );
# &create( ${POST}, "${URL}/notes/", ${DATA4} );
# &read_all( ${GET}, "${URL}/notes/" );

&read_all( ${GET}, "${URL}/notes/" );
&update( ${PUT}, "${URL}/notes/${ID3}", ${DATA3b} );
&read_all( ${GET}, "${URL}/notes/" );
&delete( ${DELETE}, "${URL}/notes/${ID3}" );
&read_all( ${GET}, "${URL}/notes/" );

