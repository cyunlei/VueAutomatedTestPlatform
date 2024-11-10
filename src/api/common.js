import axios from 'axios'
axios.defaults.withCredentials=true;


//测试环境
const host = "http://127.0.0.1:8081/"

export const fileUrl = host

export const getRequest = function(path, data={}) {
    return axios.get(host + path, {
        params: data,
        withCredentials: true
    })
};



export const postRequest = function(path, data={}) {
    return axios.post(host + path, data)
};

export const putRequest = function(path, data={}) {
    data["withCredentials"] = true
    return axios.put(host + path, data)
};

export const deleteRequest = function(path, data={}) {
    data["withCredentials"] = true
    return axios.delete(host + path, data)
};

export const patch_request = function(path, data={}) {
    data["withCredentials"] = true
    axios.patch(host + path, data)
};