const fs=require('fs');
const stream1=fs.createReadStream('./Folder/big.Txt',{ HighWaterMark:100000 })
const stream2=fs.createWriteStream('./Folder/createWriteStream.Txt');
stream1.on('data',(triyef)=>{
    console.log(triyef)// Lire Ndaaaaa triyef par default fih 64Kb
});
stream1.on('end', () => {
    console.log('Lecture terminée ');
  });
  
  stream1.on('error', (err) => {
    console.error('Erreur pendant la lecture :', err);
  });
  stream2.write('Ligne1\n');// Ecrire Ndaaaaa
  stream1.pipe(stream2);//source.pipe(Destination)  Ndaa
