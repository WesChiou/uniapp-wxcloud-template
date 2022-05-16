const TcbRouter = require('tcb-router');
const CommonResponse = require('./global/CommonResponse');

const getWXContext = require('./app/getWXContext');

exports.main = (event, context) => {
  const app = new TcbRouter({ event });

  // 拓展 app 对象，方便后续使用
  // ctx._req.event => app.req
  Object.defineProperty(app, 'res', {
    get() {
      return this._req.event;
    },
  });

  // 应用路由
  app.router('[GET]wxcontext', getWXContext);

  // handle 404
  app.use(async (ctx, next) => {
    if (!(`${ctx._req.url}` in ctx._routerMiddlewares)) {
      ctx.body = new CommonResponse(404, null, `${ctx._req.url} Not Found`);
    }
    await next();
  });

  return app.serve();
};
