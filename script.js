const fs = require('fs');
const replacethis = "jonathan"
const replacewith = "kunda"
const preview = true

try{
    fs.readdir('data',(err, data) =>{
        console.log(data)
        for(let i=0; i< data.length; i++){
            const item = data[i];
            let newFile = "data/" + item.replaceAll(replacethis,replacewith)
            if(!preview){
                fs.rename('data/'+item, newFile,() =>{
                    console.log('rename file successfully')
                })
            }
            else{
                if("data/"+item !== newFile){
                    console.log('data/'+item+' wil be renamed to '+newFile)
                }
            }
            
        }
    })
}
catch(err){
    console.log(err)
}