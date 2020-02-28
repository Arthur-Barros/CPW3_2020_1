
import PessoaController from '../controller/PessoaController';

export default class PessoaView {

    constructor() {
        this.controller = new PessoaController();
        /**
         * Seletor de elementos 
         * da página
         */
        this.$ = document.querySelector.bind(document);
    }

    validarcpf() {
       
        let valordigitado = this.$('#numerodigitado').value;
        
        let verificaCPF = this.controller.validarcpf(valordigitado);
        this.exibirCPF(verificaCPF);
    }

}