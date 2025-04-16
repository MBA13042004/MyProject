// __dirname → chemin du ((dossier)) actuel
console.log('__dirname :', __dirname);

// __filename → chemin ((complet)) du fichier fyn kyn nta 
console.log('__filename :', __filename);

// require → importer un module (exemple avec 'fs' = File System) fs --- Lire/Ecrie/Crere des fichiers
const fs = require('fs');
console.log('require : module fs chargé');

// module → informations sur le module courant
console.log('module :', module);

// process → infos sur le système d’exécution
console.log('process.platform :', process.platform);
console.log('process.env :', process.env);