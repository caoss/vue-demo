// import Mock from 'mockjs'
import {
    userMap
} from './user'

function login(userInfo) {
    // console.log('userInfo',userInfo);
    // userInfo{
    //     body: "{"username":"admin","pwd":"123456"}"
    //     type: "POST"
    //     url: "/login/login"
    // }
    let {
        username
    } = JSON.parse(userInfo.body)
    return userMap[username]
}

function logout() {
    return 'success'
}

export {
    login,
    logout
}