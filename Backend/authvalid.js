const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
    
    try{
        const token=req.headers.auth;
        const decodedtoken=jwt.verify(token,'thisissecretpassword')
        req.data={email:decodedtoken.email,id:decodedtoken.id,name:decodedtoken.name}
        next();
    }
    catch(error){
        res.json({error:"Authentication failed"})
    }
}