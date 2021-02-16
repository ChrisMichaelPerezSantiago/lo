
import _ from 'lodash';

let lodashPlugin = {};
lodashPlugin.install = (Vue, options) =>{
  Vue.prototype.$_ = _;
};

export default lodashPlugin;