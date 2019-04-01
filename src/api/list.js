// import axios from 'axios'
// url: 'http://121.40.29.234:9090/parameters?pageNo=' + pageNo + '&pageSize=' + app.pageSize,
import axios from '@/utils/http';
import base from'./base';

const DOMAIN = base.domain;

export function getList(params) {
    return axios.get(`${DOMAIN}parameters`,{ params })
}
export function addOneList(params) {
    return axios.post(`${DOMAIN}parameters`,params);
}
export function editOneList( params) {
    return axios.put(`${DOMAIN}parameters/${params.id}`,params);
}
export function delOne( params) {
    return axios.delete(`${DOMAIN}parameters/${params}`);
}
