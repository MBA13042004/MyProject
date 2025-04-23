const data=require('../20-data');

const getAllPerson=(req, res) => {// la reponse de Axios Ndaaaaa
    res.status(200).json({success:true,
    data:data.people});

}


const Post1Persone=(req, res) => {  // la reponse de Axios Ndaaaaa
    const name=req.body.name; // ce nom est celui qui va etre capter
    if(name){ return res.status(200).json({success:true,
       person:[
        req.body.name,

     ]})}
     else{
        res.status(400).json({success:false, // petit f Obligatoire
          msg:'Please Enter a name' 
     
         })}
     
    
}

const PostMPersone=(req,res)=>{
    const name=req.body.name;
    if(name){
        res.status(200).json({status:true,data:[...data.people,name]})
    }
    else{
        res.status(400).json({status:false,msg:"Please Enter a Name"})

    }


}

const getPersonById=(req,res)=>{
   const IdP=req.params.IdP;
    const Pepole=data.people.find((person)=> person.id===Number(IdP));
    if(Pepole){
        res.status(200).send(Pepole);
    }
    else{
        res.status(200).send("People Not Found");

    }
}

const PostPersoneById=(req,res)=>{
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
    
}

const deletePerson=(req,res)=>{
    const IdP=req.params.IdP;
    const personne=data.people.find((personne)=> personne.id===Number(IdP));
    if(personne){
        const NewPeople=data.people.filter((personne)=>personne.id !== Number(IdP))
        return res.status(200).send(NewPeople);
    }
    else{
        res.status(200).send("Person does not Exist");

    
    }
}


module.exports={
getAllPerson,
Post1Persone,
PostMPersone,
getPersonById,
PostPersoneById,
deletePerson,

}


