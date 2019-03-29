import {
    getList
} from '@/api/list'

const GET_LIST = 'GET_LIST'

const list = {
    namespaced: true,
    state: {
        resp: {},
    },
    mutations: {
        [GET_LIST](state,resp) {
            state.resp = resp
        },
    },
    actions: {
        // 用户登录
        getList({
            commit
        }, params) {
            return new Promise((resolve, reject) => {
                getList(params).then(resp => {
                    console.log('resp',resp);
                    commit(GET_LIST, resp)
                    return resolve()
                }).catch(err => {
                    return reject(err)
                })
            })
        },
        
    },
    getters: {
        list: state => state.resp.data && state.resp.data.list?state.resp.data.list:[],
        // token: state => state.token,
        // name: state => state.name,
        // age: state => state.age,
        // avatar: state => state.avatar,
        // permissions: state => state.permissions
    }
}

export default list