// CRUD - Create Read Update Delete Rename in nodejs
// this tutorial teachers us about CRUD operations
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/crudoperations.txt`;

fs.writeFileSync(filePath,'This is a simple text file');

//read operation
// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// })

// update operation
// fs.appendFile(filePath,'and file is appended',(err)=>{
//     if(!err){
//     console.log('file is updated');
//     }
// });

// rename file operation
// fs.rename(filePath,`${dirPath}/fruits.txt`,(err)=>{
//     if(!err){
//         console.log('file is renamed');
//     }
// });

// delete operation
// fs.unlinkSync(`${dirPath}/fruits.txt`);
