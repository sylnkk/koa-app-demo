
// import bear from '../utils/bear'
let bear=require("../utils/bear");

console.log(bear)

const fn_index = async (ctx, next) => {

  let test = new bear()
  //test.aaa();
  test.bbb()

  ctx.response.body = '<h1>Hello world</h1>'
}

const fn_signin = async (ctx, next) => {
  var ct = JSON.stringify(ctx);
  await ctx.render('index', {
    title: 'signin',
    names: ['Han Meimei', 'Sun Lili', 'Heymans', 'allen']
  });
}

module.exports = {
  'GET /': fn_index,
  'GET /signin': fn_signin
}