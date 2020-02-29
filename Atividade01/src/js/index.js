import CpfView from './view/CpfView';
import CnpjView from './view/CnpjView';

let view = new CpfView();
let vieew = new CnpjView();

window.validarCpf = () => {
    view.validarCpf();
}

window.validarCNPJ = () => {
    vieew.validarCNPJ();
}

