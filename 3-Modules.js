const names=require('./name.js');
const funct=require('./function.js');

funct.Hello(names.Ahmed);
require('./6-pas_export_juste_invoke.js');//  ./ rod balk
require('./function');// travaille sans module.exports car require execute le fichier dont il transport Ndaaaaa