import React from 'react'
import Banner from "../../components/banner";
import Panel from "../../components/panel";
import './style.less'

const Ability = () => (
  <div className='ability'>
    {/*<Banner*/}
    {/*  bg={require('./images/banner.png')}*/}
    {/*  moreText='申请试用'*/}
    {/*  moreUrl='/'*/}
    {/*  title='中国数据科技领军企业'*/}
    {/*  pic={require('./images/ban-picl1.png')}*/}
    {/*/>*/}
    <div className='container'>
      <Panel
        title='结构化数据量产'
        subTitle='数据提取、清洗、标准化、质检等流程无缝衔接，形成高度自动化处理能力'
      >
        <p>React Static is a progressive static site generator for React.</p>
      </Panel>
    </div>
  </div>
)


export default Ability
