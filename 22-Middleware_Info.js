const middleware=(req,res,next)=>{const methode=req.method;
    const url=req.url;
    const date=new Date().getFullYear();
    console.log(methode,url,date)
    next();}


module.exports=middleware;