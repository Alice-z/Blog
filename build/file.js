var fs = require('fs')
var path = require('path')
var colors=require('colors')
var express = require('express');
var router = express.Router()
var _path = path.join(__dirname, '..', 'src/')

router.post('/creat', (req, res) => {
  var { title, info } = req.body

  var newPage = JSON.stringify({ info, title ,time})

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

router.post('/upload',(re,rq)=>{
  console.log('upload');
})

Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
var time=()=> new Date().Format("yyyy-MM-dd");
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