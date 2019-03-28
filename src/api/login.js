// import axios from 'axios'
import axios from '@/utils/http';

import base from'./base';

const DOMAIN = base.domain;

export function login(userInfo) {
    return axios.post(`${DOMAIN}login`, userInfo)
}

export function userInfo() {
    return axios.post('/user/getInfo')
}

export function logout() {
    return axios.post('/login/logout')
}