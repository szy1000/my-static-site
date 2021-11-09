import React from 'react';
import { Link } from "../Router";
import './style.less'


const Header = (props) => {
  const { pathname, routeMap } = props

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={require('../../assets/images/logo.svg')} alt="" />
        </Link>
      </div>

      <ul className="menu">
        {
          routeMap.map(({ url, name, subMenu }) => (
            <li className={pathname === url ? 'active' : ''} key={url}>
              {/*{*/}
              {/*  subMenu ? <div key={name} >{name}</div> : <Link to={url} key={name} className="v1">{name}</Link>*/}
              {/*}*/}
              <Link to={url} key={name} className="v1">{name}  </Link>
              {
                subMenu && (
                  <div className='sub-menu' style={{width: name === '解决方案' ? 210 : 'auto'}}>
                    {
                      subMenu.map((v) => (
                        <Link key={v.name} to={v.url}>{v.name}</Link>
                      ))
                    }
                  </div>
                )
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Header;
