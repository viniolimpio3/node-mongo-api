import express from 'express';
import AutoresController from '../controller/autoresController.js';

const router = express.Router();

router.get('/autores', AutoresController.listaAutores)
    .get('/autores/:id', AutoresController.buscaAutor)
    .post('/autores', AutoresController.cadastraAutor)
    .put('/autores/:id', AutoresController.atualizaAutor)
    .delete('/autores/:id', AutoresController.excluiAutor)

export default router;