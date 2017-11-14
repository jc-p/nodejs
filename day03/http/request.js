/**
 * Created by web-01 on 2017/11/14.
 */

const http=require('http');
let ip='61.144.196.254';
let options={
    host:"ip.taobao.com",
    path:'/service/getIpInfo.php?ip='+ip
}
let request= http.request(options,(res)=>{
    res.on('data',(result)=>{
        console.log(JSON.parse(result.toString()));
    })
})
request.end();