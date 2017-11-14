/**
 * Created by web-01 on 2017/11/14.
 */
const path=require('path');

console.log(path.normalize('/test1//test2'));
console.log(path.join(__dirname,'../test/test2','test3/test4'));
