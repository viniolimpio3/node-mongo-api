import express from 'express'
import LivrosController from '../controller/livrosController.js'

const router = express.Router();

router.get('/livros', LivrosController.listarLivros);

export default router;