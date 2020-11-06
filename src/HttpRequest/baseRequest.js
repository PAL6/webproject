import axios from 'axios'

//基础地址
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/';
//请求时长
axios.defaults.timeout = 5000;
//配置token
let token;

if (localStorage.getItem('token') != null) {
    token = localStorage.getItem('token').substring(7);
} else {
    token = null;
}

axios.defaults.headers['authorization'] = `Bearer ${token}`

//get请求封装
export function getMethod(url, params = {}) {
    return new Promise(function (resolve, reject) {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    });
}

//post请求封装
export function postMethod(url, params = {}) {
    return new Promise(function (resolve, reject) {
        axios.post(url, params).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    });
}

//put请求封装
export function putMethod(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.put(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}