// 1. Array de objetos (ativos)
const ativos = [
  { nome: "Banco do Brasil", tipo: "Ação", valor: 23.58 },
  { nome: "Tesouro Selic", tipo: "Renda Fixa", valor: 180.0 },
  { nome: "FII XPML11", tipo: "Fundo Imobiliário", valor: 109.09 },
  { nome: "Ação Vale", tipo: "Ação", valor: 83.1 },
];

// 2. FILTER → ativos acima de um valor
const valorMinimo = 50;

const ativosFiltrados = ativos.filter((ativo) => ativo.valor > valorMinimo);

console.log("Ativos acima de 50:");
console.log(ativosFiltrados);

// 3. MAP → nomes em maiúsculo
const nomesMaiusculos = ativos.map((ativo) => ativo.nome.toUpperCase());

console.log("\nNomes em maiúsculo:");
console.log(nomesMaiusculos);

// 4. FUNÇÃO ASYNC → simula busca por nome
async function buscarAtivoPorNome(nome) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = ativos.find(
        (ativo) => ativo.nome.toLowerCase() === nome.toLowerCase(),
      );
      resolve(resultado);
    }, 1000); // simula atraso
  });
}

// Execução da função async
(async () => {
  const ativo = await buscarAtivoPorNome("Ação Vale");

  console.log("\nResultado da busca:");
  console.log(ativo || "Ativo não encontrado");
})();
