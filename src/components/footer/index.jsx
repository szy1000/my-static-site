import React from 'react';
import { Link } from "../Router";
import './style.less'


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="foot">
          <div className="item">
            <h3 className="tit">核心能力</h3>
            <div className="box">
              <div>
                <a href="">结构化数据产量</a>
                <a href="">精准实时资讯解析</a>
                <a href="">全产业链数据框架</a>
              </div>
            </div>
          </div>
          <div className="item">
            <h3 className="tit">产品</h3>
            <div className="box two">
              <div>
                <a href="">企业图谱及分层分类标签体系</a>
                <a href="">产业链图谱</a>
                <a href="">资讯及智能标签</a>
                <a href="">数据定制</a>
                <a href="">新闻资讯系统</a>
              </div>
              <div>
                <a href="">产业链运维系统</a>
                <a href="">DAS自动化数据生产系统</a>
                <a href="">锐控风险预警系统</a>
                <a href="">定制化开发</a>
                <a href="">数据治理服务</a>
              </div>
            </div>
          </div>
          <div className="item">
            <h3 className="tit">解决方案</h3>
            <div className="box">
              <a href="">银行方案/ADA</a>
              <a href="">区域产业数字化平台</a>
              <a href="">量化方案</a>
              <a href="">券商方案</a>
            </div>
          </div>
          <div className="item">
            <h3 className="tit">公司</h3>
            <div className="box">
              <a href="企业洞察.html">企业洞察</a>
              <a href="新闻.html">新闻</a>
              <a href="招贤纳士.html">加入我们</a>
              <a href="关于数库.html">关于数库</a>
            </div>
          </div>
        </div>
        <div className="addr">
          <div className="ll">
            <div className="tel"><i></i>电话: (86) 021-36359362</div>
            <div className="mail"><i></i>邮箱: business@chinascope.com</div>
          </div>
          <div className="rr">
            <div className="qr">
              <img src={require('./imgl1.png')} alt="" />
            </div>
            <div className="txt">扫码关注微信公众号</div>
          </div>
        </div>
        <div className="copy">
          <p>版权所有：北京师范大学新闻传播学院<span><i></i>京ICP备13009620号</span></p>
        </div>
      </div>
    </div>
  )
}
export default Footer;
