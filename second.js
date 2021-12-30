function criaCalculadora() {
  //fnção para selecionar o display
  return {
    display: document.querySelector(".display"), //função retornando o display

    inicia() {
      //metodo para iniciar a calculadora
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      //metodo para iniciar com o usuario apertando enter
      this.display.addEventListener("keyup", (e) => {
        // selecionando quando soltar a tecla
        if (e.keyCode === 13) {
          //se a tecla 13(enter) for clicado inicia realizar conta
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      //metodo respondavel por pegar os valores digitados no display
      let conta = this.display.value;

      try {
        //responsavel por fazer a conta
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
      }
    },

    clearDisplay() {
      //metodo responsavel por limpar o display
      this.display.value = ""; //responsavel por limpar o display
    },

    apagaUm() {
      //metodo responsavel por apagar apenas um valor do display
      this.display.value = this.display.value.slice(0, -1); //responsavel por apagar um valor
    },

    cliqueBotoes() {
      //metodo responsavel por pegar os valores clicado pelo usuario
      document.addEventListener("click", (e) => {
        //responsavel por registrar um evento
        const el = e.target; //referencia ao objeto que enviou o evento

        if (el.classList.contains("btn-num")) {
          //verifica se a class existe no atributo
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }
        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },
    btnParaDisplay(valor) {
      //adiciona os valores no display
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();

calculadora.inicia();
