/**
 * Created by web-01 on 2017/11/14.
 */

const http=require("http");

let server = http.createServer((req,res)=>{
    // res.end('server test ...');
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);
    res.end('test')
})

server.listen(8081);