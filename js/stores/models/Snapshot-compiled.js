Object.defineProperty(exports,"__esModule",{value:true});exports.
snapshotModel=snapshotModel;exports.









resetSnapshot=resetSnapshot;function snapshotModel(state){var UserStore=state.UserStore,ColorStore=state.ColorStore,NumberStore=state.NumberStore,UiStore=state.UiStore;return {currentColor:ColorStore.currentColor,currentUser:UserStore.currentUser,phrase:state.phrase,number:NumberStore.currentNumber}}function resetSnapshot(snapshot,state){
var index=state.ColorStore.colors.indexOf(snapshot.currentColor);
state.ColorStore.colorIndex=index;
state.NumberStore.currentNumber=snapshot.number;
return state}

//# sourceMappingURL=Snapshot-compiled.js.map