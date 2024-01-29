const express = require('express');
const router = express.Router();

const Person = require('../models/Person.js');

router.get('/', async (req,res)=>{
    try{
        const allPerson = await Person.find();
        res.status(200).send(allPerson);
    }catch(err){
        console.log(err);
        res.status(500).send({err:'Internal Server Error'});
    }
})

router.post('/', async (req,res)=>{
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('Data saved');
        res.status(201).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})
router.get('/:workType', async(req,res)=>{
    try{
        const worktype = req.params.workType;
        if(worktype === 'Developer' || worktype === 'HR' || worktype === 'Tester'){
            const people = await Person.find({job:worktype});
            res.status(200).send(people);
        } else {
            res.status(404).send('Work type not found');
        }
    }catch(err){
        res.status(500).send('Internal server error');
    }   
})