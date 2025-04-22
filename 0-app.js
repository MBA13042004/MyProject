const express =require('express');
const app=express();
const data=require("./20-data");
app.get('/',(req,res)=>{
    res.send('Home Page');
})

// choisir juste l id le nom  et l imgae grace au map
app.get('/api/Product',(req,res)=>{
    const NewProduct=data.products.map((Produit)=>{ //Produit c est l element de Product 
        const {id,name,image}=Produit; // Extraire les 3 element de chaque Produit 
        return {id,name,image}; // on les retourne dans New Product 
    })
    res.json(NewProduct);
    })
    

app.all(/^.*$/,(req,res)=>{
    res.send('Erreur');
})
app.listen(5000,()=>{
    console.log("App Listening on Port : 5000");  
})
      
    
