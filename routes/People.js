const express=require('express');


const router=express.Router();
const data=require('../20-data');
//--------------Get And Post From----- Axios --------- NOT THE SAME METHODE ARE DIFFERENTS

//  Reponse de Get :

router.get('/', (req, res) => {  // la reponse de Axios Ndaaaaa
    res.status(200).json({success:true,
    data:data.people});

})


//  Reponse de Post :


router.post('/', (req, res) => {  // la reponse de Axios Ndaaaaa
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


router.post('/api/People/postman',(req,res)=>{
    const name=req.body.nom;
    if(name){
        res.status(200).json({status:true,data:[...data.people,name]})
    }
    else{
        res.status(400).json({status:false,msg:"Please Enter a Name"})

    }


})


router.get('/api/people/:IdP',(req,res)=>{
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

router.put('/api/people/:IdP',(req,res)=>{
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
router.delete('/api/people/:IdP',(req,res)=>{
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

module.exports={router};