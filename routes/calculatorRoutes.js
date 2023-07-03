const express = require('express');
const router = express.Router();

const Register = require('../models/registerModel')
const multer = require("multer")


 


// post into a database
router.post("/calculator", async(req,res) => {
    try{
        const register = new Register(req.body)
        await register.save()
        res.redirect("/calculator") // we redirect to a path
        console.log(req.body)
    }
    catch(err){
        console.log(err)
    }
})

//redirecting from the db
// we redirect to a path and render to a file
router.get("/calculator", async(req,res)=>{
    try{
        let items = await Register.find();
        
        res.render("calculator",{data:items})
    }
    catch(err){
        console.log(err)
        
    }
});










module.exports = router
