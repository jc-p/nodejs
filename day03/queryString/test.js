/**
 * Created by web-01 on 2017/11/14.
 */

const queryString=require('querystring');

let string="q=mysql&k1=v1&k2=v2..";

console.log(queryString.parse(string));
console.log(queryString.stringify({ q: 'mysql', k1: 'v1', k2: 'v2..' }));