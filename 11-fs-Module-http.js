const http=require('http');
const Server =http.createServer((req,res)=>{
    if(req.url === '/'){res.end('This is a Home Page !!');
        console.log('Home');
    } // '/' home
    else if(req.url === '/about'){
        res.end('This is a About Page ck !!');
        console.log('About');
        // '/about' page about 
    }
    else{
        res.end(`
            <h1>Oups</h1><br>
            <p> HADCHI MA3NDNACH F Site LIL2ASSAF</p>
            <a href='/'>Back to Home</a>`);
        console.log('haja khra');

    
    }

})
Server.listen(5000,()=>{
    console.log('Server liseting At Port = 5000.....');
    
});
