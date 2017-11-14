/**
 * Created by web-01 on 2017/11/13.
 */
const queryString = require('querystring');//解析一个

let string='/search?q=nodejs&oq=nodejs&aqs=chrome..69i57j69i60l4j69i65.1870j0j4&sourceid=chrome&ie=UTF-8';
console.log(queryString.parse(string));
