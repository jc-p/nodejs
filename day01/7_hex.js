/**
 * Created by web-01 on 2017/11/10.
 */
let buffer= Buffer.from([16,15,14]);
console.log(buffer);

let buf=Buffer.alloc(4);
console.log(buf);

let buff1= new Buffer(8);
let s1="AA";
let s2="BB";
buff1.write(s1);
buff1.write(s2,3);
console.log(buff1);


console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('binary'));
console.log(Buffer.isEncoding('ascii'));
console.log(Buffer.isEncoding('hex'));
console.log(Buffer.isEncoding('base64'));

let buff2= Buffer.from("你好");
console.log(buff2.toString('base64'));

console.log(buff2.length);

for(let i=0;i<buff1.length;i++){
    console.log(buff1[i]);
}
for(let i of buff2){
    console.log(i);
}
