import {observable, action} from 'mobx'

class GlobalStore {
  isLogin = observable({

  })

  setLoginStatus (flag) {
    this.isLogin = flag
    if (!flag) {
      window.localStorage.removeItem('token')
    }
  }

  action(this.setLoginStatus)
}

export default new GlobalStore()