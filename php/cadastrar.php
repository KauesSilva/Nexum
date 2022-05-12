<?php
	include ("conexao.php");
	include ("form.js");
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$senha = md5($_POST['senha']);

	$sql = "INSERT INTO tb_Cadastro(nm_Nome, ds_Email, cd_Senha) VALUES ('$nome', '$emai l, $senha");

	if (mysqli_query($conexao, $sql)) {
	echo "Cadastro com sucesso!";
	}
	else {
		echo "Erro".mysqli_connect_error($conexao);
	}
	mysqli_close($conexao);
?>