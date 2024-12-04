CREATE TABLE Usuario (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    sobrenome TEXT,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    dataNascimento DATE,
    cpfCnpj TEXT UNIQUE
);

CREATE TABLE Propriedade (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    endereco TEXT NOT NULL,
    proprietario_id INTEGER,
    FOREIGN KEY (proprietario_id) REFERENCES Usuario(id)
);

CREATE TABLE Lote (
    id_lote TEXT PRIMARY KEY,
    propriedade_id INTEGER,
    descricao TEXT,
    quantidadeAnimais INTEGER,
    custoTotalCompra REAL,
    valorPago REAL,
    dataEntrada DATE,
    dataSaidaPretendida DATE,
    pesoFinalPretendido REAL,
    tipoRacao_id INTEGER,
    eventoVacina_id INTEGER,
    eventoReproducao_id INTEGER,
    eventoTrocaFase_id INTEGER,
    FOREIGN KEY (propriedade_id) REFERENCES Propriedade(id),
    FOREIGN KEY (tipoRacao_id) REFERENCES Racao(id),
    FOREIGN KEY (eventoVacina_id) REFERENCES Evento(id),
    FOREIGN KEY (eventoReproducao_id) REFERENCES Evento(id),
    FOREIGN KEY (eventoTrocaFase_id) REFERENCES Evento(id)
);

CREATE TABLE Animal (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    pesoAtual REAL,
    lote_id_lote INTEGER,
    FOREIGN KEY (lote_id_lote) REFERENCES Lote(id_lote)
);

CREATE TABLE Evento (
    id INTEGER PRIMARY KEY,
    lote_id_lote TEXT,
    data DATE,
    tipo TEXT,
    detalhes TEXT,
    FOREIGN KEY (lote_id_lote) REFERENCES Lote(id_lote)
);

CREATE TABLE Racao (
    id INTEGER PRIMARY KEY,
    tipo TEXT NOT NULL,
    custoPorKg REAL
);

CREATE TABLE Vacina (
    id INTEGER PRIMARY KEY,
    lote_id_lote TEXT,
    nomeVacina TEXT,
    aplicacao DATE,
    evento_id INTEGER,
    FOREIGN KEY (lote_id_lote) REFERENCES Lote(id_lote),
    FOREIGN KEY (evento_id) REFERENCES Evento(id)
);

CREATE TABLE Reproducao (
    id INTEGER PRIMARY KEY,
    lote_id_lote TEXT,
    identificacao TEXT,
    dataPrevista DATE,
    dataRealizacao DATE,
    evento_id INTEGER,
    FOREIGN KEY (lote_id_lote) REFERENCES Lote(id_lote),
    FOREIGN KEY (evento_id) REFERENCES Evento(id)
);

CREATE TABLE Pagamento (
    id INTEGER PRIMARY KEY,
    lote_id_lote TEXT,
    valor REAL,
    tipoPagamento TEXT,
    dataPagamento DATE,
    evento_id INTEGER,
    FOREIGN KEY (lote_id_lote) REFERENCES Lote(id_lote),
    FOREIGN KEY (evento_id) REFERENCES Evento(id)
);

CREATE TABLE TrocaFase (
    id INTEGER PRIMARY KEY,
    lote_id_lote TEXT,
    faseAtual TEXT,
    faseProxima TEXT,
    dataTroca DATE,
    evento_id INTEGER,
    FOREIGN KEY (lote_id_lote) REFERENCES Lote(id_lote),
    FOREIGN KEY (evento_id) REFERENCES Evento(id)
);

CREATE TABLE RelatorioFinanceiro (
    id INTEGER PRIMARY KEY,
    lote_id_lote TEXT,
    periodo DATE,
    receitaTotal REAL,
    despesaTotal REAL,
    FOREIGN KEY (lote_id_lote) REFERENCES Lote(id_lote)
);
