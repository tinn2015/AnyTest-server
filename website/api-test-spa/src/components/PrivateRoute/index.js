import { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import globalStore from '../../store/index'

class PrivateRoute extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log(this)
  }
  render () {
    const {...rest } = this.props
    const { isLogin } = globalStore.isLogin
    const Cmp = this.props.children
    console.log(isLogin, 'privateRouter')
    return (
      isLogin ? 
        <Route
          {...rest}
          render = {props => {
            return (<Cmp {...props} />)
          }}
        ></Route> :
        <Redirect to={{pathname: '/login'}}></Redirect>
    )
  }
}

export default PrivateRoute