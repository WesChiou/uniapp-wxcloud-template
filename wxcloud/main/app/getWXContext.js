const cloud = require('../global/cloud');
const CommonResponse = require('../global/CommonResponse');

module.exports = async (ctx) => {
  try {
    const wxContext = cloud.getWXContext();
    ctx.body = new CommonResponse(200, wxContext, '');
  } catch (e) {
    ctx.body = new CommonResponse(500, e, '');
  }
};
