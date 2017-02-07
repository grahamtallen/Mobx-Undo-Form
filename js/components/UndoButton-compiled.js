Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Users/grahamallen/StoreCompiler/js/components/UndoButton.js';
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _native=require('mobx-react/native');
var _nativeBase=require('native-base');
var _Main=require('./containers/Main');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}


var Controls=function Controls(_ref){var stores=_ref.stores,globals=_ref.globals;var 
ColorStore=stores.ColorStore;
return (
_react2.default.createElement(_nativeBase.Footer,{style:{backgroundColor:ColorStore.currentColor},__source:{fileName:_jsxFileName,lineNumber:12}},
_react2.default.createElement(_nativeBase.FooterTab,{__source:{fileName:_jsxFileName,lineNumber:13}},
_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return globals.resetState()},__source:{fileName:_jsxFileName,lineNumber:14}},
_react2.default.createElement(_reactNative.Text,{style:_Main.styles.textStyles,__source:{fileName:_jsxFileName,lineNumber:15}},'Undo')))))};exports.default=






(0,_native.inject)('stores','globals')((0,_native.observer)(Controls));

//# sourceMappingURL=UndoButton-compiled.js.map