module.exports = class Schema {
  static configs = {};

  static validate(data) {
    if (!data || typeof data !== 'object') {
      throw new Error('No data');
    }

    for (const [key, config] of Object.entries(this.configs)) {
      if (config.required && !data[key]) { // Check required rule
        throw new Error(`The ${key} is required.`);
      }

      if (data[key] && typeof data[key] !== typeof config.type()) { // Check type rule
        throw new Error(`The ${key} is expected ${typeof config.type()} type, but received a ${typeof data[key]}.`);
      }

      if (data[key] && typeof config.validator === 'function' && !config.validator(data[key])) { // Use validator
        throw new Error(`The ${key} is not valid.`);
      }
    }

    return true;
  }
};
