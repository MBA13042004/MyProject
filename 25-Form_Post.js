const express =require('express');
const morgan =require('morgan');

const app=express();

app.use(express.static('./Test_Post'));// integre tout Ndaaaaa Static assets

app.use(express.urlencoded({extended : false})); // l acces au donnnes envoye par post 

app.use(express.json()); // Preparation a recevoir des données de format json (Postman )

app.use(morgan('tiny'));


const data=require('./20-data');

app.get('/',(req,res)=>{
    res.status(200).json({success:true,date:data.people});
})


app.post('/login',(req,res)=>{
    const Username=req.body.Username;
    const Password=req.body.Password;
    if(Username && Password){
        if(Username === 'Mosab' && Password == 123 ){
            return res.send('hey , '+Username);
  
        }
        else{
        return res.send("Non Autorisé");
       

       
    }}
    else{
        
         return res.send("champs insufusant");
        


    }
    
})


app.listen(5000,()=>{
    console.log("App Listening on Port : 5000");  
})



      
    
