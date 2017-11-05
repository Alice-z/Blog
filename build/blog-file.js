var fs = require('fs')
var path = require('path')
var colors=require('colors')
var express = require('express');
var router = express.Router()
var _path = path.join(__dirname, '..', 'src/')
var time = new Date().toLocaleDateString().replace(/\//g,'-')

router.post('/creat', (req, res) => {
  var { title, info ,sort } = req.body

  var newPage = JSON.stringify({ info, title ,time,sort})

  var allPage = fs.readFileSync(_path + 'blog/article_data.js').toString()

   _allPage=allPage.substring(0,allPage.length-1)+','+newPage+'\n]'

  console.log('[Alice] Starting writeFile..'.yellow + '\n')

  fs.writeFile(_path + 'blog/article_data.js', _allPage, err => !err && console.log('> WriteBlog is successfully'.green))
  res.send({ msg: 'succ' })
}) 

router.post('/remove',(re,rq)=>{

  let info ='export default '+JSON.stringify(re.body)

  fs.writeFile(_path + 'blog/article_data.js', info, err => !err && console.log('> RemoveBlog is successfully'.green))

})


module.exports = router;