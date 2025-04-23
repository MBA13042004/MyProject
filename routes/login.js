const express=require("express");
const router_login=express.Router();


// From Post  

router_login.post('/',(req,res)=>{
    const Username=req.body.name;
    
    if(Username){
        if(Username === 'Mosab'){
            return res.send('hey , '+Username);
  
        }
        else{
        return res.send("Non Autorisé");
       

       
    }}
    else{
        
         return res.send("champs insufusant");
        


    }
    
})


module.exports=router_login;