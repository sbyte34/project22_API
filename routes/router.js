const express = require('express');
const router =express.Router();

const emp = require('../modules/employeschema')
const {generateCurdMethods} = require("../services/servicepage")
const employeeCurd = generateCurdMethods(emp)
// const DBSchema = require ();

// get all
router.get('/',(req,res)=>{
    employeeCurd.getAll()
    .then(data => res.send(data))
    .catch(err=> console.log(err))
});

// to create 
router.post('/',(req,res)=>{
    employeeCurd.create(req.body)
    .then(data => res.send(data))
    .catch(err=> console.log(err))
});

// to get data from table
router.get('/:id',(req,res)=>{
    employeeCurd.getById(req.params.id)
    .then(data => res.send(data))
    .catch(err=> console.log(err))

})

// to update record
router.put('/:id',(req,res)=>{
    employeeCurd.Update(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err=> console.log(err))
})


// to delete record
router.delete('/:id',(req,res)=>{
    employeeCurd.Delete(req.params.id)
    .then(data => res.send(data))
    .catch(err=> console.log(err))
})

  
module.exports =  router