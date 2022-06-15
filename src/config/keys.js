const keysDev = require('./keys.dev');
const keysProd = require('./keys.prod');

// eslint-disable-next-line no-undef
if (__DEV__) {
  module.exports = keysDev;
} else {
  module.exports = keysProd;
}
