const fs =require('fs');
//createfile
fs.writeFileSync('SecAstudent.txt','this is experiment no.2 in fsd workshop implemented by varnita shrivastava','utf8');
console.log('File written successfully');
const read=fs.readFileSync('SecAstudent.txt','utf8');
console.log('File content is: ',read);
fs.appendFileSync('SecAstudent.txt','\nThis is the appended text.','utf8');
//append file
console.log('File appended successfully');
//folder created
fs.mkdirSync('sample folder1');
console.log('Folder created successfully');
//to check existence of file
if(fs.existsSync('SecAstudent.txt')){
    console.log('File exists');
} else {
    console.log('File does not exist');
}
//fs.unlinkSync('8sept.txt');console.log('File deleted successfully'); to delete file