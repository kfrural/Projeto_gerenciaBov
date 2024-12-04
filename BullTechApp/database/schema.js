db.createCollection("Usuarios", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "nome", "sobrenome", "email", "senha", "dataNascimento", "cpfCnpj"],
            properties: {
                id: { bsonType: "string" },
                nome: { bsonType: "string" },
                sobrenome: { bsonType: "string" },
                email: {
                    bsonType: "string",
                    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+/
                },
                senha: { bsonType: "string" },
                dataNascimento: { bsonType: "date" },
                cpfCnpj: { bsonType: "string" }
            }
        }
    }
});

db.createCollection("Propriedades", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "nome", "endereco"],
            properties: {
                id: { bsonType: "string" },
                nome: { bsonType: "string" },
                endereco: { bsonType: "string" },
                proprietario: {
                    bsonType: "objectId"
                }
            }
        }
    }
});

db.createCollection("Lotes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_lote", "propriedade", "descricao", "quantidadeAnimais", "custoTotalCompra", "valorPago", "dataEntrada", "dataSaidaPretendida", "pesoFinalPretendido"],
            properties: {
                id_lote: { bsonType: "string" },
                propriedade: {
                    bsonType: "objectId"
                },
                descricao: { bsonType: "string" },
                quantidadeAnimais: { bsonType: "int" },
                custoTotalCompra: { bsonType: "float" },
                valorPago: { bsonType: "float" },
                dataEntrada: { bsonType: "date" },
                dataSaidaPretendida: { bsonType: "date" },
                pesoFinalPretendido: { bsonType: "float" },
                tipoRacao: {
                    bsonType: "objectId"
                },
                eventoVacina: {
                    bsonType: "objectId"
                },
                eventoReproducao: {
                    bsonType: "objectId"
                },
                eventoTrocaFase: {
                    bsonType: "objectId"
                }
            }
        }
    }
});

db.createCollection("RelatoriosFinanceiros", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "lote", "periodo", "receitaTotal", "despesaTotal"],
            properties: {
                id: { bsonType: "string" },
                lote: {
                    bsonType: "objectId"
                },
                periodo: { bsonType: "date" },
                receitaTotal: { bsonType: "float" },
                despesaTotal: { bsonType: "float" }
            }
        }
    }
});

db.createCollection("Animais", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "nome", "pesoAtual", "lote"],
            properties: {
                id: { bsonType: "string" },
                nome: { bsonType: "string" },
                pesoAtual: { bsonType: "float" },
                lote: {
                    bsonType: "objectId"
                }
            }
        }
    }
});

db.createCollection("Eventos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "lote", "data", "tipo", "detalhes"],
            properties: {
                id: { bsonType: "string" },
                lote: {
                    bsonType: "objectId"
                },
                data: { bsonType: "date" },
                tipo: { bsonType: "string" },
                detalhes: { bsonType: "string" }
            }
        }
    }
});

db.createCollection("Racoes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "tipo", "custoPorKg"],
            properties: {
                id: { bsonType: "string" },
                tipo: { bsonType: "string" },
                custoPorKg: { bsonType: "float" }
            }
        }
    }
});

db.createCollection("Vacinas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "lote", "nomeVacina", "aplicacao"],
            properties: {
                id: { bsonType: "string" },
                lote: {
                    bsonType: "objectId"
                },
                nomeVacina: { bsonType: "string" },
                aplicacao: { bsonType: "date" }
            }
        }
    }
});

db.createCollection("Reproducoes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "lote", "identificacao", "dataPrevista", "dataRealizacao"],
            properties: {
                id: { bsonType: "string" },
                lote: {
                    bsonType: "objectId"
                },
                identificacao: { bsonType: "string" },
                dataPrevista: { bsonType: "date" },
                dataRealizacao: { bsonType: "date" }
            }
        }
    }
});

db.createCollection("Pagamentos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "lote", "valor", "tipoPagamento", "dataPagamento"],
            properties: {
                id: { bsonType: "string" },
                lote: {
                    bsonType: "objectId"
                },
                valor: { bsonType: "float" },
                tipoPagamento: { bsonType: "string" },
                dataPagamento: { bsonType: "date" }
            }
        }
    }
});

db.createCollection("TrocasFase", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "lote", "faseAtual", "faseProxima", "dataTroca"],
            properties: {
                id: { bsonType: "string" },
                lote: {
                    bsonType: "objectId"
                },
                faseAtual: { bsonType: "string" },
                faseProxima: { bsonType: "string" },
                dataTroca: { bsonType: "date" }
            }
        }
    }
});
