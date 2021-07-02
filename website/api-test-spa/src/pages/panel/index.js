import {Component} from 'react'
import { Tag } from 'antd';
import { getRandomColor } from '../../utils'

import './index.css'

class Panel extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div className="title text-center">前后端接口测试</div>
          <ul className="mt40">
            <li><Tag className="ft24 my-tag text-center" color={getRandomColor()}>跨域请求</Tag></li>
          </ul>
      </div>
    )
  }
}

export default Panel