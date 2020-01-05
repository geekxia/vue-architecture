module.exports = {
  // 配置本地服务的反向代理
  devServer: {
    // 自定义端口号
    port: 9090,
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',
        changeOrigin: true
      }
    }
  }
}
