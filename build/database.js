var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',{useMongoClient:true})
mongoose.Promise = global.Promise; 
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


module.exports = mongoose.model('Article', articleSchema)
