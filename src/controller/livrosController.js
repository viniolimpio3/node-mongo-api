import livros from "../model/livro.js";

class LivrosController {
    
    static listaLivros (req, res) {
        livros.find()
        .populate('autor')
        .exec((err, books) => {
            console.log("Listando livros do mongoDB", err)
            res.status(200).json(books);
        })
    }

    static buscaLivroPorId (req, res) {
        const { id } = req.params;

        livros.findById(id) 
        .populate('autor', 'nome')
        .exec((err, livros) => {
            if(err){
                res.status(400).send({message: `Erro ao buscar livro: ${err}`})
                return;
            }

            res.status(200).send(livros)
        })
    }


    static cadastraLivro (req, res) {
        let livro = new livros(req.body);


        livro.save((err) => {
            console.log("Salvando livro no mongoDB", err)
            if(err){
                res.status(500).json({message: `Erro ${err.message} - falha ao cadastrar livro.`});
                return;
            }

            res.status(201).json(livro.toJSON());
        });
    }


    static atualizaLivro (req, res) {
        const { id } = req.params;


        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).json({message: `Erro ${err.message} - falha ao atualizar o livro`});
                return;
            }
            res.status(200).json({message: 'Livro atualizado com sucesso.'});
        })
    }


    static excluiLivro (req, res) {

        const { id } = req.params;

        livros.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: `Livro não pôde ser removido. Erro: ${err}`});
                return;
            }

            res.status(200).send({message: 'Livro removido com sucesso'});
        })
    }


    static listaLivrosPorEditora (req, res){
        const { editora } = req.query;

        livros.find({'editora': editora}, {}, (err, livros) => {
            if(err){
                res.status(500).send({message: `Erro ao buscar livros: ${err}`});
                return;
            }

            res.status(200).json(livros);
        })
    }
}

export default LivrosController;