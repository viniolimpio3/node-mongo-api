import express from 'express';

const app = express();

app.use(express.json())

const livros = [
    {id: 1, title: "Senhor dos anéis"},
    {id: 2, title: "O Hobbit"}
]

app.get('/', (req, res) => {
    res.status(200).send('Initial page');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.get('/livros/:id', (req, res) => {
    let index = findBook(req.params.id)

    res.status(200).json(livros[index])
})


app.post('/livros', (req, res) => {
    livros.push(req.body);

    res.status(201).send('Livro cadastrado com sucesso');
})

app.put('/livros/:id', (req, res) => {
    let index = findBook(req.params.id);

    livros[index].title = req.body.title;
    res.status(200).send('Livro atualizado com sucesso')
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;

    let index = findBook(id)

    livros.splice(index, 1)
    
    res.status(200).send(`Livro ${id} Removido com sucesso`)
})


function findBook(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app