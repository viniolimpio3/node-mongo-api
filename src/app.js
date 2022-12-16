import express from 'express';
import db from './config/database.js'
import routes from './routes/index.js'

db.on('error', console.log.bind(console, 'Database error'));
db.once('open', () => {
    console.log("Conexão realizada com sucesso.")
})

const app = express();

app.use(express.json())

routes(app)

export default app