const express = require('express');
const { getAllMovies, addMovie, getSingleMovie, getPaginated } = require('../controllers/movieControllers');
const router = express.Router();

router.route('/add-movie').post(addMovie);

router.route('/get-all').get(getAllMovies);

router.route('/get-single').get(getSingleMovie);

router.route('/get-paginated').get(getPaginated);

module.exports = router;