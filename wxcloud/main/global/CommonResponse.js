module.exports = class CommonResponse {
  constructor(code, data, msg) {
    this.code = code;
    this.data = data;
    this.msg = msg;
  }
};
