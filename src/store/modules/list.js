import {
    getList,
    addOneList,
    editOneList,
    delOne
} from '@/api/list'

const GET_LIST = 'GET_LIST'
const EDIT_SUCCESS = 'EDIT_SUCCESS'

const list = {
    namespaced: true,
    state: {
        resp: {},
    },
    mutations: {
        [GET_LIST](state,resp) {
            state.resp = resp
        },
        [EDIT_SUCCESS](state,res) {
            state.resp.data.list.map((item)=>{
                if( item.id == res.id ){
                    item.pcode = res.paramCode
                    item.pname = res.paramName
                    item.sortNo = res.sortNo
                }
            })
        },
    },
    actions: {
        // 用户登录
        getList({
            commit
        }, params) {
            return new Promise((resolve, reject) => {
                getList(params).then(resp => {
                    commit(GET_LIST, resp)
                    return resolve()
                }).catch(err => {
                    return reject(err)
                })
            })
        },
        addOneList({},params){
            return new Promise((resolve)=>{
                addOneList(params).then(resp=>{
                    return resolve(resp.data&&resp.data.message?resp.data.message:'操作成功')
                })
            })
        },
        editOneList({commit},params){
            return new Promise((resolve)=>{
                editOneList(params).then(resp=>{
                    commit(EDIT_SUCCESS,params);
                    return resolve(resp.data&&resp.data.message?resp.data.message:'操作成功')
                })
            })
        },
        delOne({},params){
            return new Promise((resolve)=>{
                delOne(params).then(resp=>{
                    return resolve(resp.data&&resp.data.message?resp.data.message:'操作成功')
                })
            })
        },

    },
    getters: {
        list: state => state.resp.data && state.resp.data.list?state.resp.data.list:[],
        total: state => state.resp.data && state.resp.data.total?state.resp.data.total:0,
    }
}

export default list