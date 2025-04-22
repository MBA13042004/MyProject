const fs=require('fs');

const getText=(path) =>{
return new Promise((resolve, reject) => {
    fs.readFile(path,'utf8',(err,data)=>{
        if (err){
        reject(err);
        }
        resolve(data);
    })    
})
}

//getText('./Folder/First.Txt').then(val=>console.log(val)).catch(val=>console.log(val));

const start = async () => {
    try{
        const first =await getText('./Folder/First.Txt'); // j attend ca (await)
        const Second =await getText('./Folder/Second.Txt'); // j attend ca (await)
        console.log(first,Second);
    }catch(error){
        console.log(error);
    }
    

}
start();