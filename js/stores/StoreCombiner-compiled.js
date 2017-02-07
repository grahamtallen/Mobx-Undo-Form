Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();var _desc,_value,_class,_descriptor,_class2,_temp,_initialiseProps; /**
 * Created by grahamallen on 1/27/17.
 */



//import {UiStore, ColorStore, UserStore, WordStore, UndoStore, NumberStore} from './substores/'

//import {login, logout} from '../loginreducers.js'
var _mobx=require('mobx');var _index=require('../api/index');var _index2=_interopRequireDefault(_index);var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);var _Snapshot=require('./models/Snapshot');var _substores=require('./substores/');
var _MobxUtils=require('./MobxUtils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0})}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key]});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value' in desc||desc.initializer){desc.writable=true}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null}return desc}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.')}var 

GlobalStore=(_class=(_temp=_class2=(function(){



function GlobalStore(){var _this=this;_classCallCheck(this,GlobalStore);_initialiseProps.call(this);
//alert(typeof subStores.ColorStore);
this.stores=(0,_MobxUtils.mapStores)(_substores.subStores);var 

UiStore=this.stores.UiStore;

(0,_mobx.reaction)(function(){return _this.snapshot},this.pushSnapshotAndSave);

//when(() => UiStore.loggedIn, this.displayUser);

(0,_mobx.reaction)(function(){return _this.snapshot},function(){return _this.calculateUndo()})}_createClass(GlobalStore,[{key:'resetState',value:function resetState()

















{var _stores=
this.stores,UndoStore=_stores.UndoStore,UiStore=_stores.UiStore,ColorStore=_stores.ColorStore;
var lastSnapshot=UndoStore.snapshots.length>1&&UndoStore.snapshots[1];
if(lastSnapshot){
console.log('resetState',lastSnapshot);
UiStore.autoSaveDrafts=false;
console.log(lastSnapshot.currentColor);
this.stores=(0,_Snapshot.resetSnapshot)(lastSnapshot,this.stores);
console.log(ColorStore.currentColor,'old Color');
UndoStore.popSnapshot();
UiStore.autoSaveDrafts=true}else 

console.log('undefined lastSnap')}},{key:'login',value:function login()




{var _stores2=
this.stores,UserStore=_stores2.UserStore,UiStore=_stores2.UiStore;
UserStore.currentUser=_index2.default.getCurrentUser(); // await
UiStore.loggedIn=true}},{key:'logout',value:function logout()



{var _stores3=
this.stores,UserStore=_stores3.UserStore,UiStore=_stores3.UiStore,ColorStore=_stores3.ColorStore,WordStore=_stores3.WordStore;
UserStore.currentUser={}; // async
UiStore.loggedIn=false}},{key:'displayUser',value:function displayUser()



{var 
ColorStore=this.stores.ColorStore;
//ColorStore.setColor(2);
}},{key:'calculateUndo',value:function calculateUndo()













{var _stores4=
this.stores,UndoStore=_stores4.UndoStore,UiStore=_stores4.UiStore;
if(UndoStore.snapshots.length===0){
UiStore.displayUndo=false}else 
{
UiStore.displayUndo=true}}},{key:'phrase',get:function get(){var _stores5=this.stores,UserStore=_stores5.UserStore,WordStore=_stores5.WordStore;if(UserStore.currentUser.name){return WordStore.currentWord+", "+UserStore.currentUser.name}else {return null}}},{key:'searchedUsers',get:function get()




{var _stores6=
this.stores,UiStore=_stores6.UiStore,UserStore=_stores6.UserStore;
return UserStore.users.filter(function(user){return user.name.includes(UiStore.searchText)})}},{key:'snapshot',get:function get()



{
return (0,_Snapshot.snapshotModel)(this.stores)}}]);return GlobalStore})(),_initialiseProps=function _initialiseProps(){var _this2=this;_initDefineProp(this,'stores',_descriptor,this);this.pushSnapshotAndSave=function _callee(snapshot){var _stores7,UndoStore,UiStore;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_stores7=_this2.stores,UndoStore=_stores7.UndoStore,UiStore=_stores7.UiStore;if(snapshot&&UiStore.autoSaveDrafts){UndoStore.pushSnapshot(snapshot);UiStore.displayUndo=true;setTimeout(function(){ //Api.saveDraft(snapshot);
},12000)}else {console.log('no snapshot saved!')}case 2:case 'end':return _context.stop();}}},null,_this2)}},_temp),(_descriptor=_applyDecoratedDescriptor(_class.prototype,'stores',[_mobx.observable],{enumerable:true,initializer:function initializer(){return {}}}),_applyDecoratedDescriptor(_class.prototype,'login',[_mobx.action],Object.getOwnPropertyDescriptor(_class.prototype,'login'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'logout',[_mobx.action],Object.getOwnPropertyDescriptor(_class.prototype,'logout'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'displayUser',[_mobx.action],Object.getOwnPropertyDescriptor(_class.prototype,'displayUser'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'phrase',[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,'phrase'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'calculateUndo',[_mobx.action],Object.getOwnPropertyDescriptor(_class.prototype,'calculateUndo'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'searchedUsers',[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,'searchedUsers'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'snapshot',[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,'snapshot'),_class.prototype)),_class);exports.default=



new GlobalStore();

//# sourceMappingURL=StoreCombiner-compiled.js.map