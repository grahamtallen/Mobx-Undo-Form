Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();var _desc,_value,_class,_descriptor; /**
 * Created by grahamallen on 1/27/17.
 */



//import {UiStore, ColorStore, UserStore, WordStore, UndoStore, NumberStore} from './substores/'
var _mobx=require('mobx');var _index=require('../api/index');var _index2=_interopRequireDefault(_index);var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);var _Snapshot=require('./models/Snapshot');
var _substores=require('./substores/');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0})}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key]});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value' in desc||desc.initializer){desc.writable=true}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null}return desc}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.')}var 

GlobalStore=(_class=(function(){



function GlobalStore(){var _this=this;_classCallCheck(this,GlobalStore);_initDefineProp(this,'stores',_descriptor,this);
_lodash2.default.forEach(_substores.subStores,function(store,key){
_this.stores[store.constructor.name]=store});var _stores=

this.stores,UndoStore=_stores.UndoStore,UiStore=_stores.UiStore;
(0,_mobx.reaction)(
function(){return _this.snapshot},
function _callee(snapshot){return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:
UndoStore.pushSnapshot(snapshot);
//await this.saveDraft(snapshot);
console.log(UndoStore.snapshots.length);case 2:case 'end':return _context.stop();}}},null,_this)});


//when(() => UiStore.loggedIn, this.displayUser);

//reaction(() => UndoStore.snapshot, () => UiStore.displayUndo = true)
(0,_mobx.reaction)(function(){return _this.snapshot},function(){return _this.calculateUndo()})}_createClass(GlobalStore,[{key:'resetState',value:function resetState()



{var _stores2=
this.stores,UndoStore=_stores2.UndoStore,UiStore=_stores2.UiStore;
(0,_Snapshot.resetSnapshot)(UndoStore.snapshots[0],this.stores);
UndoStore.popSnapshot()}},{key:'login',value:function login()



{var _stores3=
this.stores,UserStore=_stores3.UserStore,UiStore=_stores3.UiStore;
UserStore.currentUser=_index2.default.getCurrentUser(); // await
UiStore.loggedIn=true}},{key:'logout',value:function logout()



{var _stores4=
this.stores,UserStore=_stores4.UserStore,UiStore=_stores4.UiStore,ColorStore=_stores4.ColorStore;
UserStore.currentUser={}; // async
UiStore.loggedIn=false;
ColorStore.setColor(0)}},{key:'displayUser',value:function displayUser()



{var 
ColorStore=this.stores.ColorStore;
ColorStore.setColor(2)}},{key:'calculateUndo',value:function calculateUndo()










{var _stores5=
this.stores,UndoStore=_stores5.UndoStore,UiStore=_stores5.UiStore;
if(UndoStore.snapshots.length===0){
UiStore.displayUndo=false}else 
{
UiStore.displayUndo=true}}},{key:'phrase',get:function get(){var _stores6=this.stores,UserStore=_stores6.UserStore,WordStore=_stores6.WordStore;return WordStore.currentWord+", "+UserStore.currentUserStore.name}},{key:'searchedUserStore',get:function get()




{var _stores7=
this.stores,UiStore=_stores7.UiStore,UserStore=_stores7.UserStore;
return UserStore.users.filter(function(user){return user.name.includes(UiStore.searchText)})}},{key:'snapshot',get:function get()



{
return (0,_Snapshot.snapshot)(this.stores)}}]);return GlobalStore})(),(_descriptor=_applyDecoratedDescriptor(_class.prototype,'stores',[_mobx.observable],{enumerable:true,initializer:function initializer(){return {}}}),_applyDecoratedDescriptor(_class.prototype,'resetState',[_mobx.action],Object.getOwnPropertyDescriptor(_class.prototype,'resetState'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'login',[_mobx.action],Object.getOwnPropertyDescriptor(_class.prototype,'login'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'logout',[_mobx.action],Object.getOwnPropertyDescriptor(_class.prototype,'logout'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'displayUser',[_mobx.action],Object.getOwnPropertyDescriptor(_class.prototype,'displayUser'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'phrase',[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,'phrase'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'calculateUndo',[_mobx.action],Object.getOwnPropertyDescriptor(_class.prototype,'calculateUndo'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'searchedUserStore',[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,'searchedUserStore'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'snapshot',[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,'snapshot'),_class.prototype)),_class);exports.default=




new GlobalStore();

//# sourceMappingURL=StoreCombiner-compiled.js.map