### Documento de Teste de Requisitos (DTR) - Aplicativo Mobile de Gestão de Bovinos

#### 1. Introdução

Este Documento de Teste de Requisitos (DTR) define os casos de teste para garantir que todas as funcionalidades do aplicativo mobile de gestão de bovinos sejam adequadamente testadas e validadas. O objetivo deste documento é fornecer uma estrutura clara e detalhada para o processo de teste.

#### 2. Escopo do Teste

O escopo deste DTR abrange todas as funcionalidades descritas no Documento de Requisitos, com foco em:

- Cadastro de lote
- Calendário de eventos
- Conversão de peso
- Calculadora de rações
- Controle financeiro

#### 3. Pré-requisitos para o Teste

- Dispositivo móvel Android ou iOS
- Versões compatíveis do sistema operacional
- Conexão à internet estável
- Acesso ao aplicativo através da loja oficial (Google Play Store ou App Store)

#### 4. Casos de Teste

##### 4.1 Cadastro de Lote

1. Criação de novo lote:
   - Verificar se o usuário consegue criar um novo lote com todos os campos obrigatórios preenchidos
   - Testar se o sistema permite salvar e atualizar dados do lote

2. Edição de dados do lote:
   - Verificar se é possível editar informações do lote após sua criação
   - Testar se as alterações são salvas corretamente

3. Exclusão de lote:
   - Verificar se o usuário pode excluir um lote existente
   - Testar se há uma confirmação antes da exclusão

4. Visualização de histórico:
   - Verificar se os dados históricos dos lotes anteriores são exibidos corretamente

##### 4.2 Calendário de Eventos

1. Adição de eventos:
   - Testar se o usuário pode adicionar eventos ao calendário
   - Verificar se os eventos são salvos corretamente e exibidos na lista

2. Edição de eventos:
   - Verificar se é possível editar detalhes dos eventos existentes
   - Testar se as alterações são salvas corretamente

3. Remoção de eventos:
   - Testar se o usuário pode remover eventos do calendário
   - Verificar se há uma confirmação antes da remoção

4. Notificações automáticas:
   - Verificar se as notificações para próximos eventos são enviadas corretamente

##### 4.3 Conversão de Peso

1. Uso da conversão de peso:
   - Testar se o usuário consegue converter peso em kg para @ (quilinhos)
   - Verificar se o cálculo de valor baseado no peso e preço por @ é correto

2. Armazenamento de histórico:
   - Verificar se os pesos e valores armazenados são exibidos corretamente

##### 4.4 Calculadora de Rações

1. Uso da calculadora de rações:
   - Testar se o usuário pode selecionar tipo de ração (lactação ou engorda)
   - Verificar se o cálculo de quantidade de ingredientes necessários é correto

2. Detalhamento da lista de ingredientes:
   - Testar se a lista de ingredientes detalhada é exibida corretamente

##### 4.5 Controle Financeiro

1. Adição de gastos e receitas:
   - Testar se o usuário pode adicionar gastos e receitas separadamente
   - Verificar se as entradas são salvos corretamente

2. Exibição de relatórios financeiros:
   - Testar se os relatórios gráficos e percentuais de lucro/gasto são exibidos corretamente
   - Verificar se é possível exportar esses relatórios

#### 5. Critérios de Aceitação

Para cada caso de teste, considere-se aceito se:

1. A funcionalidade forneça resultados esperados
2. Não ocorrerem erros ou exceções não previstas
3. A interface seja intuitiva e fácil de usar
4. Os dados forem salvos e recuperados corretamente

#### 6. Priorização dos Casos de Teste

- Prioridade alta: Todos os casos relacionados às funcionalidades essenciais (cadastro de lote, calendário de eventos, controle financeiro)
- Prioridade média: Casos relacionados à conversão de peso e calculadora de rações
- Prioridade baixa: Testes de funcionalidades secundárias ou otimizadoras

