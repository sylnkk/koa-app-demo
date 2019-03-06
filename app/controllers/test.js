const fn_index = async (ctx, next) => {
  ctx.response.body = '<h1>Hello world</h1>'
  console.log('test module fn_index')
}

const fn_signin = async (ctx, next) => {
  var ct = JSON.stringify(ctx);
  console.log('test module fn_signin')
  await ctx.render('index', {
    title: 'signin',
    names: ['Han Meimei', 'Sun Lili', 'Heymans', 'allen']
  });
}

module.exports = {
  'GET /test': fn_index,
  'GET /test/signin': fn_signin
}