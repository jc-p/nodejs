/**
 * Created by web-01 on 2017/11/10.
 */

console.log(`log..`);
console.info(`info..`);
console.warn(`warn..`);
console.error(`error..`);
console.trace(`some Msg`);


// let data = {id:3, count:0,list:[]};
// console.dir(data);
// // console.assert(data.count>0,"acount...");
// console.assert(data.list.length>0,"no data in list");

console.time("long-loop");
for(let i=0;i<1000;i++){
     console.log(i);

}
console.timeEnd("long-loop");