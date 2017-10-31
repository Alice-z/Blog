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
  var  title=req.query.title
  title?
  Article.find({title}, (err, doc) => resInfo(res, doc)):
  Article.find({}, (err, doc) => resInfo(res, doc))

})


module.exports = db
