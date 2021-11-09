import React from 'react'
import './style.less'
// import { Link } from "../../components/Router";


const Banner = (props = {}) => {
  const { title, bg, moreText, moreUrl, pic, style, className } = props
  return (
    <div
      className={className + ' banner'}
      style={{
        backgroundImage: `url(${bg})`,
        ...style
      }}>
      <div className='banner-wrapper container'>
        <div className='banner-aside'>
          <h2 className='banner-aside-title'>{title}</h2>
          {
            moreUrl && <a href={moreUrl} className='banner-aside-more'>
              {moreText}
              <div className='icon' />
            </a>
          }
        </div>
        <div>
          <img src={pic} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner
