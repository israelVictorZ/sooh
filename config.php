<?php 

$ano = date('Y');
$nomeEmpresa = "";
$language = "portuguese, português";
$autor = "#";
$nomeAutor = "Israel Victor Zangari Medeiros de Campos";
// $copyright = ["&copy $nomeEmpresa $ano - Todos os direitos reservados", "Desenvolvido e Otimizado por: "];
$dominio = "dominio.com.br";
$email = "contato@" . $dominio;
$ddd = "(11)";
$whatsapp = "$ddd ";
$telefone = ["$ddd "];
$facebook = "";
$instagram = ""; 
$urlImagem = "src/images/thumb.jpg";


// Functions Require 

require_once 'functions/server_request.php';
require_once 'functions/number_replace.php';
require_once 'functions/google_maps.php';
require_once 'functions/minify-output-html.php';

?>