const jwt=require('jsonwebtoken');

function auth(req,res,next){
    try{
        const token=req.header('x-auth-token');
        if(!token){
            return res.status(401).send("Access Denied! no token");
        }
        try{
        const decoded=jwt.verify(token,process.env.PRIVATEKEY);
        req.user=decoded;
        next();
        }catch(error){
            res.status(400).send("invalid token");
        }
    }
    catch(err){
        res.status(400).send(error);
    }
}

module.exports= auth;