Object.defineProperty(exports,"__esModule",{value:true});exports.subStores=undefined;var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();var _desc,_value,_class,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_desc2,_value2,_class3,_descriptor6,_descriptor7,_desc3,_value3,_class5,_descriptor8,_desc4,_value4,_class7,_descriptor9,_descriptor10,_desc5,_value5,_class9,_descriptor11,_descriptor12,_descriptor13,_descriptor14,_desc6,_value6,_class11,_descriptor15; /**
 * Created by grahamallen on 1/29/17.
 */
var _mobx=require('mobx');
var _index=require('../../api/index');var _index2=_interopRequireDefault(_index);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0})}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key]});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value' in desc||desc.initializer){desc.writable=true}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null}return desc}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.')}

/*
*   Welcome to the Substores.
*
*   Substores are usually kept in separate files, but for simplicity I put them all here.
*
*   - Substores each control a piece of the global application's state through observable values,
*
*   -  They can export their own actions and utitlity methods,
*
*   - They also emit derivations of the state based on the changes made to observables via @computed getter methods
*
*   They are instantiated and exported at the end of this file. You Must Only instantiate a substore once in an entire application!
* */var 

UiStore=(_class=function UiStore(){_classCallCheck(this,UiStore);_initDefineProp(this,'loggedIn',_descriptor,this);_initDefineProp(this,'searchText',_descriptor2,this);_initDefineProp(this,'displayUndo',_descriptor3,this);_initDefineProp(this,'autoSaveDrafts',_descriptor4,this);_initDefineProp(this,'showUserSearch',_descriptor5,this)},(_descriptor=_applyDecoratedDescriptor(_class.prototype,'loggedIn',[_mobx.observable],{enumerable:true,initializer:function initializer(){return (
false)}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,'searchText',[_mobx.observable],{enumerable:true,initializer:function initializer(){return (
"G")}}),_descriptor3=_applyDecoratedDescriptor(_class.prototype,'displayUndo',[_mobx.observable],{enumerable:true,initializer:function initializer(){return (
false)}}),_descriptor4=_applyDecoratedDescriptor(_class.prototype,'autoSaveDrafts',[_mobx.observable],{enumerable:true,initializer:function initializer(){return (
true)}}),_descriptor5=_applyDecoratedDescriptor(_class.prototype,'showUserSearch',[_mobx.observable],{enumerable:true,initializer:function initializer(){return (
false)}})),_class);var 



ColorStore=(_class3=(function(){function ColorStore(){_classCallCheck(this,ColorStore);_initDefineProp(this,'colors',_descriptor6,this);_initDefineProp(this,'colorIndex',_descriptor7,this)}_createClass(ColorStore,[{key:'changeColor',value:function changeColor()









{
this.colorIndex++}},{key:'setColor',value:function setColor(


num){
this.colorIndex=num}},{key:'currentColor',get:function get(){var colors=this.colors,colorIndex=this.colorIndex;return colors[colorIndex]}}]);return ColorStore})(),(_descriptor6=_applyDecoratedDescriptor(_class3.prototype,'colors',[_mobx.observable],{enumerable:true,initializer:function initializer(){return ["blue","red","green"]}}),_descriptor7=_applyDecoratedDescriptor(_class3.prototype,'colorIndex',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 0}}),_applyDecoratedDescriptor(_class3.prototype,'currentColor',[_mobx.computed],Object.getOwnPropertyDescriptor(_class3.prototype,'currentColor'),_class3.prototype),_applyDecoratedDescriptor(_class3.prototype,'changeColor',[_mobx.action],Object.getOwnPropertyDescriptor(_class3.prototype,'changeColor'),_class3.prototype),_applyDecoratedDescriptor(_class3.prototype,'setColor',[_mobx.action],Object.getOwnPropertyDescriptor(_class3.prototype,'setColor'),_class3.prototype)),_class3);var 



NumberStore=(_class5=(function(){function NumberStore(){_classCallCheck(this,NumberStore);_initDefineProp(this,'currentNumber',_descriptor8,this)}_createClass(NumberStore,[{key:'add',value:function add()


{
this.currentNumber++}}]);return NumberStore})(),(_descriptor8=_applyDecoratedDescriptor(_class5.prototype,'currentNumber',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 2}}),_applyDecoratedDescriptor(_class5.prototype,'add',[_mobx.action],Object.getOwnPropertyDescriptor(_class5.prototype,'add'),_class5.prototype)),_class5);var 



FormStore=(_class7=function FormStore(){_classCallCheck(this,FormStore);_initDefineProp(this,'header',_descriptor9,this);_initDefineProp(this,'description',_descriptor10,this)},(_descriptor9=_applyDecoratedDescriptor(_class7.prototype,'header',[_mobx.observable],{enumerable:true,initializer:function initializer(){return (
"")}}),_descriptor10=_applyDecoratedDescriptor(_class7.prototype,'description',[_mobx.observable],{enumerable:true,initializer:function initializer(){return (
"")}})),_class7);var 


UserStore=(_class9=(function(){function UserStore(){_classCallCheck(this,UserStore);_initDefineProp(this,'currentUser',_descriptor11,this);_initDefineProp(this,'users',_descriptor12,this);_initDefineProp(this,'sharedUsers',_descriptor13,this);_initDefineProp(this,'getUsers',_descriptor14,this)}_createClass(UserStore,[{key:'findUsers',value:function findUsers(











id){
return this.users.find(function(user){return user.user_id===Number(id)})}},{key:'username',get:function get()



{
if(this.currentUser.name){
return this.currentUser.name}else 
{
return null}}}]);return UserStore})(),(_descriptor11=_applyDecoratedDescriptor(_class9.prototype,'currentUser',[_mobx.observable],{enumerable:true,initializer:function initializer(){return {}}}),_descriptor12=_applyDecoratedDescriptor(_class9.prototype,'users',[_mobx.observable],{enumerable:true,initializer:function initializer(){return []}}),_descriptor13=_applyDecoratedDescriptor(_class9.prototype,'sharedUsers',[_mobx.observable],{enumerable:true,initializer:function initializer(){return []}}),_descriptor14=_applyDecoratedDescriptor(_class9.prototype,'getUsers',[_mobx.action],{enumerable:true,initializer:function initializer(){var _this=this;return function _callee(){return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(_index2.default.getUsers());case 2:_this.users=_context.sent;case 3:case 'end':return _context.stop();}}},null,_this)}}}),_applyDecoratedDescriptor(_class9.prototype,'findUsers',[_mobx.action],Object.getOwnPropertyDescriptor(_class9.prototype,'findUsers'),_class9.prototype),_applyDecoratedDescriptor(_class9.prototype,'username',[_mobx.computed],Object.getOwnPropertyDescriptor(_class9.prototype,'username'),_class9.prototype)),_class9);var 





UndoStore=(_class11=(function(){function UndoStore(){_classCallCheck(this,UndoStore);_initDefineProp(this,'snapshots',_descriptor15,this)}_createClass(UndoStore,[{key:'pushSnapshot',value:function pushSnapshot(



snap){
if(snap){
this.snapshots.unshift(snap);
console.log(this.snapshots[0].header,'the previous Color is stored here')}else 

console.log('undefined snap')}},{key:'popSnapshot',value:function popSnapshot()



{
this.snapshots.shift();
console.log(this.snapshots[0].header,'after resetting the state, the previous snap, before the one that was just reset, is stored here')}}]);return UndoStore})(),(_descriptor15=_applyDecoratedDescriptor(_class11.prototype,'snapshots',[_mobx.observable],{enumerable:true,initializer:function initializer(){return []}}),_applyDecoratedDescriptor(_class11.prototype,'pushSnapshot',[_mobx.action],Object.getOwnPropertyDescriptor(_class11.prototype,'pushSnapshot'),_class11.prototype),_applyDecoratedDescriptor(_class11.prototype,'popSnapshot',[_mobx.action],Object.getOwnPropertyDescriptor(_class11.prototype,'popSnapshot'),_class11.prototype)),_class11);






var subStores=exports.subStores=[
new UiStore(),
new ColorStore(),
new UserStore(),
new FormStore(),
new UndoStore(),
new NumberStore()];

//# sourceMappingURL=index-compiled.js.map