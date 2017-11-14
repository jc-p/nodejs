/**
 * Created by web-01 on 2017/11/10.
 */
console.log("12312313");
const http=require("http");
let serv =http.createServer((req,res)=>{
        res.write("hello ");
        res.end("test...");
    }

);
serv.listen("3000");