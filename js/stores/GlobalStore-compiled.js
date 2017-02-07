Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();var _desc,_value,_class,_descriptor,_descriptor2,_class2,_temp,_initialiseProps;
var _mobx=require('mobx');
var _index=require('../api/index');var _index2=_interopRequireDefault(_index);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _Snapshot=require('./models/Snapshot');
var _substores8=require('./substores/');
var _MobxUtils=require('./MobxUtils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0})}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key]});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value' in desc||desc.initializer){desc.writable=true}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null}return desc}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.')}

/**
 * This file is designed to funnel the global state of the application, accesible via the @observable substores object.
 *
 *
 */var 


GlobalStore=(_class=(_temp=_class2=(function(){



function GlobalStore(){var _this=this;_classCallCheck(this,GlobalStore);_initialiseProps.call(this);
this.substores=(0,_MobxUtils.mapStores)(_substores8.subStores); // After this global store class is instatiated via the constructor function,
// map the substores to this object
var _substores=

this.substores,UiStore=_substores.UiStore,UndoStore=_substores.UndoStore; // you can even deconstruct the state immidiately after instantiation,


(0,_mobx.reaction)(function(){return _this.snapshot},this.pushSnapshotAndSave); // and bind reactions to the global actions below

(0,_mobx.reaction)(function(){return UndoStore.snapshots.length>1},function(bool){return UiStore.displayUndo=bool}); // or bind reactions to and from the substores

//when(() => UiStore.loggedIn, this.displayUser);
}_createClass(GlobalStore,[{key:'resetState',value:function resetState()
















{var _substores2=
this.substores,UndoStore=_substores2.UndoStore,UiStore=_substores2.UiStore,ColorStore=_substores2.ColorStore;
var lastSnapshot=UndoStore.snapshots.length>1&&UndoStore.snapshots[1];
if(lastSnapshot){

UiStore.autoSaveDrafts=false;

// here is where the entire application state is reset based on the last snapshot, see Snapshot.js
this.substores=(0,_Snapshot.resetSnapshot)(lastSnapshot,this.substores);

UndoStore.popSnapshot();
UiStore.autoSaveDrafts=true}}},{key:'logout',value:function logout()











{var _substores3=
this.substores,UserStore=_substores3.UserStore,UiStore=_substores3.UiStore,ColorStore=_substores3.ColorStore,WordStore=_substores3.WordStore;
UserStore.currentUser={}; // async
UiStore.loggedIn=false}},{key:'phrase',get:function get()



{var _substores4=
this.substores,UserStore=_substores4.UserStore,FormStore=_substores4.FormStore;
if(UserStore.currentUser.name){
return FormStore.header+", "+UserStore.currentUser.name}else 
{
return null}}},{key:'searchedUsers',get:function get()




{var _substores5=
this.substores,UiStore=_substores5.UiStore,UserStore=_substores5.UserStore;
return UserStore.users.filter(function(user){return user.name.includes(UiStore.searchText)})}},{key:'snapshot',get:function get()



{
return (0,_Snapshot.snapshotModel)(this.substores)}}]);return GlobalStore})(),_initialiseProps=function _initialiseProps(){var _this2=this;_initDefineProp(this,'substores',_descriptor,this);this.pushSnapshotAndSave=function _callee(snapshot){var _substores6,UndoStore,UiStore;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_substores6=_this2.substores,UndoStore=_substores6.UndoStore,UiStore=_substores6.UiStore;if(snapshot&&UiStore.autoSaveDrafts){UndoStore.pushSnapshot(snapshot);UiStore.displayUndo=true;setTimeout(function(){ //Api.saveDraft(snapshot);
},12000)}else {console.log('no snapshot saved!')}case 2:case 'end':return _context.stop();}}},null,_this2)};_initDefineProp(this,'login',_descriptor2,this)},_temp),(_descriptor=_applyDecoratedDescriptor(_class.prototype,'substores',[_mobx.observable],{enumerable:true,initializer:function initializer(){return {}}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,'login',[_mobx.action],{enumerable:true,initializer:function initializer(){var _this3=this;return function _callee2(){var _substores7,UserStore,UiStore;return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_substores7=_this3.substores,UserStore=_substores7.UserStore,UiStore=_substores7.UiStore;_context2.next=3;return regeneratorRuntime.awrap(_index2.default.getCurrentUser());case 3:UserStore.currentUser=_context2.sent; // actions can be asynchronus
UiStore.loggedIn=true;case 5:case 'end':return _context2.stop();}}},null,_this3)}}}),_applyDecoratedDescriptor(_class.prototype,'logout',[_mobx.action],Object.getOwnPropertyDescriptor(_class.prototype,'logout'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'phrase',[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,'phrase'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'searchedUsers',[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,'searchedUsers'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'snapshot',[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,'snapshot'),_class.prototype)),_class);exports.default=


new GlobalStore();

//# sourceMappingURL=GlobalStore-compiled.js.map