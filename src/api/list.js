// import axios from 'axios'
// url: 'http://121.40.29.234:9090/parameters?pageNo=' + pageNo + '&pageSize=' + app.pageSize,
import axios from '@/utils/http';
import base from'./base';

const DOMAIN = base.domain;

export function getList(params) {
    console.log('params---',params);
    return axios.get(`${DOMAIN}parameters`,{ params })
}
