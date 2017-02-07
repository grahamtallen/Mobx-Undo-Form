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
this.props.globals.login()}},{key:'render',value:function render()


{var _props$stores=
this.props.stores,UiStore=_props$stores.UiStore,NumberStore=_props$stores.NumberStore,ColorStore=_props$stores.ColorStore;
var globals=this.props.globals;

var viewStyle={width:50,height:50,backgroundColor:ColorStore.currentColor};

return (
_react2.default.createElement(_nativeBase.Container,{__source:{fileName:_jsxFileName,lineNumber:33}},
_react2.default.createElement(_nativeBase.Content,{__source:{fileName:_jsxFileName,lineNumber:34}},
_react2.default.createElement(_nativeBase.Header,{style:{flex:1,flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:35}},
_react2.default.createElement(_nativeBase.Left,{__source:{fileName:_jsxFileName,lineNumber:36}},
_react2.default.createElement(_nativeBase.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:37}},
NumberStore.currentNumber)),


_react2.default.createElement(_nativeBase.Body,{__source:{fileName:_jsxFileName,lineNumber:41}},
_react2.default.createElement(Title,{__source:{fileName:_jsxFileName,lineNumber:42}},UiStore.loggedIn?"Logged In":"Login")),

_react2.default.createElement(_nativeBase.Right,{__source:{fileName:_jsxFileName,lineNumber:44}},
_react2.default.createElement(_nativeBase.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:45}},
NumberStore.currentNumber))),



_react2.default.createElement(_reactNative.View,{style:{flex:1,flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:50}},
_react2.default.createElement(_nativeBase.Button,{danger:true,onPress:function onPress(){return ColorStore.setColor(1)},__source:{fileName:_jsxFileName,lineNumber:51}},'Red'),
_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return ColorStore.setColor(0)},__source:{fileName:_jsxFileName,lineNumber:52}},'Blue'),
_react2.default.createElement(_nativeBase.Button,{success:true,onPress:function onPress(){return ColorStore.setColor(2)},__source:{fileName:_jsxFileName,lineNumber:53}},'Green'),
_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return NumberStore.add()},__source:{fileName:_jsxFileName,lineNumber:54}},'Add'),
UiStore.displayUndo&&_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return globals.resetState()},__source:{fileName:_jsxFileName,lineNumber:55}},'Undo')),

_react2.default.createElement(_reactNative.View,{style:{flex:1,flexDirection:'row',backgroundColor:'blue'},__source:{fileName:_jsxFileName,lineNumber:57}},
_react2.default.createElement(_nativeBase.List,{__source:{fileName:_jsxFileName,lineNumber:58}},
_react2.default.createElement(_nativeBase.ListItem,{style:{backgroundColor:'blue',width:80},__source:{fileName:_jsxFileName,lineNumber:59}},
_react2.default.createElement(_nativeBase.Icon,{active:true,name:'home',__source:{fileName:_jsxFileName,lineNumber:60}}),
_react2.default.createElement(_nativeBase.Input,{placeholder:'Icon Textbox',__source:{fileName:_jsxFileName,lineNumber:61}})),


_react2.default.createElement(_nativeBase.ListItem,{__source:{fileName:_jsxFileName,lineNumber:64}},
_react2.default.createElement(_nativeBase.Input,{placeholder:'Alignment in Textbox',__source:{fileName:_jsxFileName,lineNumber:65}})),

_react2.default.createElement(_nativeBase.ListItem,{__source:{fileName:_jsxFileName,lineNumber:67}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:68}},'Simon Mignolet')),

_react2.default.createElement(_nativeBase.ListItem,{__source:{fileName:_jsxFileName,lineNumber:70}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:71}},'Nathaniel Clyne')),

_react2.default.createElement(_nativeBase.ListItem,{__source:{fileName:_jsxFileName,lineNumber:73}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:74}},'Dejan Lovren')))))))}}]);return Main})(_react.Component))||_class)||_class);







;exports.default=

Main;

//# sourceMappingURL=Main-compiled.js.map