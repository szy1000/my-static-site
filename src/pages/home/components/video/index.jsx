import React, { useEffect, useRef } from 'react'
import { CountUp } from 'countup.js'
import './style.less'

const Video = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  useEffect(() => {
    var countUp1 = new CountUp(ref1.current, 10)
    var countUp2 = new CountUp(ref2.current, 40000)
    var countUp3 = new CountUp(ref3.current, 5000)
    var countUp4 = new CountUp(ref4.current, 100000)
    countUp1.start();
    countUp2.start();
    countUp3.start();
    countUp4.start();
  }, [])

  return (
    <div className='video'>
      <video src={require('./1.mp4')} muted autoPlay controls={false} />
      <div className='video-count'>
        <div className='container'>

          <div className='video-count-item'>
            <div className='video-count-item-num'>
              <span ref={ref1}></span>年
            </div>
            <div className='video-count-item-desc'>深耕金融及产业大数据领域</div>
          </div>

          <div className='video-count-item'>
            <div className='video-count-item-num'>
              <span ref={ref2}></span>+
            </div>
            <div className='video-count-item-desc'>产业细分节点</div>
          </div>

          <div className='video-count-item'>
            <div className='video-count-item-num'>
              <span ref={ref3}></span>+
            </div>
            <div className='video-count-item-desc'>可对接数据标准化产品节点</div>
          </div>

          <div className='video-count-item'>
            <div className='video-count-item-num'>
              <span ref={ref4}></span>+
            </div>
            <div className='video-count-item-desc'>上下游产业关系</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
