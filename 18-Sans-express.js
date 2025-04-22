const http=require('http');
const fs=require('fs');
const HomePage=fs.readFileSync('./navbar-app/index.html');// sync pour faire tout avant d avancer ligne par ligne
const HomeStyle=fs.readFileSync('./navbar-app/styles.css');
const HomeLogo=fs.readFileSync('./navbar-app/logo.svg');
const HomeJS=fs.readFileSync('./navbar-app/browser-app.js');

const Server=http.createServer((req,res)=>{
    const url=req.url;
    if(url === '/'){
    res.writeHead(200,{"content-type":'text/html'}); // Entete qui est envoyé par le serveur avant le body pour specifier qcq caracteristique 
    res.write(HomePage);
    res.end();
    }
    else if(url === '/about'){
        res.writeHead(200,{"content-type":'text/html'}); // Entete qui est envoyé par le serveur avant le body pour specifier qcq caracteristique 
        res.write('<h1>About Page</h1>');
        res.end();
    }
    else if(url === '/styles.css'){
        res.writeHead(200,{"content-type":'text/css'}); // Entete qui est envoyé par le serveur avant le body pour specifier qcq caracteristique 
        res.write(HomeStyle);
        res.end();
    }
    else if(url === '/logo.svg'){
        res.writeHead(200,{"content-type":'image/svg+xml'}); // Entete qui est envoyé par le serveur avant le body pour specifier qcq caracteristique 
        res.write(HomeLogo);// hiya li katsard
        res.end();
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200,{"content-type":'text/javascript'}); // Entete qui est envoyé par le serveur avant le body pour specifier qcq caracteristique 
        res.write(HomeJS);
        res.end();
    }
    else{
        res.writeHead(404,{"content-type":'text/html'}); // Entete qui est envoyé par le serveur avant le body pour specifier qcq caracteristique 
        res.write('<h1> Ouups ! </h1>');
        res.write('<h2 > Not Found ! </h2>');
        res.write(`<a href='/'>Home Page</h1>`);// hna rod balk \ hadi daroriya for scape '    Ndaaa
        res.end();
    
    }
   
})
Server.listen(3000);