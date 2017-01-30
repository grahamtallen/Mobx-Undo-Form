Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();var _dec,_class,_jsxFileName='/Users/grahamallen/StoreCompiler/js/components/containers/Main.js'; /**
 * Created by grahamallen on 1/27/17.
 */
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _native=require('mobx-react/native');
var _nativeBase=require('native-base');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}

var styles={
textStyles:{
color:'white'}};var 







Main=(_dec=(0,_native.inject)("stores","globals"),_dec(_class=(0,_native.observer)(_class=(function(_Component){_inherits(Main,_Component);function Main(){_classCallCheck(this,Main);return _possibleConstructorReturn(this,(Main.__proto__||Object.getPrototypeOf(Main)).apply(this,arguments))}_createClass(Main,[{key:'componentDidMount',value:function componentDidMount()

{
//this.props.globals.login();
}},{key:'render',value:function render()

{var _props$stores=
this.props.stores,UiStore=_props$stores.UiStore,NumberStore=_props$stores.NumberStore,ColorStore=_props$stores.ColorStore;
var globals=this.props.globals;
var loggedIn=UiStore.loggedIn;
return (
_react2.default.createElement(_reactNative.View,{style:{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'flex-start'},__source:{fileName:_jsxFileName,lineNumber:30}},
_react2.default.createElement(_reactNative.View,{style:{flex:1,flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:31}},
_react2.default.createElement(_reactNative.View,{style:{width:50,height:50,backgroundColor:ColorStore.currentColor},__source:{fileName:_jsxFileName,lineNumber:32}},
_react2.default.createElement(_reactNative.Text,{style:styles.textStyles,__source:{fileName:_jsxFileName,lineNumber:33}},NumberStore.currentNumberStore)),

_react2.default.createElement(_reactNative.View,{style:{width:50,height:50,backgroundColor:ColorStore.currentColor},__source:{fileName:_jsxFileName,lineNumber:35}},
_react2.default.createElement(_reactNative.Text,{style:styles.textStyles,__source:{fileName:_jsxFileName,lineNumber:36}},loggedIn?"Logged In":"Login")),

_react2.default.createElement(_reactNative.View,{style:{width:50,height:50,backgroundColor:ColorStore.currentColor},__source:{fileName:_jsxFileName,lineNumber:38}},
_react2.default.createElement(_reactNative.Text,{style:styles.textStyles,__source:{fileName:_jsxFileName,lineNumber:39}},NumberStore.currentNumberStore))),


_react2.default.createElement(_reactNative.View,{style:{flex:1,flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:42}},
_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return ColorStore.setColor(0)},__source:{fileName:_jsxFileName,lineNumber:43}},'Red'),
_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return ColorStore.setColor(1)},__source:{fileName:_jsxFileName,lineNumber:44}},'Blue'),
_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return NumberStore.add()},__source:{fileName:_jsxFileName,lineNumber:45}},'Add'),
UiStore.displayUndo&&_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return globals.resetState()},__source:{fileName:_jsxFileName,lineNumber:46}},'Undo'))))}}]);return Main})(_react.Component))||_class)||_class);





;exports.default=

Main;

//# sourceMappingURL=Main-compiled.js.map