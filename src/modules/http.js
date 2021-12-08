import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

/**
 * axios
 */
function request(url, params, method) {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: method,
            data: method === 'POST' ? params : null,
            params: method === 'GET' ? params : null
            
        }).then(res => {
            // console.log(res)
            if (res.status == 200) {
                resolve(res.data)
            } else {
                reject(res.statusText)
            }
        }, err => {
            reject(err)
        })
    })
}

/**
 * get
 */
 function get(url, params) {
    return request(url, params, "GET")
}

/**
 * post
 */
function post(url, params) {
    return request(url, params, "POST")
}

export default {
    Get: get,
    Post: post
}