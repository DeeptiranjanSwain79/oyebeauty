const Movie = require('../models/movieModel');
const catchAsyncError = require('../middleware/catchAsyncError');
const ApiFeatures = require('../utils/apiFeatures');

exports.addMovie = catchAsyncError(async (req, res, next) => {

    const movie = await Movie.create(req.body);
    res.status(201).json({ success: true, movie });
});

exports.getAllMovies = catchAsyncError(async (req, res) => {
    const movies = await Movie.find();

    res.status(200).json({
        success: true,
        movies
    });
})

exports.getSingleMovie = catchAsyncError(async (req, res) => {
    const movie = await Movie.findById(req.query.id);

    res.status(200).json({
        success: true,
        movie
    });
})

exports.getPaginated = catchAsyncError(async (req, res) => {
    const apiFeature = new ApiFeatures(Movie.find(), req.query).pagination(req.query.page, req.query.size);
    const movie = await apiFeature.query;

    res.status(200).json({
        success: true,
        movie
    });
})