<?php 

require_once 'str_contains.php';


/**
 ** Server Request (v1.2) - Autor: Michael Matheus
 * 
 * 
 * Verifica se o servidor é localhost, senão verifica se está no sitespublinet1, 
 * caso nenhuma das condições forem satisfeitas o servidor deverá ser o site na versão de produção.
 * 
 * Durante a verificação do host cria uma CONSTANT como valor HOME.
 * Atribui o valor da CONSTANT de acordo com o host.
 * 
 * A CONSTANT HOME tem como função gerar o caminho da home '/' após o nome do servidor.
 * 
 */

if(str_contains($_SERVER['SERVER_NAME'], 'localhost')!==false){
    define('HOME', '/estrutura-padrao/');

}elseif(str_contains($_SERVER['SERVER_NAME'], 'sitespublinet1.com.br')!==false){
    define('HOME', '/projetos/estrutura-padrao/');
    
}else {
    define('HOME', '/');
}
	
// echo $_SERVER['SERVER_NAME']; die;

?>
