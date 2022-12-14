import express from 'express';
//import { tvs } from './tvsData';
import uniqid from 'uniqid'

import { getTvs } from '../tmdb-api';
import { getTv } from '../tmdb-api';
import { getTvReviews } from '../tmdb-api';

import tvModel from './tvModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); 

router.get('/', asyncHandler( async(req, res) => {
    const tvs = await getTvs();
    res.status(200).json(tvs);
  }));



// router.get('/', asyncHandler(async (req, res) => {
//     let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
//     [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

//     const totalDocumentsPromise = tvModel.estimatedDocumentCount(); //Kick off async calls
//     const tvsPromise = tvModel.find().limit(limit).skip((page - 1) * limit);

//     const totalDocuments = await totalDocumentsPromise; //wait for the above promises to be fulfilled
//     const tvs = await gettvs();

//     const returnObject = { page: page, total_pages: Math.ceil(totalDocuments / limit), total_results: totalDocuments, results: tvs };//construct return Object and insert into response object

//     res.status(200).json(returnObject);
// }));

// Get tv details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tv = await getTv(id);
    if (tv) {
        res.status(200).json(tv);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// Get tv reviews
router.get('/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tvReviews = await getTvReviews(id);
    // find reviews in list
    if (tvReviews) {
        res.status(200).json(tvReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
}));

//Post a tv review
router.post('/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tvReviews = await getTvReviews(id);
    if (tvReviews) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        tvReviews.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
}));

export default router;