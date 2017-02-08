Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Users/grahamallen/StoreCompiler/js/components/Controls.js'; /**
 * Created by grahamallen on 2/7/17.
 */


/**
 * Created by grahamallen on 2/7/17.
 */
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _native=require('mobx-react/native');
var _nativeBase=require('native-base');
var _Main=require('./containers/Main');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}


var Controls=function Controls(_ref){var stores=_ref.stores;var 
ColorStore=stores.ColorStore;
return (
_react2.default.createElement(_reactNative.View,{style:{flex:1,flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:19}},
_react2.default.createElement(_nativeBase.Button,{style:{backgroundColor:'red'},onPress:function onPress(){return ColorStore.setColor(1)},__source:{fileName:_jsxFileName,lineNumber:20}},
_react2.default.createElement(_reactNative.Text,{style:_Main.styles.textStyles,__source:{fileName:_jsxFileName,lineNumber:21}},'Red')),

_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return ColorStore.setColor(0)},__source:{fileName:_jsxFileName,lineNumber:23}},
_react2.default.createElement(_reactNative.Text,{style:_Main.styles.textStyles,__source:{fileName:_jsxFileName,lineNumber:24}},'Blue')),

_react2.default.createElement(_nativeBase.Button,{style:{backgroundColor:'green'},onPress:function onPress(){return ColorStore.setColor(2)},__source:{fileName:_jsxFileName,lineNumber:26}},
_react2.default.createElement(_reactNative.Text,{style:_Main.styles.textStyles,__source:{fileName:_jsxFileName,lineNumber:27}},'Green'))))};exports.default=





(0,_native.inject)('stores')(Controls);

//# sourceMappingURL=Controls-compiled.js.map