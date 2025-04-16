const os=require('os');
const user=os.userInfo();// userinfo() c est une function non Attribut
console.log(user);
console.log(os.uptime()/3600);// chhak bach ch3al en h
const Infos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(Infos);