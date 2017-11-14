/**
 * Created by web-01 on 2017/11/13.
 */
const  mysql=require('mysql');
// console.log(mysql);
let connection = mysql.createConnection({user:'root'});

connection.connect((err)=>{
    if(err) throw err;
    let sql='INSERT INTO web1706a.stu VALUES(NULL,?,?,?)';
    connection.query(sql,['1','2','3'],(err,results,fields)=>{
        if(err) throw err;
        console.log(results.affectedRows);
        console.log(results.insertId);
    })
});