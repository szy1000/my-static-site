import React from 'react'
import { Head } from 'react-static'
// import {Button} from 'antd-mobile'
import { Button, Col, Row } from 'antd'
import styles from './style.less';


export default () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <title>This is my test title!</title>
    </Head>
    <div className={styles.test}>
      <div style={{height: 300}} />
      <Row gutter={[16, 16]}>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>

      <Button>sss</Button>
    </div>

  </>
)
