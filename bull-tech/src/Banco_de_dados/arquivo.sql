CREATE TABLE usuarios(
  id VARCHAR primary key,
  nome VARCHAR(255),
  sobrenome VARCHAR(255),
  telefone VARCHAR(20),
  email VARCHAR(255),
  senha VARCHAR(50)
);

CREATE TABLE lotes (
  id_lote SERIAL PRIMARY KEY,
  id_usuario VARCHAR,
  descricao VARCHAR(255),
  quantidade INT,
  peso_total_compra FLOAT,
  valor_pago FLOAT,
  data DATE,
  peso_total_vendido FLOAT,
  valor_vendido FLOAT,
  saldo_final FLOAT,
  data_vendido DATE,
  FOREIGN KEY (id_usuario) REFERENCES usuarios("id")
);


CREATE TABLE eventos (
  id_eventos SERIAL PRIMARY KEY,
  id VARCHAR,
  id_tipoEvento INT,
  tipo VARCHAR(50) NOT NULL,
  data DATE,
  FOREIGN KEY (id) REFERENCES usuarios(id)
);

CREATE TABLE vacinas (
  id_vacinas SERIAL PRIMARY KEY,  
  id_lote INT,
  nomeVacina VARCHAR(50),
  data DATE,
  FOREIGN KEY (id_lote) REFERENCES lotes(id_lote)
);

CREATE TABLE reproducao (
    id_reproducao SERIAL PRIMARY KEY,
    id_lote INT,
    identificacao VARCHAR(50),
    data DATE,
    data_fim DATE,
    FOREIGN KEY (id_lote) REFERENCES lotes(id_lote)
);

CREATE TABLE pagamentos (
  id_pagamento SERIAL PRIMARY KEY,
  identificacao VARCHAR,
  valor FLOAT,
  tipo VARCHAR,
  data DATE
);

CREATE TABLE  troca_fases (
  id_troca_fase SERIAL PRIMARY KEY,
  id_lote INT,
  fase VARCHAR,
  date DATA,
  FOREIGN KEY (id_lote) REFERENCES lotes(id_lote)
);

CREATE TABLE financeiroLote (
  id_financeiroLote SERIAL PRIMARY KEY,
  id_lote INT,
  tipo VARCHAR,
  descricao VARCHAR(255),
  valor FLOAT,
  data DATE,
  FOREIGN KEY (id_lote) REFERENCES lotes(id_lote)
);

CREATE TABLE financeiro (
  id_financeiro SERIAL PRIMARY KEY,
  id_lote INT,
  tipo VARCHAR,
  descricao VARCHAR(255),
  valor FLOAT,
  data DATE,
  FOREIGN KEY (id_lote) REFERENCES lotes(id_lote)
);

