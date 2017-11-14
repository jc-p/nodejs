/**
 * Created by web-01 on 2017/11/14.
 */
const fs = require('fs');

fs.stat(__filename,(err,stat)=>{
    if(err) throw err;
    console.log(stat);
    console.log(stat.isFile());
})