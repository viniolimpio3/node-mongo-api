import express from 'express'
import livrosRoutes from './livrosRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).json({"message": "initial page"});
    })

    app.use(
        express.json(),
        livrosRoutes
    )
}

export default routes