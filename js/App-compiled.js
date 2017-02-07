Object.defineProperty(exports,"__esModule",{value:true});exports.App=undefined;var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();var _class,_jsxFileName='/Users/grahamallen/StoreCompiler/js/App.js'; /**
 * Created by grahamallen on 1/27/17.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 */

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _Main=require('./components/containers/Main');var _Main2=_interopRequireDefault(_Main);
var _native=require('mobx-react/native');
var _GlobalStore=require('./stores/GlobalStore.js');var _GlobalStore2=_interopRequireDefault(_GlobalStore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var 


App=exports.App=(0,_native.observer)(_class=(function(_Component){_inherits(App,_Component);function App(){_classCallCheck(this,App);return _possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments))}_createClass(App,[{key:'render',value:function render()
{
return (
_react2.default.createElement(_native.Provider,{globals:_GlobalStore2.default,stores:_GlobalStore2.default.substores,__source:{fileName:_jsxFileName,lineNumber:25}},
_react2.default.createElement(_Main2.default,{__source:{fileName:_jsxFileName,lineNumber:26}})))}}]);return App})(_react.Component))||_class;





var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF'},

welcome:{
fontSize:20,
textAlign:'center',
margin:10},

instructions:{
textAlign:'center',
color:'#333333',
marginBottom:5}});

//# sourceMappingURL=App-compiled.js.map