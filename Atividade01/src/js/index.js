import PessoaView from './view/PessoaView';

let view = new PessoaView();


window.validarcpf = event => {
    event.preventDefault()
    view.validarcpf(valordigitado);
}