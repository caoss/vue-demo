// import axios from 'axios'
import axios from '@/utils/http';

const DOMAIN = 'http://121.40.29.234:9090/';

export function login(userInfo) {
    //   return axios.post(`/login/login`, userInfo)
    return axios.post(`${DOMAIN}login`, userInfo)
}

export function userInfo() {
    return axios.post('/user/getInfo')
}

export function logout() {
    return axios.post('/login/logout')
}