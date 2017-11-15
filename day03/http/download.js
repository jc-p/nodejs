/**
 * Created by web-01 on 2017/11/14.
 */

const http= require('http');
const fs= require('fs');

let options={
    host:'pdf7.tarena.com.cn',
    path:'/tts8_source/ttsPage/WEB/WEB_N_V03/NODEJS-N/DAY02/COURSE/15_V01NODEJSDAY02_034.png',
    header:{'User-Agent':'Mozilla/5.0'}
};

let request =http.request(options,(res)=>{
    let data='';


    res.on('data',(buffer)=>{
        console.log(buffer);
       data += buffer;
    });
    res.on('end',()=>{
        fs.writeFile('./ok.jpg',data,(err)=>{
            if(err) throw err;
        });
    })
});

request.end();
