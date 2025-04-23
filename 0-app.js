const express =require('express');
const app=express();
const morgan =require('morgan');
const router_people=require('./routes/People');
const router_login=require('./routes/login');
app.use(express.static('./methods-public'));// integre tout Ndaaaaa Static assets

app.use(express.urlencoded({extended : false})); // l acces au donnnes envoye par post 

app.use(express.json()); // Preparation a recevoir des données de format json (Postman )

app.use(morgan('tiny')); // Middleware Nadiii (method , route, statuts)

app.use('/api/people',router_people.router);
app.use('/login',router_login);


const data=require('./20-data');

app.get('/',(req,res)=>{
    res.status(200).json({success:true,date:data.people});
})






app.listen(5000,()=>{
    console.log("App Listening on Port : 5000");  
})



    
