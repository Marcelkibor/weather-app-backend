const jwt = require("jsonwebtoken");
module.exports = function(req,res,next){
    const token = req.header("jwt");
    if(!token) return res.status(401).send("Access Denied!");
    try{
        const verifiedRequest = jwt.verify(token,process.env.TOKEN_SECRET);//returns payload with user id
        req.user = verifiedRequest;
        next();
    }catch(err){
        res.status(400).send("Invalid Token!");
    }
}