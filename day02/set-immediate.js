/**
 * Created by web-01 on 2017/11/13.
 */

console.log('start...');
process.nextTick(()=>{
    console.log('process nextTick..');  //当前队列的最后
});
setImmediate(()=>{
    console.log('set immediate');
});


console.log('end....');
