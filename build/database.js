var mongoose = require('mongoose');

var db=mongoose.connect('mongodb://localhost:27017/test93');
// 文章
var articleSchema = new mongoose.Schema({
  info: String,
  title: String,
  sort:String,
  time: {
    type: String,
    default: Date.now()
  }
});


db.on('open',(err)=>{
  console.log('连接数据库成功');
})

module.exports = mongoose.model('Article', articleSchema)
