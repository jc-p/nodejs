/**
 * Created by web-01 on 2017/11/14.
 */
const fs = require('fs');
const path = require('path');


fs.mkdir(path.join(__dirname,'text'),(err)=>{
    if(err) throw err;
});

