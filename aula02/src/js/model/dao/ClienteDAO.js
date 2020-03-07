import Cliente from "../entity/Cliente";

import * as Lojadb from "../../db/loja.json";


export default class ClienteDAO {

    // quando esta dentro de uma class e metodo em vez de ser função, e as variáveis são atributos


    recuperarTodos() {
        // Poderia retornar assim (ele retornaria um objeto genérico com os clientes), return.Lojadb.clientes.

        let clientes = Lojadb.clientes.map(cliente => new Cliente(cliente.nome,cliente.cpf,cliente.telfone,cliente.endereco));

        return clientes;
    }

}