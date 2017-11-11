
var fs = require('fs');
var path = require('path');
var colors = require('colors')
var fileList = []
var pathList = []
// var filePath = process.cwd()
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
// fileDisplay()

/** 
 * 文件遍历方法 
 * @param filePath 需要遍历的文件路径 
 */
function fileDisplay(filePath) {
	//监听目标文件夹
	watch(filePath)
	//根据文件路径读取文件，返回文件列表  
	fs.readdir(filePath, (err, files) => {
		if (err) {
			console.warn(err)
		} else {
			//遍历读取到的文件列表  
			files.forEach((filename) => {
				//获取当前文件的绝对路径  
				var filedir = path.join(filePath, filename);
				//根据文件路径获取文件信息，返回一个fs.Stats对象  
				fs.stat(filedir, (eror, stats) => {
					eror ? console.warn('获取文件stats失败') :
					stats.isFile() ? save(filename, filedir) :
					stats.isDirectory() && fileDisplay(filedir)//递归，如果是文件夹，就继续遍历该文件夹下面的文件 	
				})
			});
		}
	})
	console.log('> Watching: '.green +resolve('src').gray);
}


function watch(filePath) {
	fs.watch(filePath, (event, filename) => {
		filedir = path.resolve(filePath, filename)
		fs.stat(filedir, (err, stats) => {
			if (stats) {
				event == 'rename' && stats.isDirectory() ?
				(watch(filedir) /* , console.log('creatd a Directory: '.bgBlue + filename.gray + '\n') */):
				event=='rename' && stats.isFile()?
				(save(filename,filedir) /* , console.log('created a file :'.bgBlue+' '+filename.gray+'\n') */):''
			} else{
				console.log('delete :'.bgRed + ' ' + filename.gray + '\n');
				delet(filename,filedir)
			}
		})
		console.log('Change :  '.green + filename.gray)
		console.log('This path is ：'.yellow + filedir.gray + '\n');
	})
}

function save(filename, filedir) {
	fileList.push(filename.replace(/\.js$/, ''))
	pathList.push(filedir.replace(/(\.js$|\/Users\/joy\/hot\/)/g, ''))
	fs.writeFile(resolve('/static/fileList.json'), JSON.stringify(fileList), err => err)
	fs.writeFile(resolve('/static/pathList.json'), JSON.stringify(pathList), err => err)
}
function delet(filename, filedir) {
	fileList.map((r,k)=>{
		console.log(r,k);
		r==filename.replace(/\.js$/, '')&&fileList.splice(k,1)
	} )
	pathList.map((r,k)=>r==filedir.replace(/(\.js$|\/Users\/joy\/hot\/)/g, '')&&pathList.splice(k,1) )
	console.log(fileList);
	fs.writeFile(resolve('/static/fileList.json'), JSON.stringify(fileList), err => err)
	fs.writeFile(resolve('/static/pathList.json'), JSON.stringify(pathList), err => err)
}
module.exports=fileDisplay