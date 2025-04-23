const express =require('express');
const app=express();
const morgan=require('morgan'); // remplce mes 2 middleware


// req => Middleware => res

//app.use(express.static('./navbar-app')); Middleware Ndaaaa

const Middleware_Info=require('./22-Middleware_Info');
const Middleware_Authorize=require('./23-Middleware_Authorize');


//app.use('/api',Middleware_Authorize); // Au lieu de lui ajouter manuellemnt dasn tout les routes avant (req,res) , le path est comme un tri d aplliquation de moddleware 
app.use(morgan('tiny'));
app.get('/',(req,res)=>{
    res.send('Home Page');
   
})

app.get('/about',(req,res)=>{
    res.send('About Page');
   
})

app.get('/api/P',(req,res)=>{
    res.send('Product Page');
   
})


app.get('/api/R',(req,res)=>{
    res.send('Review Page');
   
})

app.listen(5000,()=>{
    console.log("App Listening on Port : 5000");  
})
      
    
