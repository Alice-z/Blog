var express = require('express')
var router = express.Router()
var Model = require('./database')

var responseData
router.use((req, res, next)=>{
  responseData = {
    code: 0,
    message: ''
  }
  next()
})

router.get('/find_sort', (req, res, next)=>{
  Model.Category.find().then(doc=>{
    responseData.code = 200
    responseData.message = '查找所有分类成功'
    responseData.data = doc
    res.json(responseData)
  })
})

// 查找单个分类的数据
router.get('/index_article_category', (req, res, next)=>{
  var categoryy = req.query.category
  console.log('单个分类名为:' + categoryy)
  var newData = {'category': categoryy}

  var page = Number(req.query.page || 1)
  var limit = 4
  var pages = 0
  Model.Article.count(newData).then(count=>{
    pages = Math.ceil(count/limit) //总数据除以每页限制数据=页数
    page = Math.min(page,pages)
    page = Math.max(page,1)
    var skip = (page-1)*limit

    Model.Article.find(newData).sort({_id: -1}).limit(limit).skip(skip).then(doc=>{
      console.log(doc)
        responseData.code = 200
        responseData.message = '查找单个分类数据成功'
        responseData.data = doc
        responseData.count = count
        responseData.limit = limit
        responseData.page = page
        responseData.pages = pages
        responseData.skip = skip
        console.log(responseData)
        res.json(responseData)
    })
  })
})

// 查找所有文章
router.get('/index_article', (req, res, next)=>{
  var page = Number(req.query.page || 1)
  var limit = 4
  var pages = 0
  Model.Article.count().then(count=>{
    pages = Math.ceil(count/limit) //总数据除以每页限制数据=页数
    page = Math.min(page,pages)
    page = Math.max(page,1)
    var skip = (page-1)*limit

    Model.Article.find({}).sort({_id: -1}).limit(limit).skip(skip).then(doc=>{
      console.log(doc)
        responseData.code = 200
        responseData.message = '查找所有文章成功'
        responseData.data = doc
        responseData.count = count
        responseData.limit = limit
        responseData.page = page
        responseData.pages = pages
        responseData.skip = skip
        console.log(responseData)
        res.json(responseData)
    })
  })
})

//文章详情
router.get('/index_detail', (req, res, next)=>{
  var _id= req.query._id
  console.log(_id)
  Model.Article.findOne({_id: _id}, function(err, doc){
    if(err){
      console.log(err)
      return
    }else{
      doc.views++
      doc.save()
      responseData.code = 200
      responseData.message = '查找一篇文章成功'
      responseData.data = doc
      console.log(responseData)
      res.json(responseData)
    }
  })
})



  Model.Article.findOne({_id: _id}, function(err, doc){
   
})


module.exports = router
