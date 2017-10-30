var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test93');
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


Model = {
  // User: mongoose.model('User', usersSchema),
  // Category: mongoose.model('Category', categorySchema),
  Article: mongoose.model('Article', articleSchema)
}
module.exports = Model
