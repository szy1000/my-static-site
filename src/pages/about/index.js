import React from 'react'
import Banner from "../../components/banner";


const About = () => (
  <div>
    <Banner
      bg={require('./images/banner.png')}
      moreText='申请试用'
      moreUrl='/'
      title='中国数据科技领军企业'
      pic={require('./images/ban-picl1.png')}
    />

    <p>React Static is a progressive static site generator for React.</p>
  </div>
)


export default About
