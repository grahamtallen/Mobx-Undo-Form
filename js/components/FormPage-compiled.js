Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();var _dec,_class,_jsxFileName='/Users/grahamallen/StoreCompiler/js/components/FormPage.js'; /**
 * Created by grahamallen on 2/7/17.
 */
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _native=require('mobx-react/native');
var _nativeBase=require('native-base');
var _Main=require('./containers/Main');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var 


FormPage=(_dec=(0,_native.inject)('stores','globals'),_dec(_class=(0,_native.observer)(_class=(function(_Component){_inherits(FormPage,_Component);function FormPage(){_classCallCheck(this,FormPage);return _possibleConstructorReturn(this,(FormPage.__proto__||Object.getPrototypeOf(FormPage)).apply(this,arguments))}_createClass(FormPage,[{key:'render',value:function render()

{var _props$stores=
this.props.stores,NumberStore=_props$stores.NumberStore,FormStore=_props$stores.FormStore,UiStore=_props$stores.UiStore,UserStore=_props$stores.UserStore;

return (
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:17}},
_react2.default.createElement(_nativeBase.ListItem,{style:{width:300},__source:{fileName:_jsxFileName,lineNumber:18}},
_react2.default.createElement(_nativeBase.Input,{
style:{width:300},placeholder:'Title',
value:FormStore.header,
onChangeText:function onChangeText(text){return FormStore.header=text},
autoCapitalize:'sentences',__source:{fileName:_jsxFileName,lineNumber:19}})),


_react2.default.createElement(_nativeBase.ListItem,{style:{width:300},__source:{fileName:_jsxFileName,lineNumber:26}},
_react2.default.createElement(_nativeBase.Input,{
style:{width:300},
placeholder:'Description',
value:FormStore.description,
onChangeText:function onChangeText(text){return FormStore.description=text},__source:{fileName:_jsxFileName,lineNumber:27}})),


_react2.default.createElement(_nativeBase.ListItem,{__source:{fileName:_jsxFileName,lineNumber:34}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:35}},'Shared Users ',UserStore.sharedUsers.length),
_react2.default.createElement(_nativeBase.Right,{__source:{fileName:_jsxFileName,lineNumber:36}},
_react2.default.createElement(_nativeBase.Button,{bordered:true,onPress:function onPress(){return UiStore.showUserSearch=true},__source:{fileName:_jsxFileName,lineNumber:37}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:38}},'Share'))))))}}]);return FormPage})(_react.Component))||_class)||_class);exports.default=FormPage;

//# sourceMappingURL=FormPage-compiled.js.map