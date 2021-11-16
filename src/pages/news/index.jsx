import React from 'react'
import { Head } from 'react-static'
import Home from "./components/index";
// import './style.less';
import styles from './style.less'

export default () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <title>This is my page title!</title>
    </Head>
    <div>
      <div className={styles.news}>
        ssss
      </div>
      {/*<Home/>*/}
    </div>
  </>
)
