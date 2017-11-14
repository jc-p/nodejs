/**
 * Created by web-01 on 2017/11/14.
 */
const url = require('url');
let string='http://blog.csdn.net/zhaokaiqiang1992/article/details/41349819';

console.log(url.parse(string));
console.log(url.format(url.parse(string)));