
const config = {
  // 启动端口
  port: 3000,
  // 数据库配置
  database: {
    DATABASE: 'koa2blog',
    USERNAME: 'root',
    PASSWORD: '',
    PORT: '3306',
    HOST: 'localhost'
  },

  // SESSION配置
  session: {
    key: 'USER_SID',          // cookie 中存储 session-id 时的键名, 默认为 koa:sess
    cookie: {                   // 与 cookie 相关的配置
        domain: '192.168.187.141',    // 写 cookie 所在的域名
        path: '/',              // 写 cookie 所在的路径
        maxAge: 1000 * 30,      // cookie 有效时长
        httpOnly: true,         // 是否只用于 http 请求中获取
        overwrite: false        // 是否允许重写
    }
  },

}

module.exports = config
