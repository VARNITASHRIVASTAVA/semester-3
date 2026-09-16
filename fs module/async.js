const fs =require('fs');
//createfile
fs.writeFile('sample.txt','this is experiment no.2 in fsd workshop implemented by varnita shrivastava',(err)=>{
    if(err){
        console.log('error creating file:',err);
    return;}
    console.log('file created successfully');

})
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('error reading file',err);
        return;}
        if(data)
            {    
                 console.log('file read successfully');
                  console.log(data);
    }}

)
fs.appendFile('sample.txt','\nSemester 3',(err)=>{
    if(err){
        console.log('error uploading file',err)
        return;
    }else{
    console.log('\n file updated successfully');}
})
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('error reading file',err);
        return;}
        if(data)
            {    
                 console.log('file read successfully');
                  console.log(data);
    }})
    fs.writeFile('sample2.txt','this is experiment no.2 in fsd workshop implemented by varnita shrivastava',(err)=>{
    if(err){
        console.log('error creating file:',err);
    return;}
    console.log('file created successfully');

})

