const router = require("express").Router();
const verify  = require("../verifyToken");
const locations = ['Eldoret','Nakuru','Nairobi','Kilifi']

//add middleware for verification
router.get('/',verify,(req,res)=>{
    res.json({locations})
})
module.exports = router