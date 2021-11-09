import React from 'react';
import './style.less'


const Panel = (props) => {
  const { className, style, title, subTitle, children } = props

  return (
    <div className={className + " panel"}>
      <div className="panel-header">
        <h2 className="panel-header-title">{title}</h2>
        <h4 className="panel-header-subTitle">{subTitle}</h4>
      </div>
      <div className="panel-content">{children}</div>
    </div>
  )
}
export default Panel;
