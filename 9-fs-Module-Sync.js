const{ readFileSync,writeFileSync}=require('fs');

console.log('Avant la lecture');

const First=readFileSync('./Folder/First.Txt','utf8');
const Second=readFileSync('./Folder/Second.Txt','utf8');
console.log(First,Second);

console.log('Après la lecture');

writeFileSync('./Folder/Result_Sync.Txt',`this is the result : ${First} , ${Second}`,{flag:'a'});// flag a pour ajouter a la fin

console.log('doz doz');// la maghaydozch hna
