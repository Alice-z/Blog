import axios from 'axios'

let basUrl = ''

export default async function (url, data, method = 'GET') {

  try {
    if (method == 'GET') {
      url = basUrl + url
      let dataStr = ''
      Object.keys(data).forEach(key => dataStr += key + '=' + data[key] + '&')
      url = url + '?' + dataStr
    }

    let rssult = await axios({
      url,
      data,
      method
    })

  } catch (err) {

    console.log(err);
  }
}
