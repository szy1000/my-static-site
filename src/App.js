import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from 'components/Router'


import Dynamic from 'containers/Dynamic'
import Header from 'components/header'
import Footer from 'components/footer'
import './assets/css/reset.css'
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const routeMap = [
  {
    name: '首页',
    url: '/home'
  },
  {
    name: '核心能力',
    url: '/ability'
  },
  {
    name: '产品服务',
    url: '/aaa',
    subMenu: [
      {
        name: '系统部署',
        url: '/'
      },
      {
        name: '企业图谱',
        url: '/'
      },
      {
        name: 'SAM产业链',
        url: '/aaa/sam'
      },
      {
        name: 'Smartag智能资讯',
        url: '/'
      }
    ]
  },
  {
    name: '解决方案',
    url: '/solution',
    subMenu: [
      {
        name: '银行解决方案',
        url: '/'
      },
      {
        name: '区域产业招商数字化平台',
        url: '/'
      },
      {
        name: '量化投研',
        url: '/'
      }
    ]
  },
  {
    name: '企业洞察',
    url: '/'
  },
  {
    name: '新闻',
    url: '/news'
  },
  {
    name: '加入我们',
    url: '/join'
  },

  {
    name: 'Blog',
    url: '/blog'
  },
  {
    name: 'Test',
    url: '/test/'
  },
  // {
  //   name: 'Dynamic',
  //   url: '/dynamic'
  // },
  {
    name: '关于数库',
    url: '/about'
  },
  // {
  //   name: 'SAM',
  //   url: '/aaa/sam/'
  // }
]

function App(props) {
  return (
    <Root>
      {/*<Header routeMap={routeMap} />*/}
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Dynamic path="dynamic" />
          {
            routeMap.map(v =>
              <Routes
                path={v.url}
                key={v.name}
                render={({ routePath, getComponentForPath }) => {
                  const element = getComponentForPath(routePath)
                  return (
                    <>
                      <Header pathname={routePath === '/' ? '/' : `/${routePath}`} routeMap={routeMap} />
                      {element}
                      <Footer />
                    </>
                  )
                }}
              />
            )
          }

          <Routes
            path='/aaa/sam/'
            // key={.url}
            render={({ routePath, getComponentForPath }) => {
              const element = getComponentForPath(routePath)
              return (
                <>
                  <Header pathname={routePath} routeMap={routeMap} />
                  {element}
                  <Footer />
                </>
              )
            }}
          />
          {/*<Routes*/}
          {/*  path="*"*/}
          {/*  render={({ routePath, getComponentForPath }) => {*/}
          {/*    const element = getComponentForPath(routePath)*/}
          {/*    return element*/}
          {/*  }}*/}
          {/*/>*/}
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
