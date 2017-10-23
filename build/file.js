var fs = require('fs')
var path = require('path')
var colors=require('colors')
var express = require('express');
var router = express.Router()
var _path = path.join(__dirname, '..', 'src/')
var time = require('../src/mixins/filter')

router.post('/creat', (req, res) => {
  var { title, info ,sort } = req.body

  var newPage = JSON.stringify({ info, title ,time,sort})

  var allPage = fs.readFileSync(_path + 'blog/article_data.js').toString()

   _allPage=allPage.substring(0,allPage.length-1)+','+newPage+'\n]'

  console.log('[Alice] Starting writeFile..'.yellow + '\n')

  fs.writeFile(_path + 'blog/article_data.js', _allPage, err => !err && console.log('> WriteBlog is successfully'.green))

  // var blogMap = fs.readFileSync(_path + 'router/blog.js').toString()

  // console.log('> Read BlogMap is successfully'.green + '\n')

  // var newBlogMap = blogMap.substring(0, blogMap.length - 1) + `,{	path: '/', component:_=> import('../blog/${title}') }\n]`

  // fs.writeFileSync(_path + 'router/blog.js', newBlogMap)

  // console.log('> Write BlogMap is successfully'.green + '\n')
  res.send({ msg: 'succ' })
}) 

router.post('/remove',(re,rq)=>{
  let info ='export default '+JSON.stringify(re.body)

  fs.writeFile(_path + 'blog/article_data.js', info, err => !err && console.log('> RemoveBlog is successfully'.green))
})

// function content(info){
//   return `<template>
//   <div class="info">
//   ${info}
//   </div>
//   </template>
  
//   <script>
//   import {nowTime} from '../mixins/filter'
//   export default {
//   data:_=>({time:nowTime()})
//   }
//   </script>
  
//   <style lang='less' scoped>
  
//   .info {
//   padding-bottom: 10px;
//   border-bottom: 2px solid #ccc
//   }
//   .mf{
//   margin-left: 30px;
//   }
//   </style>
//   `
// }

module.exports = router;