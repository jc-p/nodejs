/**
 * Created by web-01 on 2017/11/13.
 */
const fs = require('fs');

// console.log(__dirname);
// console.log(__filename);

fs.readFile(__filename,(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
});