import {
    getList
} from '@/api/list'

const GET_LIST = 'GET_LIST'

const list = {
    state: {
        list: []
    },
    mutations: {
        [GET_LIST](list) {
            state.list = list
        },
    },
    actions: {
        // 用户登录
        getList({
            commit
        }, params) {
            return new Promise((resolve, reject) => {
                getList(params).then(resp => {
                    console.log(resp);
                    // return;
                    // commit(GET_LIST, resp)
                    return resolve()
                }).catch(err => {
                    return reject(err)
                })
            })
        },
      
    },
    getters: {
        // token: state => state.token,
        // name: state => state.name,
        // age: state => state.age,
        // avatar: state => state.avatar,
        // permissions: state => state.permissions
    }
}

export default list