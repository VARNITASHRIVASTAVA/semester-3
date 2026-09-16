const EventEmitter =require('events');
const myEmitter=new EventEmitter();
myEmitter.on('greet',(name)=>{
    console.log(`Hello,${name}! Welcome to node.js`);});
myEmitter.on('exit',()=>{
    console.log("Application closed");});
myEmitter.emit('greet', '2nd year');
myEmitter.emit('exit');