var express = require('express');
var router = express.Router();
const pg = require("pg");

// var list = {

// }
var pgdb = new pg.Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'suhuijun',
  password: '147852369',
  database: 'ACG'
})
// const pool = new pg.Pool(pgConfig);
/* GET home page. */
router.get('/',function(req,res,next){
  pgdb.connect((error, client, done)=>{
    let sqlStr = 'SELECT * FROM users';
    client.query(sqlStr, [],(err, response) => {
        done();
        if(response.rowCount<=0){
          res,json({
            status:-1,
            data:''
          })
        }else{
          res.end({status:0,data:response.rowCount});
        }
        
      })
  })
});
module.exports = router;
