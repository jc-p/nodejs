/**
 * Created by web-01 on 2017/11/10.
 */
const fs=require("fs");

let out=fs.createWriteStream("out.log");
let err=fs.createWriteStream("err.log");

let logger= new console.Console(out,err);

logger.log('logger log..');
logger.error('logger err..');
