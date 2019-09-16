import {observable as o, action as a} from 'mobx'
import {isAuthenticated,authenticateSuccess,logout} from '../utils/Session'

class AppStore {
    @o isLogin = !!isAuthenticated()  //利用cookie来判断用户是否登录，避免刷新页面后登录状态丢失
    @o users = []  //模拟用户数据库
    @o loginUser = {}  //当前登录用户信息

    @a
    toggleLogin(flag,info={}) {
        this.loginUser = info  //设置登录用户信息
        if (flag) {
            authenticateSuccess(info.username)
            this.isLogin = true
        } else {
            logout()
            this.isLogin = false
        }

    }
    @a
    initUsers() {
        const localUsers = localStorage['users']?JSON.parse(localStorage['users']):[]
        this.users = [{username: 'admin', password: 'admin'},...localUsers]
    }
}

export default new AppStore()