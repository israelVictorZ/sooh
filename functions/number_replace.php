<?php 

/**
 ** Number replace (v1.0) - Autor: Michael Matheus
 * 
 * type: @function
 * author: Michael Matheus
 * 
 * Função usada para substituir os espaços e caracteres dos números.
 **Recomendação de uso: dentro dos hrefs com direcionamento para números de telefone, ex: <a href="tel:<?= number_replace($num) ?>">
 * 
 * 
 */

function number_replace($var){
    $var = str_replace(['(', ')', '-', '11 ', ' '], ['', '', '', '5511 ', ''], $var);
    return $var;
}


?>
