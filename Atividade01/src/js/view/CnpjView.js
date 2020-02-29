import CnpjController from '../controller/CnpjController';

export default class CnpjView {

    constructor() {
        this.controller = new CnpjController();
        /**
         * Seletor de elementos 
         * da página
         */
        this.$ = document.querySelector.bind(document);
    }

    validarCNPJ() {
       
        let valordigitado = this.$('#numerodigitado').value;
        
        let verificaCnpj = this.controller.validarCNPJ(valordigitado);
        
        this.exibirValidacao(verificaCnpj);

    }

    exibirValidacao(resposta) {

        if(resposta){
            this.$('#resultado').innerText = 'Verdadeiro';
        }else{
            this.$('#resultado').innerText = 'Falso';
         }
    }

}