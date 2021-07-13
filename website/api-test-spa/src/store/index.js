import {observable, action} from 'mobx'

class GlobalStore {
  @observable 
  isLogin = window.localStorage.getItem('Authorization') ? true : false

  @action
  setLoginStatus (flag) {
    this.isLogin = flag
    if (!flag) {
      window.localStorage.removeItem('Authorization')
    }
  }

}

export default new GlobalStore()