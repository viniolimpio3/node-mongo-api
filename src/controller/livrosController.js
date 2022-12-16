import livros from "../model/livro.js";

class LivrosController {
    
    static listarLivros (req, res) {
        livros.find((err, books) => {
            console.log(err, books)
            res.status(200).json(books)
        })
    }

}

export default LivrosController;