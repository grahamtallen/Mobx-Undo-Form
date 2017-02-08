Object.defineProperty(exports,"__esModule",{value:true});exports.mapStores=undefined;


var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

var mapStores=exports.mapStores=function mapStores(subStores){
var mappedStores={};
_lodash2.default.forEach(subStores,function(store,key){
mappedStores[store.constructor.name]=store});

return mappedStores}; /**
 * Created by grahamallen on 1/30/17.
 */

//# sourceMappingURL=MobxUtils-compiled.js.map