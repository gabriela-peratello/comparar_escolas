const cidadeA = document.querySelectorAll("unidade__input unidadeA__cidade")
const codigoA = document.querySelectorAll("unidade__input unidadeA__codigo")
const anoA = document.querySelectorAll("unidade__input unidadeA__ano")
const cursosA = document.querySelectorAll("unidade__input unidadeA__cursos")

const cidadeB = document.querySelectorAll("unidade__input unidadeB__cidade")
const codigoB = document.querySelectorAll("unidade__input unidadeB__codigo")
const anoB = document.querySelectorAll("unidade__input unidadeB__ano")
const cursosB = document.querySelectorAll("unidade__input unidadeB__cursos")




/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
  }

  fecharEscola() {
    this.statusFuncionamento = false;
  }
}

const escolaA = new Senai(codigoA.value, cidadeA.value, anoA.value, cursosA.value)
const escolaB = new Senai(codigoB, cidadeB, anoB, cursosB)


function mostrarResultado(mensagem){
  textoResultado.textContent = mensagem;
}

/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
if (cidadeA = "", codigoA = "", anoA = "", cursosA = "", cidadeB = "", codigoB = "", anoB = "", cursosB = ""){
  mostrarResultado("Preencha todos os campos.")
  return;
}



/* ===== INSTANCIAR ESCOLA A ===== */
const botao = document.querySelectorAll('.unidade__botao unidadeA__instanciar input[type="button"]');
 


/* ===== INSTANCIAR ESCOLA B ===== */


/* ===== ABRIR ESCOLA ===== */


/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */
const compararEscolas = (escolaA, escolaB) =>
  console.log(`> Comparando ofertas de cursos: ${escolaA.cidade} VS ${escolaB.cidade}`);

if (escolaA.qtdeCursos > escolaB.qtdeCursos) {
  console.log(`Resultado: O SENAI ${escolaA.cidade} possui mais cursos.`);
} else if (escolaA.qtdeCursos > escolaB.qtdeCursos) {
  console.log(`Resultado: o SENAI ${escolaB.cidade} possui mais cursos.`);
} else {
  console.log(`Resultado: Ambas as escolas possuem a mesma quantidade de cursos.`);
}
console.log(`Status: ${escolaA.cidade} (${escolaA.qtdeCursos}) | ${escolaB.cidade} (${escolaB.qtdeCursos})\n`)



/* ===== NOVA CONSULTA ===== */


