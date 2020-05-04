import { Router } from 'express';
 
const router = Router();


let clientes = [
    {
        nome: 'Arthur Barros',
        email: 'arthur@gmail.com',
    },
    {
        nome: 'José da Silva',
        email: 'jose@gmail.com'
    },
    {
        nome: 'Lucas Paniago',
        email: 'paniago@gmail.com'
    }   
];

//let clientes = [];


/**
 * Criando a rota inicial
 */

router.get('/', (req,res) => res.render('index'));


/**
 * Criando a rota da página clientes
 */
router.get('/clientes', (req,res) => { 
    res.render('clientes', {clientes});
});


/**
 * Criando a rota para salvar um novo cliente 
 */
router.post('/clientes', (req,res) =>{
    const nome = req.body.nome;
    const email = req.body.email;
    const cliente = {nome, email};
    clientes.push(cliente);
    res.redirect('/clientes');
});

export default router;