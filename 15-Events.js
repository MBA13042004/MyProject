/*
const events=require('events');
const Myevent =new events();
Myevent.on('response',(name,id)=>{
    console.log(`DATA RECEIVED : User : ${name} , id : ${id}`)
})
Myevent.on('response',(name,age)=>{
    console.log(`DATA RECEIVED : User : ${name} , age : ${age}`)
})
Myevent.emit('response','Mosab',13);// katkhadmem bzaaaaf
*/

//-----------------------------Http
const http=require('http');
const Server=http.createServer();
Server.on('request',(req,res)=>{
    res.end('Welcome');
    console.log('Welcome');
})
Server.listen(5000);
// ici le .emit est appeler Automatiqyement par le node.js
