const baseUrl = ''

export default async (url='', data={}, type = 'GET' ) => {

  ({ type, url } = option(type, url, data))

  if (window.fetch ) {
    let requestConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: "cors",
      cache: "force-cache"
    }

    if (type == 'JSONP') {
      let r = await fetchJsonp(url, { jsonpCall: 'callback', })
        .then(r => r.json()).then(r => r)
        .catch(e => console.error('请求失败：' + e))
      return r
    }

    if (type == 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }

    try {
      const response = await fetch(url, requestConfig);
      const responseJson = await response.json();
      return responseJson
    } catch (error) {
      throw new Error(error)
    }
    
  } else {
    return xhr(type, data, url);
  }
}


function option(type, url, data) {
  type = type.toUpperCase();
  url = baseUrl + url;
  if (type == 'GET' || 'JSONP') {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }
  return { type, url };
}

function xhr(type, data, url) {
  return new Promise((resolve, reject) => {
    let requestObj;
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest();
    }
    else {
      requestObj = new ActiveXObject;
    }
    let sendData = '';
    if (type == 'POST') {
      sendData = JSON.stringify(data);
    }
    requestObj.open(type, url, true);
    requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    requestObj.send(sendData);
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState == 4) {
        if (requestObj.status == 200) {
          let obj = requestObj.response;
          if (typeof obj !== 'object') {
            obj = JSON.parse(obj);
          }
          resolve(obj);
        }
        else {
          reject(requestObj);
        }
      }
    };
  });
}

