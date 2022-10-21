<?php 

/**
 ** Whatsapp url generate (v1.0) - Autor: Michael Matheus
 * 
 * type: @function
 * author: Michael Matheus
 * 
 * Função usada para gerar a mensagem padrão da Publinet para links de WhatsApp.
 **Recomendação de uso: dentro dos hrefs com direcionamento para links de whatsapp, ex: <a href="<?= $whatsappMsg($whatsappNumber, 'Serviços', $nomeDaEmpresa) ?>">
 * 
 * 
 */

function whatsappMsg($number, $type, $companyName){
    $whatsMensage = "https://api.whatsapp.com/send?phone=". $number ."&text=Olá, vi seu site e gostaria de saber mais sobre os ". $type ." da ". $companyName ."!";
    return $whatsMensage;
}

?>