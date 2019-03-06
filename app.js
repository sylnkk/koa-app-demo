
const Koa        = require('koa');
const bodyparser = require('koa-bodyparser');
const render     = require('koa-ejs');
const path       = require('path');

const config      = require('./app/config/config.js')
const controller  = require('./app/controller');
const staticFiles = require('./app/static-files');

const app = new Koa();

render(app, {
  root: path.join(__dirname, '/app/views'),
  layout: 'template',
  viewExt: 'ejs',
  cache: false,
  debug: true
});

app.use(staticFiles('/static/', __dirname + '/static'));
app.use(bodyparser());
app.use(controller());

app.listen(config.port)
console.log(`listening on port ${config.port}`)