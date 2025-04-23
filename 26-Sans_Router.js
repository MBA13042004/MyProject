const express =require('express');
const morgan =require('morgan');

const app=express();

app.use(express.static('./methods-public'));// integre tout Ndaaaaa Static assets

app.use(express.urlencoded({extended : false})); // l acces au donnnes envoye par post 

app.use(express.json()); // Preparation a recevoir des données de format json (Postman )

app.use(morgan('tiny')); // Middleware Nadiii (method , route, statuts)


const data=require('./20-data');

app.get('/',(req,res)=>{
    res.status(200).json({success:true,date:data.people});
})

// From Post  

app.post('/login',(req,res)=>{
    const Username=req.body.Username;
    
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

//--------------Get And Post From----- Axios --------- NOT THE SAME METHODE ARE DIFFERENTS

//  Reponse de Get :

app.get('/api/people', (req, res) => {  // la reponse de Axios Ndaaaaa
    res.status(200).json({success:true,
    data:data.people});

})


//  Reponse de Post :


app.post('/api/people', (req, res) => {  // la reponse de Axios Ndaaaaa
    const name=req.body.nom; // ce nom est celui qui va etre capter
    if(name){ return res.status(200).json({success:true,
       person:[
        req.body.nom,

     ]})}
     else{
        res.status(400).json({success:false, // petit f Obligatoire
          msg:'Please Enter a name' 
     
         })}
     
    
})


app.post('/api/People/postman',(req,res)=>{
    const name=req.body.nom;
    if(name){
        res.status(200).json({status:true,data:[...data.people,name]})
    }
    else{
        res.status(400).json({status:false,msg:"Please Enter a Name"})

    }


})


app.get('/api/people/:IdP',(req,res)=>{
   const IdP=req.params.IdP;
    const Pepole=data.people.find((person)=> person.id===Number(IdP));
    if(Pepole){
        res.status(200).send(Pepole);
    }
    else{
        res.status(200).send("People Not Found");

    }
})



//---------------------------Put-----------------------

app.put('/api/people/:IdP',(req,res)=>{
    const IdP=req.params.IdP;
    const name=req.body.name;
    const personne=data.people.find((personne)=> personne.id===Number(IdP));
    if(personne){
        personne.name=name;
        res.status(200).send(data.people);
    }
    else{
        res.status(200).send("Person does not Exist");

    
    }
    
})




//-------------------------Delete---------------
app.delete('/api/people/:IdP',(req,res)=>{
    const IdP=req.params.IdP;
    const personne=data.people.find((personne)=> personne.id===Number(IdP));
    if(personne){
        const NewPeople=data.people.filter((personne)=>personne.id !== Number(IdP))
        return res.status(200).send(NewPeople);
    }
    else{
        res.status(200).send("Person does not Exist");

    
    }
})




app.listen(5000,()=>{
    console.log("App Listening on Port : 5000");  
})



    
