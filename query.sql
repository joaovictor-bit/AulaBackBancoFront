CREATE DATABASE escola_db

CREATE TABLE alunos(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(80) NOT NULL,
	cep CHAR(8) NOT NULL UNIQUE,
	uf CHAR(8),
	rua VARCHAR(120),
	numero INT,
	complemento VARCHAR(120),
	data_hora_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	data_hota_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO alunos
 (nome, cpf, cep, uf, rua, numero, complemento)
 VALUES
 ("Joao","12345678909", "06123456","SP", "Rua Ari Barroso",30 , "Casa"),
 ("Henry","12345678901", "06654321","SP", "Rua Logo Ali",15 , NULL),
 ("Sem Ducha","12345678902", "06223456","SP", "Rua SENAI",12 , NULL)