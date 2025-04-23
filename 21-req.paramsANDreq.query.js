const express =require('express');
const app=express();
app.use(express.json());
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

// aficher chaque element indivuduellemnt a l aide de route params 

app.get('/api/Product/:Id',(req,res)=>{ // rod balk  kyn wahd variable : ID fost objet req.params 
    
    const SingleProduct=data.products.find((Produit) => Produit.id === Number(req.params.Id)); // hit kitstocka sous fourme String ima   ==   wla    === Number()
    if (SingleProduct) {res.json(SingleProduct);}
    else{ //  if not exist Ndaaa
        res.send('  Not Found !!');
    }

    })

//--------------------------------------------------------------


// Test   req.params

app.get('/api/Prod/:IdP/Reviews/:IDR',(req,res)=>{ // IDP et IDR atendent les valeurs
    res.send(req.params);
    console.log(req.query);
    })

//--------------------------------------------------------------

// Test   Query String 

app.get('/api/Prod/walo',(req,res)=>{ // on va ajouter ? dans l url 
res.send(req.query);
console.log(req.query);
})

//--------------------------------------------------------------


app.get('/api/Product/v1/Query',(req,res)=>{

let sortedProduct=[...data.products];// faire une copie de Products 

const {search,limit}=req.query;
if(search){
    sortedProduct=sortedProduct.filter((produit)=>{ // produit rah element mn new table
        return produit.name.startsWith(search);
    })
}
if(limit){
    sortedProduct=sortedProduct.slice(0,Number(limit)); // le nmbr d element a faire disparaitre 
    res.status(200).send(sortedProduct);
        }

    
    
if(sortedProduct.length==0){
    res.status(200).send('Product Not Found');
}

    })



    

app.all(/^.*$/,(req,res)=>{
    res.send('Erreur');
})

app.listen(5000,()=>{
    console.log("App Listening on Port : 5000");  
})
      
    
