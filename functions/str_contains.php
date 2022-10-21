<?php 

/**
 ** Polyfill for PHP 4 - PHP 7, safe to utilize with PHP 8 
 * source: https://www.php.net/manual/pt_BR/function.str-contains.php
 * 
 * 
 * 
 * */

if (!function_exists('str_contains')) {
    function str_contains (string $haystack, string $needle)
    {
        return empty($needle) || strpos($haystack, $needle) !== false;
    }
}

?>