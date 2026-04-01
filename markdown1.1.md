#javajs

#o que e o motor v8 do javajs?

- e o motor JavaScript criado pelo google, para executar o codigo com alta performece.
- e usado no navegador usando o google chtome, e no backend e usado no node.js

#ECMAScript (ES6+): O que e o comite TC39 e por que o lançamento do ES6 em 2015 foi um marco para a linguagem?
-é o comitê responsavel por evoluir o javajs
-Define o padrão ECMAScript
-Decide novas features (async/await, classes, etc.)
-ES6 transformou JS em linguagem moderna para frontend e backend.

#Tipagem Dinâmica e Fraca: O que significa dizer que o JavaScript e dinamicamente tipado? Quais são os riscos e benefícios disso?
-Dinamicamente tipado: Significa que você não declara o tipo da variável, O tipo é definido em tempo de execução.
-Fracamente tipado: faz a correção automatica.
-beneficios: Mais rápido de escrever, Menos boilerplate, Flexível
-riscos: Bugs silenciosos, Coerções inesperadas, Dificulta manutenção em projetos grandes (Por isso que se usa TypeScript em projetos profissionais.)

#Ambientes de Execução: Qual a diferença prática entre executar JavaScript no Browser (Navegador) e no Node.js?
-browser: exemplo google chrome, ele tem dom, eventos, e APIs do navegador, e o uso e da interface(frontend).
-node.js: ele tem sistemas de arquivos , servidor http e processos, mas não tem o DOM, e o uso backend, APSi e Script.]

##O que é o Node.js?

-O Node.js é um ambiente de execução que permite rodar JavaScript fora do navegador.

- Baseado no motor V8 (do Google)
- Executa código JS no lado do servidor (backend)

##Onde é usado?

-O Node.js é amplamente utilizado em:

- Backend de aplicações web (APIs REST / GraphQL)
- Aplicações em tempo real (chat, notificações, streaming)
- Scripts e automações (CLI tools)
- Ferramentas de build (npm, webpack, etc.)
- Microserviços

##Para que serve?

-serve para:

- Criar servidores HTTP
- Manipular arquivos (filesystem)
- Conectar com bancos de dados
- Construir APIs escaláveis
- Executar tarefas assíncronas

-Exemplo simples:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000);

beneficios: tem alta performace usando o moto v8, e tem a mesma linguage no frondend e no backend
riscos: não e ideal para tarefas pesadas, muitas dependencias e tem o risco de ficar vuneravel
```
