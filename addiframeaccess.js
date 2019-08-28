
function addIframeAccess() 
{
    $( "iframe" ).attr( "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" );
}

setInterval( addIframeAccess, 100 );
