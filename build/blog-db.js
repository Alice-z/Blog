var express = require('express')
var db = express.Router()
var Article = require('./database')
var resInfo=(res,doc,code=200)=>{
  res.json({code,doc})
}

db.post('/save', (req, res, next) => {
  var {info,title,sort}=req.body
  new Article({ title, info, sort}).save(err =>
    err ? resInfo(res,err,0) : resInfo(res)
  )}
)
db.get('/find', (req, res, next) => {
  var  {_id}=req.query
  _id?
  Article.findOne({_id}, (err, doc) => resInfo(res, doc)):
  Article.find({}, (err, doc) => resInfo(res, doc))

})
db.get('/remove',(req,res,next)=>{
  var {_id}=req.query
  Article.remove({_id},(err,doc)=>resInfo(res) )
})


module.exports = db
