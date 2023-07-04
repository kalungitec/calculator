const express = require('express');
const router = express.Router();

const History = require('../models/history')
router.get("/", (req,res)=>{
    res.render("calculator")
});
 
// multer

// post into a database
router.post("/Save", async(req,res) => {
    try{
        const history = new History(req.body)
        await history.save()

        // //sending the user back to the home page after saving
        const items = await History.find()
        res.render("calculator",{items} ) // we redirect to a path and pass in the items
        // //the code below is for testing purposes
        console.log(history)
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router
