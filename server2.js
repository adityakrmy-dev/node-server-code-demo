const http = require('http');

const PORT=8080;
let student = [
    
{
    "id":1,
    "name":"Aditya",
    "Email":"aditya@gmail.com",
    "Class":"B.Tech"

},
{
    "id":2,
    "name":"Akash",
    "Email":"akash@gmail.com",
    "Class":"Batchalor"

},
{
    "id":3,
    "name":"abhishek",
    "Email":"abhishek@gmail.com",
    "Class":"ITI"

}

];
const server = http.createServer((request,response)=>{

console.log(student);
response.writeHead(200,{"Content-Type":"application/json"});
response.write(JSON.stringify(student)); //method used to write string value response to browser
response.end();
});

server.listen(PORT,()=>{
console.log('Servre Started ='+PORT);
});