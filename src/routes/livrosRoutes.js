import express from 'express';
import LivrosController from '../controller/livrosController.js';

const router = express.Router();

router.get('/livros', LivrosController.listarLivros)
    .get('/livros/:id', LivrosController.buscaLivro)
    .post('/livros', LivrosController.cadastraLivro)
    .put('/livros/:id', LivrosController.atualizaLivro)
    .delete('/livros/:id', LivrosController.excluiLivro)

export default router;