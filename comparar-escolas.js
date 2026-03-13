
const unidades = document.querySelectorAll('.unidade input[type="button"]')
console.log(unidadesnidades);
const uniAcoes = document.querySelectorAll('.unidade_acoes input[typ="button"]')


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

  // Exibir informações formatadas
  dadosEscolas(){
    console.log(

    )
  }

}

const escolaA = new Senai ()
const escolaB = new Senai ()

/* 🚨NÃO ALTERAR A CLASSE 🚨 */
/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */

/* ===== OBTER ELEMENTOS ===== */

/* ===== FUNÇÃO DE VALIDAÇÃO ===== */



/* ===== INSTANCIAR ESCOLA A ===== */


/* ===== INSTANCIAR ESCOLA B ===== */


/* ===== ABRIR ESCOLA ===== */


/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */
const compararEscolas = (escolaA, escolaB) =>
  console.log(`> Comparando ofertas de cursos: ${escolaA.cidade} VS ${escolaB.cidade}`);

  if (escolaA.qtdeCursos > escolaB.qtdeCursos){
      console.log(`Resultado: O SENAI ${escolaA.cidade} possui mais cursos.`);
  }else if (escolaA.qtdeCursos > escolaB.qtdeCursos){
      console.log(`Resultado: o SENAI ${escolaB.cidade} possui mais cursos.`);
  }else{
      console.log(`Resultado: Ambas as escolas possuem a mesma quantidade de cursos.`);
  }
  console.log(`Status: ${escolaA.cidade} (${escolaA.qtdeCursos}) | ${escolaB.cidade} (${escolaB.qtdeCursos})\n`)



/* ===== NOVA CONSULTA ===== */


