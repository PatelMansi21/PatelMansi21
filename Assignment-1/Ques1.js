const http=require('http');
const fs=require('fs');

const server =http.createServer((req,res)=>{
        if(req.url=="/home" && req.method === 'POST')
        {
                let body='';
                req.on('data',chunk=>{
                        body+=chunk.toString();
                })
                req.on('end',()=>{
                        console.log(body);
                        res.end(body);
                })
        }
        else if(req.url=="/form1.html" && req.method=== 'GET')
        {
                var filename="./files/form1.html";
                fs.readFile(filename,function(err,data){
                        if(err){
                                res.writeHead(404,{'Content-Type':'text/html'});
                                console.log(err.message);
                                return res.end("404 Not Found");
                        }
                        else{
                                res.writeHead(200,{'Content-Type':'text/html'});
                                res.write(data);
                                return res.end();
                        }
                        
                })
        }
        else{
                res.write("not allowed to access");
                return res.end();
        }
});
server.listen(8000);
console.log("Server is listening on port number 8000");