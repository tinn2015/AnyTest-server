import {observable, action} from 'mobx'

class GlobalStore {
  @observable 
  isLogin = window.localStorage.getItem('token') ? true : false

  @action
  setLoginStatus (flag) {
    this.isLogin = flag
    if (!flag) {
      window.localStorage.removeItem('token')
    }
  }

}

export default new GlobalStore()