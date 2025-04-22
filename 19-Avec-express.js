const express=require('express');
const app=express();
//const path=require('path');

app.use(express.static('./navbar-app'));// had commande kat3awed dak if else if else id Ndaaaaaa 


// index.html will be considered as route dans : express.static('./navbar-app') Ndaa
/*app.get('/',(req,res)=>{
res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
});*/

app.get('/about',(req,res)=>{
    res.status(200).send('About Page');
    });
// /^.*$/ dans la place de '*'  Attention
app.all('*',(req,res)=>{
    res.status(404).send('Not Found');
    })

app.listen(5000,()=>{
    console.log('Server listenig on port : 5000');
    
})  
      
    
