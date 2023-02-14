# nodejs-code
```
require('http').createServer((rq,rs)=>{
    rs.write("<h1>Hello Baccho</h1> <br/>  <h2>Kya Hall Chall!</h2>")
    rs.end();
}).listen(8080,function(){
    console.log("Server Started");
})
```


demo screenshot


![image](https://user-images.githubusercontent.com/118324582/218648528-14a2d738-2ba9-4021-9fcf-2673105ba4b6.png)
