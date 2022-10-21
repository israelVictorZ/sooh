<?php
	require '../phpmailer/PHPMailerAutoload.php';
	require '../phpmailer/class.phpmailer.php';
    require '../config.php';

header('Content-Type: text/html; charset=utf-8');

$mail = new PHPMailer;

//variáveis contidas no formulário, alterar a vontade mantendo o padrão:
//$nome_da_variavel = $_POST['nome passado como atributo na tag input do form'];

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];



// verifica se o formulário está vazio 


if($_POST['nome'] == '' && $_POST['email'] == '' && $_POST['telefone'] == ''){
    echo '<meta http-equiv="refresh" content="0, URL=https://'.$dominio.'">';
    exit;
}


// verifica se o conteúdo das mensagens contém algum spam 


if(strpos($_POST['mensagem'], 'hello') !== false || strpos($_POST['mensagem'], 'Hello') !== false || strpos($_POST['mensagem'], 'HELLO') !== false || strpos($_POST['mensagem'],'dear') !== false || strpos($_POST['mensagem'], 'Dear') !== false || strpos($_POST['mensagem'], 'DEAR') !== false || strpos($_POST['mensagem'], 'hi') !== false || strpos($_POST['mensagem'], 'Hi') !== false || strpos($_POST['mensagem'], 'HI') !== false){
    echo '<meta http-equiv="refresh" content="0, URL=https://'.$dominio.'">';
    exit;
}


if(isset($_FILES['arquivo'])){
    $arquivo = $_FILES['arquivo'];

    $upload_folder = '../uploads/';

    //atributos do arquivo
    $nome_arquivo = basename($_FILES['arquivo']['name']);
    $type_arquivo = substr($nome_arquivo, strrpos($nome_arquivo, '.') + 1);
    $size_arquivo = $_FILES["arquivo"]["size"]/1024;


    //copy the temp. uploaded file to uploads folder
    $path_of_uploaded_file = $upload_folder . $nome_arquivo;
    $tmp_path = $_FILES["arquivo"]["tmp_name"];
    if(is_uploaded_file($tmp_path))
    {
    if(!copy($tmp_path,$path_of_uploaded_file))
    {
        $errors .= '\n Erro ao fazer upload do arquivo';
    }
    }
}


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->CharSet = 'UTF-8';
$mail->Host = 'smtp.publinet1.com.br';                       // Domínio do servidor onde o email está hospedado - Specify main and backup server
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'grupokrona@publinet1.com.br';                   // Endereço do email - SMTP username
$mail->Password = 'Publinet@2022';               // Senha - SMTP password

$mail->Port = 587;
$mail->SMTPSecure = false; // Define se é utilizado SSL/TLS - Mantenha o valor "false"
$mail->SMTPAutoTLS = false; // Define se, por padrão, será utilizado TLS - Mantenha o valor "false"

$mail->FromName = $nome;
$mail->From = 'grupokrona@publinet1.com.br';   // e-mail de envio
$mail->AddCustomHeader('Reply-to: ' .$email. '\n');

// $mail->addAddress('contato@' . $dominio, 'Contato do Site'); //email para o qual o form será enviados
$mail->addAddress('michael.publinet@gmail.com','Contato do Site'); //email para o qual o form será enviado

if(isset($_FILES['arquivo'])){
    $mail->addAttachment($path_of_uploaded_file);         // Add attachments
}
$mail->isHTML(true);                 // Set email format to HTML

if(isset($_FILES['arquivo'])){
    $mail->Subject = 'Formulário Trabalhe Conosco - Site';
}else{
    $mail->Subject = 'Formulário de Contato - Site';
}
$successUrl = 'https://'.$dominio.'/'; // criar página pora redirecionamento caso o formulário seja bem-sucedido
$errorUrl = 'https://'.$dominio.'/contato'; // criar página pora redirecionamento caso o formulário não seja bem-sucedido




if(isset($_POST['assunto'])) {
    $assunto = $_POST['assunto'];
    $content =
    '<h2>Formulário de Contato</h2>' .
    '<p><b>Nome:</b> ' . $nome . ' </p>' .
    '<p><b>Email:</b> ' . $email . ' </p>' .
    '<p><b>Telefone:</b> ' . $telefone . ' </p>' .
    '<p><b>Assunto:</b> ' . $assunto . ' </p>' .
    '<p><b>Mensagem:</b> <b>' . $mensagem . '</b></p>' ;
}else {
    $content =
    '<h2>Formulário de Contato</h2>' .
    '<p><b>Nome:</b> ' . $nome . ' </p>' .
    '<p><b>Email:</b> ' . $email . ' </p>' .
    '<p><b>Telefone:</b> ' . $telefone . ' </p>' .
    '<p><b>Mensagem:</b> <b>' . $mensagem . '</b></p>' ;
}

$mail->Body    = $content;
$mail->AltBody = $content;

if(!$mail->send()) {
    echo '<script type="text/javascript"> alert("A mensagem não pode ser enviada. Por favor, tente novamente");</script>';
    echo 'Erro: ' . $mail->ErrorInfo;
	echo '<meta http-equiv="refresh" content="0.5, URL=' . $errorUrl . '">';
} else {
    echo '<script type="text/javascript"> alert("Email enviado com sucesso! Retornaremos o seu contato o quanto antes!");</script>';
    echo '<meta http-equiv="refresh" content="0.5, URL=' . $successUrl . '">';
}

?>