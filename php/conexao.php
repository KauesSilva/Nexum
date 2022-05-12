<?php
	$servername = "localhost";
	$username = "root";
	$password = "root";
	$database = "nexum";
	// Criando conexão //
	$conn = mysqli_connect($servername, $username, $password,$db);
	// Verificando conexão //
	if (!$conn) {
	   die("Erro de conexão: " . mysqli_connect_error());
	}
	echo "Conectado com sucesso!";
?>