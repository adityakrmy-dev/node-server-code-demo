require('http').createServer((rq,rs)=>{
    rs.write("<h1>Hello Baccho</h1> <br/>  <h2>Kya Hall Chall!</h2>")
    rs.end();
}).listen(8080,function(){
    console.log("Server Started");
})