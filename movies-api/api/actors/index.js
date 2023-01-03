import express from 'express';
import uniqid from 'uniqid'

import { getActors } from '../tmdb-api';
import { getActor } from '../tmdb-api';

import actorModel from './actorModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); 

router.get('/', asyncHandler( async(req, res) => {
    const actors = await getActors();
    res.status(200).json(actors);
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

// Get actor details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const actor = await getActor(id);
    if (actor) {
        res.status(200).json(actor);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

export default router;