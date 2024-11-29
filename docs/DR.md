# Documento de Requisitos - Aplicativo Mobile para Gerenciamento de Bovinos

### 1. Visão Geral

Este documento define os requisitos funcionais e não funcionais para o desenvolvimento de um aplicativo mobile para gestão de bovinos em propriedades rurais. O aplicativo visa auxiliar os proprietários rurais na gestão financeira e no controle do rebanho.

### 2. Escopo

O aplicativo será desenvolvido para dispositivos móveis (smartphones e tablets) com sistemas operacionais Android e iOS. Ele será uma plataforma web com interface móvel, permitindo acesso remoto e sincronização offline/online.

### 3. Funcionalidades Principais

#### 3.1 Cadastro de Lote

- Permitir o cadastro de novos lotes de bovinos
- Solicitar informações básicas: quantidade de animais, data de entrada, peso médio, valor pago, peso final pretendido, data de saída pretendida
- Armazenar dados históricos dos lotes anteriores

#### 3.2 Calendário de Eventos

- Criar um calendário personalizado para eventos importantes como:
  - Vacinação do rebanho
  - Reprodução (previsão de parto)
  - Pagamentos (recebimento ou pagamento)
  - Troca de fases (cria, recria, engorda)
- Notificar automaticamente os usuários sobre próximos eventos

#### 3.3 Conversão de Peso

- Permitir a conversão de peso em kg para @ (quilinhos)
- Calcular o valor do animal com base no peso e preço por @
- Armazenar histórico de pesos e valores dos animais

#### 3.4 Calculadora de Rações

- Oferecer opções de tipos de rações (lactação ou engorda)
- Solicitar quantidade de animais e período de duração da ração (30 dias)
- Calcular e detalhar a quantidade de ingredientes necessários

#### 3.5 Controle Financeiro

- Monitorar gastos e receitas separadamente por lote ou mês
- Exibir relatórios gráficos e percentuais de lucro/gasto
- Permitir exportação de relatórios financeiros

### 4. Requisitos Não Funcionais

#### 4.1 Usabilidade

- Interface intuitiva e fácil de usar
- Design responsivo para diferentes tamanhos de tela
- Suporte a acessibilidade (leitura em alto contraste, zoom)

#### 4.2 Desempenho

- Tempo de carregamento rápido das páginas principais
- Resposta rápida às interações do usuário

#### 4.3 Segurança

- Autenticação segura (login e senha)
- Criptografia de dados sensíveis
- Proteção contra acesso não autorizado

#### 4.4 Conectividade

- Sincronização offline/online para armazenamento de dados
- Suporte à conexão sem fio para atualizações em tempo real

### 5. Requisitos Específicos do Sistema

#### 5.1 Banco de Dados

- Estrutura de banco de dados com tabelas para:
  - Usuários
  - Cadastro de lotes
  - Relatório de gastos
  - Relatório de receitas
  - Receita total mensal
  - Eventos (vacinação, reprodução, troca de fases)
  - Rações

#### 5.2 Integração com Terceiros

- API para integração com sistemas bancários para transações financeiras
- Possibilidade de exportação de dados para planilhas ou sistemas contábeis

### 6. Limitações e Restrições

#### 6.1 Limitações Técnicas

- O aplicativo não será capaz de controlar o estoque físico dos animais
- Não haverá integração direta com equipamentos específicos da fazenda

#### 6.2 Limitações Legais

- O aplicativo não substituirá a assistência técnica veterinária ou nutricional

### 7. Prioridades dos Requisitos

- Prioridade alta: Funcionalidades essenciais como cadastro de lote, calendário de eventos e controle financeiro
- Prioridade média: Conversão de peso e calculadora de rações
- Prioridade baixa: Detalhes adicionais da interface e funcionalidades avançadas

