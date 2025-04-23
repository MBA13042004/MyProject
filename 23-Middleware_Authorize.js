const authoriser=(req,res,next)=>{
    const { user,Pass }=req.query;
    if(user === 'Mosab' && Pass === 'ADAM2020@kkgg'){
        req.user={name :'Mosab',id :'idM'}
    console.log('c est Autoriser');
    console.log(req.user);


    next();    
    }
    else{
        res.status(404).send('c est Non Autoriser');
    console.log('c est Non Autoriser');

    }
}
module.exports=authoriser;