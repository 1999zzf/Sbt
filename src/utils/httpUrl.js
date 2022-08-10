import axios from 'axios';
axios.default.timeout = 50000;
// axios.defaults.withCredentials = true
// 接口模板
// that.$post("", {
// }).then(function (data) {
// console.log(data);
// });


//post方法
export function post(url, data = {}) {
  
  return new Promise((resolve) => {
    const loading = this.$loading({
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(255,255,255,0)',
    });
    axios({
        method: "post",
        // url: '/api/' + url,
        url: localStorage.getItem("basicHost")+url,
        // url: "http://192.168.1.106:8090/"+url,
        data: data,
        transformRequest: [
          function (oldData) {
            let newStr = '';
            for (let item in oldData) {
              newStr += encodeURIComponent(item) + '=' + encodeURIComponent(oldData[item]) + '&'
            }
            newStr = newStr.slice(0, -1);
            return newStr 
          }
        ],
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8',
        }
      })
      .then(response => {
        loading.close();
        if (response.data) {
          resolve(response.data);
        }
      })
      .catch(err => {
        loading.close();
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误(400)';
              break;
            case 401:
              err.message = '未授权，请重新登录(401)';
              break;
            case 403:
              err.message = '拒绝访问(403)';
              break;
            case 404:
              err.message = '请求出错(404)';
              break;
            case 408:
              err.message = '请求超时(408)';
              break;
            case 500:
              err.message = '服务器错误(500)';
              break;
            case 501:
              err.message = '服务未实现(501)';
              break;
            case 502:
              err.message = '网络错误(502)';
              break;
            case 503:
              err.message = '服务不可用(503)';
              break;
            case 504:
              err.message = '网络超时(504)';
              break;
            case 505:
              err.message = 'HTTP版本不受支持(505)';
              break;
            default:
              err.message = `连接出错(${err.response.status})!`;
          }
          
        } else {
          err.message = '连接服务器失败'+localStorage.getItem("basicHost")+url+''
        }
        this.$message.error(err.message);
      })
  })
}

//post2方法
export function post2(url, data = {}) {
  
  return new Promise((resolve) => {
    const loading = this.$loading({
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(255,255,255,0)',
    });
    axios({
        method: "post",
        url:  url,
        // url: url,
        data: data,
        transformRequest: [
          function (oldData) {
            let newStr = '';
            for (let item in oldData) {
              newStr += encodeURIComponent(item) + '=' + encodeURIComponent(oldData[item]) + '&'
            }
            newStr = newStr.slice(0, -1);
            return newStr 
          }
        ],
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8',
        }
      })
      .then(response => {
        loading.close();
        if (response.data) {
          resolve(response.data);
        }
      })
      .catch(err => {
        loading.close();
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误(400)';
              break;
            case 401:
              err.message = '未授权，请重新登录(401)';
              break;
            case 403:
              err.message = '拒绝访问(403)';
              break;
            case 404:
              err.message = '请求出错(404)';
              break;
            case 408:
              err.message = '请求超时(408)';
              break;
            case 500:
              err.message = '服务器错误(500)';
              break;
            case 501:
              err.message = '服务未实现(501)';
              break;
            case 502:
              err.message = '网络错误(502)';
              break;
            case 503:
              err.message = '服务不可用(503)';
              break;
            case 504:
              err.message = '网络超时(504)';
              break;
            case 505:
              err.message = 'HTTP版本不受支持(505)';
              break;
            default:
              err.message = `连接出错(${err.response.status})!`;
          }
          
        } else {
          err.message = '连接服务器失败!'
        }
        this.$message.error(err.message);
      })
  })
}

