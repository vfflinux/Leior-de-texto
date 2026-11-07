const fs = require("fs");
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
// está dando erro
fs.readFile(link, "utf-8", (erro, texto) => {
  // verificaPalavrasDuplicadas(texto);
  quebraEmParagrafos(texto);
});

function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split("\n");
  const contagem = paragrafos.map((paragrafo) => {
    return verificaPalavrasDuplicadas(paragrafo);
  });
  console.log(contagem);
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  // objeto[propriedade] = valor;
  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavrasLimpas = limpaPalavras(palavra);
      resultado[palavrasLimpas] = (resultado[palavrasLimpas] || 0) + 1;
    }
  });
  return resultado;
}
