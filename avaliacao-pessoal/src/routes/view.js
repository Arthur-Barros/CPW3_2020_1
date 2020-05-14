import { Router } from 'express';
 
const router = Router();

/**
 * Criando rota inicial
 */
router.get('/', (req,res) => res.render('home'));

/*
 * Criando rota da página de Biografia
 */
router.get('/bio', (req,res) => res.render('bio'));

/**
 * Criando a rota da página de Portfólio
 */
router.get('/portfolio', (req,res) => res.render('portfolio')); 

/**
 * Criando a rota da página de Contato
 */
router.get('/contato', (req,res) => res.render('contato'));



export default router
