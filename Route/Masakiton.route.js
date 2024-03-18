const express = require('express');
const router = express.Router();

const Masakiton = require('../Model/Masakiton.model');


//POST MASAKITON
router.post('/', async(req, res, next) => {
    try{
        const masakiton = new Masakiton(req.body);
        const result = await masakiton.save();
        res.send(result);
    }
    catch(error) {
        res.send(error.message);
    }
});


//GET ALL MASAKITON
router.get('/', async (req, res, next) =>{
    try{
        const result = await Masakiton.find({}, {__v: 0});
        res.send(result);
    }
    catch (error) {
        res.send(error.message);
    }
});


//GET MASAKITON BY ID
router.get('/:id', async(req, res, next) => {
    const id = req.params.id;

    try{
        const result = await Masakiton.findById(id);
        res.send(result);
    }
    catch(error){
        res.send(error.message);
    }
});


//DELETE MASAKITON BY ID
router.delete('/:id', async(req, res, next) => {
    const id = req.params.id;

    try{
        const result = await Masakiton.findByIdAndDelete(id);
        res.send(result);
    }
    catch (error) {
        res.send(error.message);
    }
});


//PATCH by ID
router.patch('/:id', async(req, res, next) =>{
    try{
        const id = req.params.id;
        const updates = req.body;
        const result = await Masakiton.findByIdAndUpdate(id, updates);
        res.send(result);
    }
    catch (error){
        res.send(error.message);
    }
});

module.exports = router;


