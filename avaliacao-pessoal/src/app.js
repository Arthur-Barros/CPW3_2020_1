import express from 'express';
import path from 'path';
import routasView from './routes/view';

const app = express();


/**
 * Configuração da pagina inical 
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


/**
 * Recursos estáticos
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Rotas view
 */
app.use('/', routasView);

export default app;