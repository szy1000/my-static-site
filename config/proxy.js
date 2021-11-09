/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      // target: 'http://1.116.242.181:9009',   //老测试地址
      target: 'http://121.89.240.241:9009', //新测试地址
      // target: 'https://aiarch.cn', //新测试地址
      // target: 'http://192.168.31.111:9009',
      // target: 'http://192.168.31.167:9009',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
