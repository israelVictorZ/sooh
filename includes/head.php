<?php
require_once 'config.php';

# ------------------ #
# Author: Brunno Lammyn | Publinet #
# ------------------ #
header("Content-Type: text/html; charset=utf-8", true);
// include 'baseURL.php';
# ----------------------------------------
# Catch actual page
# ----------------------------------------
$activePage = basename($_SERVER['REQUEST_URI']);

# ----------------------------------------
# Cases
# ----------------------------------------
switch($activePage)
{
    case "aaaa": 
        $title= "aaaa";
        $breadcrumbTitle = "aaaaaaa";
        $pageId = "about-us"; // define qual o tipo da página (home, quem somos, product, etc...)
        break;

    default:
        $title= "Nome da empresa"; 
        $isHome = true;
        $pageId = "home"; // define qual o tipo da página (home, quem somos, product, etc...) 
        break;

}

$proto = (isset($_SERVER['HTTPS']) === true) ? 'https' : 'http';
$canonical = $proto.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

?>
<!doctype html>
<html lang="pt-BR">
<!--
# ~~~~~~~~~~~~~~~~~~ #
# Author: Brunno Lammyn | Publinet #
# ~~~~~~~~~~~~~~~~~~ #
-->

<head>

    <!-- Title -->
    <title><?= $title ?> <?= (isset($isHome)) ? '' : '| '.$nomeEmpresa ?></title>

    <!-- Charset -->
    <meta charset="utf-8" />
    <!-- Canonical -->
    <link rel="canonical" href="<?= $canonical ?>" />
    <!-- OpenGraph -->
    <meta property="og:url" content="<?= $canonical ?>">
    <meta property="og:title" content="<?= $title ?>">
    <meta property="og:description" content="<?= $description ?>">
    <meta property="og:site_name" content="<?= $title ?>">
    <meta property="og:type" content="article">
    <meta property="og:region" content="BR">
    <meta property="og:canonical" content="<?= $canonical ?>">

    <meta name="author" content="<?= $nomeAutor ?>">
    <meta name="fone" content="<?= $telefone[0] ?>" />
    <meta name="city" content="<?= $cidade ?>" />

    <!-- Daqui para baixo é padrão, não mexer -->
    <meta name="copyright" content="<?= $copyright[0] ?>" />
    
    <!--        <meta name="robots" content="index,follow">-->
    <meta name="rating" content="General">
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!-- Favicon -->
    <link href="src/img/favicon.png" rel="icon">
    <!-- Imagem de compartilhamento  -->
    <link href="<?= $urlImagem ?>" rel="image_src">
    <!-- CDN -->
    <?php include 'includes/cdn.php'; ?>
    <!-- CSS -->
    <?php include 'includes/css.php'; ?>

    <meta name="googlebot" content="all">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

    <!--recapcha-->
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>




    <!-- Colocar o Schema abaixo -->