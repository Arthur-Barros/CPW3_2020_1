import CpfController from '../controller/CpfController';

export default class CpfView {

    constructor() {
        this.controller = new CpfController();
        /**
         * Seletor de elementos 
         * da página
         */
        this.$ = document.querySelector.bind(document);
    }

    validarCpf() {
       
        let valordigitado = this.$('#numerodigitado').value;
        
        let verificaCPF = this.controller.validarCpf(valordigitado);
        
        this.exibirValidacao(verificaCPF);

    }

    exibirValidacao(resposta) {

        if(resposta){
            this.$('#resultado').innerText = 'Verdadeiro';
        }else{
            this.$('#resultado').innerText = 'Falso';
         }
    }

}