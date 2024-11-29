
### Documento de Design de Interface (DDI) - Aplicativo Mobile de Gestão de Bovinos

#### 1. Visão Geral

Este documento descreve a interface do usuário do aplicativo mobile de gestão de bovinos, abrangendo todas as telas e elementos interativos que os usuários terão acesso.

#### 2. Design Visual

##### 2.1 Cores

- Cor principal: #3498db (Azul profundo)
- Cor secundária: #f39c12 (Laranja)
- Cor terciária: #2ecc71 (Verde)
- Fundo: Branco (#ffffff)

##### 2.2 Tipografia

- Fonte principal: Roboto
- Tamanho de texto: 16px
- Margens: 15px

#### 3. Wireframes Básicos

##### 3.1 Tela Inicial

![Tela Inicial](imagens/tela_inicial.png)

- Logo do aplicativo no canto superior esquerdo
- Botão "Entrar" centralizado
- Campo de texto para login e botão "Esqueceu minha senha"
- Botão "Cadastre-se" na parte inferior

##### 3.2 Menu Principal

![Menu Principal](imagens/menu_principal.png)

- Barra de navegação com ícones para cada seção principal:
  - Lotes
  - Calendário
  - Financeiro
  - Configurações

#### 4. Protótipos Interativos

##### 4.1 Cadastro de Lote

![Cadastro de Lote](imagens/cadastro_lote.png)

1. Botão "+" para adicionar novo lote
2. Campo para inserir quantidade de animais
3. Data picker para data de entrada e saída
4. Campo para peso médio e valor pago
5. Botão para salvar

##### 4.2 Calendário de Eventos

![Calendário de Eventos](imagens/calendario_eventos.png)

- Visualização de eventos passados e futuros
- Opções para adicionar novo evento ou editar existente
- Notificações de próximos eventos importantes

##### 4.3 Conversão de Peso

![Conversão de Peso](imagens/conversao_peso.png)

- Campo de entrada para peso em kg
- Botão para converter para @ (quilinhos)
- Campo de saída para resultado da conversão

##### 4.4 Calculadora de Rações

![Calculadora de Rações](imagens/calculadora_racoes.png)

1. Seletor de tipo de ração (Lactação ou Engorda)
2. Campo para quantidade de animais
3. Campo para período de duração (em dias)
4. Botão para calcular e exibir detalhes da ração

##### 4.5 Controle Financeiro

![Controle Financeiro](imagens/controle_financeiro.png)

1. Gráfico de gastos e receitas por mês
2. Detalhes dos principais gastos e receitas
3. Opção para exportar relatório financeiro

#### 5. Guias de Estilo Visual

##### 5.1 Layout

- Uso de cards para organizar informações em grupos relacionados
- Espaçamento adequado entre elementos para melhor legibilidade

##### 5.2 Elementos Interativos

- Botões com design consistente (cor, tamanho, margens)
- Campos de texto com bordas arredondadas e shadow suave
- Ícones SVG para representar funções e categorias

##### 5.3 Transições e Efeitos

- Transição suave entre telas
- Feedback visual quando elementos são interativos (ex: mudança de cor ao clicar)

#### 6. Considerações de Usabilidade

##### 6.1 Acessibilidade

- Contraste adequado entre textos e fundos
- Alt text para imagens e ícones
- Opção de aumento de fonte e ajuste de cores

##### 6.2 Responsividade

- Design adaptado para diferentes tamanhos de tela
- Layout flexível para dispositivos mobilidade e desktop

#### 7. Fluxo de Usuário

##### 7.1 Fluxo Principal

1. Login ou cadastro
2. Menu principal com navegação entre seções
3. Interação com funcionalidades principais
4. Visualização e exportação de relatórios

##### 7.2 Fluxo de Cadastro de Lote

1. Seleção do tipo de lote (ex: engorda, recria)
2. Inserção dos dados básicos
3. Adição de eventos importantes (vacinação, parto)
4. Criação e salvação do novo lote

