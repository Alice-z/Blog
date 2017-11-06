var express = require('express')
var db = express.Router()
var fs=require('fs')
var path=require('path')
var Article = require('./database')
var resInfo=(res,doc,code=200)=>{
  res.json({code,doc})
}
var devData = () => {
  Article.find((err, doc) => fs.writeFile(
    path.join(__dirname, '..', '/src/db/result.json'), JSON.stringify(doc)))
}

db.post('/save', (req, res, next) => {
  var { info, title, sort } = req.body
  new Article({ title, info, sort }).save(err =>
    err ? resInfo(res, err, 0) : resInfo(res), devData()

  )
}
)
db.get('/find', (req, res, next) => {
  var { _id } = req.query
  _id ?
    Article.findOne({ _id }, (err, doc) => resInfo(res, doc)) :
    Article.find({}, (err, doc) => resInfo(res, doc))

})
db.get('/remove', (req, res, next) => {
  var { _id } = req.query
  Article.remove({ _id }, (err, doc) => resInfo(res), devData())
})


module.exports = db
