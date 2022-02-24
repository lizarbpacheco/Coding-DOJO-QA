# Coding-DOJO  - QA

# TESTES CASE
***CT*** 01

*DADO* que eu navega até o site da loja de compras
*QUANDO* acessar o link 'https://automationpractice.com/index.php'
*ENTAO* deverá estar disponivel# Coding-DOJO---QA

***CT*** 02
*DADO* que eu esteja na página inicial
*QUANDO* clicar no comando Sign in
*ENTAO* serei redirecionado a página de authentication 'http://automationpractice.com/index.php?controller=authentication&back=my-account'

***CT*** 03
*DADO* que eu não tenha credenciais
*QUANDO* eu preencher o campo 'email address' com um email válido
*E* clicar no botão 'Create an account'
*ENTAO* serei redirecionado a página create an account

***CT*** 04
*DADO* que eu esteja na pagina de criação de conta - "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation"
*QUANDO* eu preencher os campos obirigatórios 
*E* clicar no botão "register"
*ENTAO* serei redirecionado para a pagina "my account"

***CT*** 05
*DADO* que eu esteja na pagina de criação de conta - "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation"
*QUANDO* tentar enviar o formulário com alguma informação inválida
*ENTÃO* o campo de senha deve ser limpo.

***CT*** 06
*DADO* que eu esteja na pagina de criação de conta - "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation"
*QUANDO* tentar enviar o formulário sem alguma informação obrigatória
*ENTÃO* o campo de senha deve ser limpo.

***CT*** 07
*DADO* que eu esteja na pagina de criação de conta - "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation"
*QUANDO* tentar enviar o formulário sem alguma informação obrigatória
*ENTÃO* deve ser exibida uma mensagem informando os campos que faltam ser preenchidos.

***CT*** 08
*DADO* que eu esteja na pagina de criação de conta - "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation"
*QUANDO* tentar enviar o formulário sem alguma informação obrigatória
*ENTAO* o nome do campo obrigatorio.

***CT*** 09
*DADO* que eu esteja na pagina de criação de conta - "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation"
*QUANDO* preencher todos os campos obrigatorios
*E* preencher o campo `Password` com 4 caracteres ou menos
*ENTAO* deverá retornar visualmente em `vermelho` e um `x` no input

***CT*** 10
*DADO* que eu esteja na página de login
*QUANDO* preencher os campos de email e senha com as credenciais corretas cadastradas no sistema
*ENTAO* deverá me redirecionar à página My Account