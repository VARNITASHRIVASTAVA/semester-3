const fs=require("fs").promises;

    async function writeFile(){
        try{
            await fs.writeFile('promise.txt','hello ,I am Varnita Shrivastava');
            console.log('file created successfully');
        }catch(err){
            console.error("error",err);
        }
        }
    writeFile();
    async function readFile(){
        try{
            const data=await fs.readFile('promise.txt','utf8');
            console.log("file read successfully");
            console.log(data);
        }catch(err){
            console.error("error",err);
        }
    }
    readFile();
    async function appendFile(){
        try{
            await fs.appendFile('promise.txt','\nof CS-DS\'A\' Semester 3');
            console.log('file updated successfully');
        
        }catch(err){
            console.error("error",err);
        }}
    appendFile();
    async function writeFile1(){
        try{
            await fs.writeFile('promise_new.txt','hello ,I am Varnita Shrivastava');
            
        }catch(err){
            console.error("error",err);
        }
        }
    writeFile1();
    async function unlinkFile(){
        try{
            await fs.unlink('promise_new.txt');
            console.log('file deleted successfully');
        }catch(err){
            console.error("error",err);
        }
    }
    unlinkFile();
    
    async function renameFile(){
        try{
            await fs.rename('promise.txt','promise_renamed.txt');
            console.log('file renamed successfully');
        }catch(err){
            console.error("error",err);
        }
    }
renameFile();