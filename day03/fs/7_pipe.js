/**
 * Created by web-01 on 2017/11/14.
 */

const fs= require('fs');

let reader =fs.createReadStream(__filename);
let writer=fs.createWriteStream('./write.txt');

reader.pipe(writer);

reader.on('end',()=>{
    console.log('copy finish..');
});