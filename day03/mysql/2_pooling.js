/**
 * Created by web-01 on 2017/11/14.
 */
const mysql= require('mysql');

let pool=mysql.createPool({
    connectionLimit:10,
    user:'root'
});
pool.getConnection((err,connection)=>{
    if(err) throw err;
    let uname="'or' 'a'='a";
    let upwd="'or' 'a'='a";   //用？代替  +uname+  防止sql注入
    let sql='SELECT * FROM web1706a.stu WHERE unam=? AND upwd=?';
    connection.query(sql,[uname,upwd],(err,results,fieds)=>{
        if(err) throw err;
        console.log(results);
    })
    connection.release();//释放连接
})