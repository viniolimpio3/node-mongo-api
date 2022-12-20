import express from 'express';
import LivrosController from '../controller/livrosController.js';

const router = express.Router();

router.get('/livros', LivrosController.listaLivros)
    .get('/livros/busca', LivrosController.listaLivrosPorEditora)
    .get('/livros/:id', LivrosController.buscaLivroPorId)
    .post('/livros', LivrosController.cadastraLivro)
    .put('/livros/:id', LivrosController.atualizaLivro)
    .delete('/livros/:id', LivrosController.excluiLivro)

export default router;