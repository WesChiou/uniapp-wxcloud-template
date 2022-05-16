// Schema 示例

const Schema = require('./Schema');

module.exports = class MySchema extends Schema {
  static configs = {
    name: {
      type: String,
      required: true,
      validator: (val) => val.length < 30,
    },
    email: {
      type: String,
      required: false,
    },
  };
};
