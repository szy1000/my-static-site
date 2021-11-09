import React from 'react'
import Banner from "../components/banner";
import Test from './index'
import './home/style.less'

export default () => (
  <div>
    <Banner
      bg={require('./home/word.png')}
      className='index-banner'
      title='中国数据科技领军企业'
      moreText='了解更多'
      moreUrl='/'
      // style={}
    />
    {/*<Test />*/}
    <h1>Welcome to React-Static</h1>
  </div>
)
