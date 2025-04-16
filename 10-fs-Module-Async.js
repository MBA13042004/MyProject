const fs=require('fs');
console.log('Avant la lecture');

fs.readFile('./Folder/First.Txt', 'utf8', (err,result)=>{
if(err){
    console.log(err);
    return;
}
const First=result;
console.log(result);


fs.readFile('./Folder/Second.Txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }

    const Second=result;
    console.log(result);
    

fs.writeFile('./Folder/Second_Async.Txt',`the result is : ${First}, ${Second}`,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('done');})
})
})
console.log('doz doz');// ghaydoz hna

