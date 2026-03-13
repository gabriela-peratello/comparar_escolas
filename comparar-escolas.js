const cidadeA = document.querySelectorAll()


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

  dadosEscolas(){
    console.log(`Cidade: ${}`)
  }


 
}

/* 🚨NÃO ALTERAR A CLASSE 🚨 */
/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */

/* ===== OBTER ELEMENTOS ===== */

const uniA = new Senai(${})
const uniB = new Senai()

uniA.infoEscolas();


/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
function validarEscolas(){
  if
}


/* ===== INSTANCIAR ESCOLA A ===== */


/* ===== INSTANCIAR ESCOLA B ===== */


/* ===== ABRIR ESCOLA ===== */


/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */
const comparaEscola = (uniA, uniB) =>
  console.log(`Comparando`)

/* ===== NOVA CONSULTA ===== */


