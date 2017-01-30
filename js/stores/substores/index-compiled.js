Object.defineProperty(exports,"__esModule",{value:true});exports.subStores=undefined;var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();var _desc,_value,_class,_descriptor,_descriptor2,_descriptor3,_desc2,_value2,_class3,_descriptor4,_descriptor5,_desc3,_value3,_class5,_descriptor6,_desc4,_value4,_class7,_descriptor7,_desc5,_value5,_class9,_descriptor8,_descriptor9,_descriptor10,_desc6,_value6,_class11,_descriptor11; /**
 * Created by grahamallen on 1/29/17.
 */
var _mobx=require('mobx');
var _index=require('../../api/index');var _index2=_interopRequireDefault(_index);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0})}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key]});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value' in desc||desc.initializer){desc.writable=true}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null}return desc}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.')}var 

UiStore=(_class=function UiStore(){_classCallCheck(this,UiStore);_initDefineProp(this,'loggedIn',_descriptor,this);_initDefineProp(this,'searchText',_descriptor2,this);_initDefineProp(this,'displayUndo',_descriptor3,this)},(_descriptor=_applyDecoratedDescriptor(_class.prototype,'loggedIn',[_mobx.observable],{enumerable:true,initializer:function initializer(){return (
false)}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,'searchText',[_mobx.observable],{enumerable:true,initializer:function initializer(){return (
"")}}),_descriptor3=_applyDecoratedDescriptor(_class.prototype,'displayUndo',[_mobx.observable],{enumerable:true,initializer:function initializer(){return (
false)}})),_class);var 


ColorStore=(_class3=(function(){function ColorStore(){_classCallCheck(this,ColorStore);_initDefineProp(this,'colors',_descriptor4,this);_initDefineProp(this,'colorIndex',_descriptor5,this)}_createClass(ColorStore,[{key:'changeColor',value:function changeColor()









{
this.colorIndex++}},{key:'setColor',value:function setColor(


num){
this.colorIndex=num}},{key:'currentColor',get:function get(){var colors=this.colors,colorIndex=this.colorIndex;return colors[colorIndex]}}]);return ColorStore})(),(_descriptor4=_applyDecoratedDescriptor(_class3.prototype,'colors',[_mobx.observable],{enumerable:true,initializer:function initializer(){return ["blue","red","green"]}}),_descriptor5=_applyDecoratedDescriptor(_class3.prototype,'colorIndex',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 0}}),_applyDecoratedDescriptor(_class3.prototype,'currentColor',[_mobx.computed],Object.getOwnPropertyDescriptor(_class3.prototype,'currentColor'),_class3.prototype),_applyDecoratedDescriptor(_class3.prototype,'changeColor',[_mobx.action],Object.getOwnPropertyDescriptor(_class3.prototype,'changeColor'),_class3.prototype),_applyDecoratedDescriptor(_class3.prototype,'setColor',[_mobx.action],Object.getOwnPropertyDescriptor(_class3.prototype,'setColor'),_class3.prototype)),_class3);var 



NumberStore=(_class5=(function(){function NumberStore(){_classCallCheck(this,NumberStore);_initDefineProp(this,'currentNumber',_descriptor6,this)}_createClass(NumberStore,[{key:'add',value:function add()


{
this.currentNumber++}}]);return NumberStore})(),(_descriptor6=_applyDecoratedDescriptor(_class5.prototype,'currentNumber',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 2}}),_applyDecoratedDescriptor(_class5.prototype,'add',[_mobx.action],Object.getOwnPropertyDescriptor(_class5.prototype,'add'),_class5.prototype)),_class5);var 



WordStore=(_class7=function WordStore(){_classCallCheck(this,WordStore);_initDefineProp(this,'currentWord',_descriptor7,this)},(_descriptor7=_applyDecoratedDescriptor(_class7.prototype,'currentWord',[_mobx.observable],{enumerable:true,initializer:function initializer(){return (
"Hi")}})),_class7);var 


UserStore=(_class9=(function(){function UserStore(){_classCallCheck(this,UserStore);_initDefineProp(this,'currentUsers',_descriptor8,this);_initDefineProp(this,'users',_descriptor9,this);_initDefineProp(this,'getUserss',_descriptor10,this)}_createClass(UserStore,[{key:'findUsers',value:function findUsers(









id){
return this.users.find(function(user){return user.user_id===Number(id)})}},{key:'username',get:function get()



{
if(this.currentUsers.name.length>0){
return this.currentUsers.name}else 
{
return null}}}]);return UserStore})(),(_descriptor8=_applyDecoratedDescriptor(_class9.prototype,'currentUsers',[_mobx.observable],{enumerable:true,initializer:function initializer(){return {}}}),_descriptor9=_applyDecoratedDescriptor(_class9.prototype,'users',[_mobx.observable],{enumerable:true,initializer:function initializer(){return []}}),_descriptor10=_applyDecoratedDescriptor(_class9.prototype,'getUserss',[_mobx.action],{enumerable:true,initializer:function initializer(){var _this=this;return function _callee(){return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(_index2.default.getUserss());case 2:_this.users=_context.sent;case 3:case 'end':return _context.stop();}}},null,_this)}}}),_applyDecoratedDescriptor(_class9.prototype,'findUsers',[_mobx.action],Object.getOwnPropertyDescriptor(_class9.prototype,'findUsers'),_class9.prototype),_applyDecoratedDescriptor(_class9.prototype,'username',[_mobx.computed],Object.getOwnPropertyDescriptor(_class9.prototype,'username'),_class9.prototype)),_class9);var 





UndoStore=(_class11=(function(){function UndoStore(){_classCallCheck(this,UndoStore);_initDefineProp(this,'snapshots',_descriptor11,this)}_createClass(UndoStore,[{key:'pushSnapshot',value:function pushSnapshot(



snap){
this.snapshots.push(snap)}},{key:'popSnapshot',value:function popSnapshot()



{
this.snapshots.pop()}}]);return UndoStore})(),(_descriptor11=_applyDecoratedDescriptor(_class11.prototype,'snapshots',[_mobx.observable],{enumerable:true,initializer:function initializer(){return []}}),_applyDecoratedDescriptor(_class11.prototype,'pushSnapshot',[_mobx.action],Object.getOwnPropertyDescriptor(_class11.prototype,'pushSnapshot'),_class11.prototype),_applyDecoratedDescriptor(_class11.prototype,'popSnapshot',[_mobx.action],Object.getOwnPropertyDescriptor(_class11.prototype,'popSnapshot'),_class11.prototype)),_class11);



var subStores=exports.subStores=[
new UiStore(),
new ColorStore(),
new UserStore(),
new WordStore(),
new UndoStore(),
new NumberStore()];

//# sourceMappingURL=index-compiled.js.map