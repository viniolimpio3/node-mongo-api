import mongoose from 'mongoose'


mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@clusterviniprojects.unxnq.mongodb.net/alura-node`)

const db = mongoose.connection;

export default db;