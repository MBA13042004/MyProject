const fs=require('fs');
console.log('Debut 1 er Task');

fs.readFile('./Folder/First.Txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result + '1');
    console.log('Finto pour 1 er Task');

})
fs.readFile('./Folder/First.Txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result + '2');
    console.log('Finto pour 1 er Task(2)');

})

console.log('Debut 2 eme Task');




