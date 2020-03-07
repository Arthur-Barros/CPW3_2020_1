export default class Cliente{

    constructor(nome,cpf,telefone,endereco,){
        Object.assign(this,{nome,cpf,telefone,endereco});
    }

    /**
     * A linha acima é igual a fazer isso:
     * this.nome = nome;
     * this.cpf = cpf;
     * this.telefone = telefone;
     * this.endereco = endereco;
     */

}