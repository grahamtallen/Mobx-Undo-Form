Object.defineProperty(exports,"__esModule",{value:true});exports.


















snapshotModel=snapshotModel;exports.













resetSnapshot=resetSnapshot; //import {action, runInAction} from 'mobx'; // runInAction, .bound only in Mobx 3!!
//let index;
//action.bound(() => {
//    index = await state.ColorStore.colors.indexOf(snapshot.currentColor);
//});
// ====== Or, ======
//action(async () => {
//    const data = await state.ColorStore.colors.indexOf(snapshot.currentColor);
//    /* required in strict mode to be allowed to update state: */
//    runInAction("update state after fetching data", () => {
//        this.data.replace(data);
//        this.isSaving = true;
//    })
//});
function snapshotModel(state){var UserStore=state.UserStore,ColorStore=state.ColorStore,NumberStore=state.NumberStore,FormStore=state.FormStore;return {currentColor:ColorStore.currentColor,currentUser:UserStore.currentUser,phrase:state.phrase,number:NumberStore.currentNumber,header:FormStore.header}} //description: FormStore.description
function resetSnapshot(snapshot,state){var index=state.ColorStore.colors.indexOf(snapshot.currentColor);state.ColorStore.colorIndex=index;state.NumberStore.currentNumber=snapshot.number;state.FormStore.header=snapshot.header; //state.FormStore.description = snapshot.description;
return state}

//# sourceMappingURL=snapshot-compiled.js.map