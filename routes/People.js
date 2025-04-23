const express=require('express');
const router=express.Router();
const {getAllPerson,
    Post1Persone,
    PostMPersone,
    getPersonById,
    PostPersoneById,
    deletePerson}=require('../controllers/CPepole')
    
//--------------Get And Post From----- Axios --------- NOT THE SAME METHODE ARE DIFFERENTS

//  Reponse de Get :

router.get('/',getAllPerson)


//  Reponse de Post :


router.post('/',Post1Persone);


router.post('/postman',PostMPersone);


router.get('/:IdP',getPersonById);



//---------------------------Put-----------------------

router.put('/:IdP',PostPersoneById);




//-------------------------Delete---------------
router.delete('/:IdP',deletePerson)

module.exports={router};