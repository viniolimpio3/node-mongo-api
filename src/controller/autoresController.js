import autores from "../model/Autor.js";

class AutoresController {
    
    static listaAutores (req, res) {
        autores.find((err, books) => {
            console.log("Listando Autores do mongoDB", err)
            res.status(200).json(books);
        })
    }

    static buscaAutor (req, res) {
        const { id } = req.params;

        autores.findById(id, (err, Autores) => {
            if(err){
                res.status(400).send({message: `Erro ao buscar Autor: ${err}`})
                return;
            }

            res.status(200).send(Autores)
        })
    }


    static cadastraAutor (req, res) {
        let autor = new autores(req.body);


        autor.save((err) => {
            console.log("Salvando Autor no mongoDB", err)
            if(err){
                res.status(500).json({message: `Erro ${err.message} - falha ao cadastrar Autor.`});
                return;
            }

            res.status(201).json(autor.toJSON());
        });
    }


    static atualizaAutor (req, res) {
        const { id } = req.params;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).json({message: `Erro ${err.message} - falha ao atualizar o Autor`})
                return;
            }
            res.status(200).json({message: 'Autor atualizado com sucesso.'})
        })
    }


    static excluiAutor (req, res) {

        const { id } = req.params;

        autores.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: `Autor não pôde ser removido. Erro: ${err}`})
                return;
            }

            res.status(200).send({message: 'Autor removido com sucesso'})
        })
    }
}

export default AutoresController;