import axios from 'axios'

let basUrl = ''
/**
 * 
 * @param {string} url 请求的路径  
 * @param {object} data  请求的参数
 * @param {string} method  请求的类型
 */
export default async function (url='', data={}, method = 'GET') {

  try {
    if (method == 'GET') {
      url = basUrl + url
      let dataStr = ''
      Object.keys(data).forEach(key => dataStr += key + '=' + data[key] + '&')
      dataStr= dataStr.substring(0,dataStr.length-1)
      url = url + '?' + dataStr
    }

    let rssult = await axios({
      url,
      data,
      method
    })

  } catch (err) {
    console.error(err);
  }
}
