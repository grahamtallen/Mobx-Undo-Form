Object.defineProperty(exports,"__esModule",{value:true});exports.
snapshotModel=snapshotModel;exports.












resetSnapshot=resetSnapshot;function snapshotModel(_ref){var UserStore=_ref.UserStore,ColorStore=_ref.ColorStore,NumberStore=_ref.NumberStore,FormStore=_ref.FormStore,phrase=_ref.phrase;return {currentColor:ColorStore.currentColor,currentUser:UserStore.currentUser,phrase:phrase,number:NumberStore.currentNumber,header:FormStore.header,description:FormStore.description}}function resetSnapshot(snapshot,state){
var index=state.ColorStore.colors.indexOf(snapshot.currentColor);
state.ColorStore.colorIndex=index;
state.NumberStore.currentNumber=snapshot.number;
state.FormStore.header=snapshot.header;
state.FormStore.description=snapshot.description;
return state}

//# sourceMappingURL=snapshot-compiled.js.map