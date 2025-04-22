const fs = require('fs').promises;// la3ba kamla kayna hna     .promises
const util=require('util');
//const readFilePromise=util.promisify(fs.readFile);//Ndaaaaaaa hadi n9dro nzwloha ida zidna .promises nfo9i hhhhhhhhhhhhh
//const writeFilePromise=util.promisify(fs.writeFile);//Ndaaaaaaa hadi n9dro nzwloha ida zidna .promises nfo9i hhhhhhhhhhhhh

const start = async () => {
    try{
        const first  =await fs.readFile('./Folder/First.Txt','utf8'); // sf lkhedma dyal git texte kamla hna hhhhhh
        const Second =await fs.readFile('./Folder/Second.Txt','utf8');// lharba wlah
                      await fs.writeFile('./Folder/writeFilePromise',`the result is : ${first} , ${Second}`,{flag:'a'});
        console.log(first,Second);
    }catch(error){
        console.log(error);
    }
    

}
console.log('Bismillah');
start();
console.log('alhamdolillah');
