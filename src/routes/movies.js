const routes = require('express').Router()
const moviesController = require('../controllers/movies')

routes.get('/', moviesController.listMovies)
routes.get('/:id', moviesController.detailMovies)
routes.post('/', moviesController.createMovies)
routes.delete('/:id', moviesController.deleteMovie)
routes.patch('/:id', moviesController.updateMovie)

module.exports = routes
