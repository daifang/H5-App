var express = require('express');
var router = express.Router();
const pg = require('pg');

// var list = {

// }
var pgdb = new pg.Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'suhuijun',
  password: '147852369',
  database: 'ACG'
})
/* GET home page. */

router.get('/',function(req,res,next){
  let sql = 'SELECT userid,username FROM users';
  let ret = pgdb.query(sql);
  if(ret.rowCount <=0 ){
    res.end({status:-1});
  }else{
    res.end({status:0,data:ret.rows});
  }
})

module.exports = router;