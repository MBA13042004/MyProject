const path=require('path');
console.log(path.sep);  // \ ou / comme separateur
const filepath=path.join('Folder','SubFolder1','SubFolder2','Test.txt');// ghaytklfli b chemin 
console.log(filepath);
console.log(path.basename(filepath));// GARE FINAL TANGER AL MADINA HHHHHHHHHHHH
console.log( path.resolve(__dirname,'Folder','SubFolder1','SubFolder2','Test.txt'));// path Absolue