<?php 

/*  

* Google Maps Iframe (v1.0) - Autor: Michael Matheus


Parameters:

- $mapsUrl:  Iframe src content
- $width:  iframe width (% recommended)
- $height:  iframe height (% not recommended)
- $style:  inline css styles
    - default: border:0;
- $fullscreen:  boolean (true or false)
- $loading: 
    - lazy

*/


function googleMaps($mapsUrl, $width, $height, $style, $fullscreen, $loading){

    $html = '<iframe src="'. $mapsUrl .'" width="'. $width .'" height="'. $height .'" style="'. $style .'" allowfullscreen="'. $fullscreen .'" loading="'. $loading .'"></iframe>';

    return $html;
}


?>