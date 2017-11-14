/**
 * Created by web-01 on 2017/11/13.
 */
console.log('start');

process.nextTick(()=>{
    console.log('next tick');
});
console.log('end....');
