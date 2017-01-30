Object.defineProperty(exports,"__esModule",{value:true});exports.
snapshot=snapshot;exports.









resetSnapshot=resetSnapshot;function snapshot(substores){var Users=substores.Users,Colors=substores.Colors,Number=substores.Number;return {currentColor:Colors.currentColor,currentUser:Users.currentUser,phrase:substores.phrase,number:Number.currentNumber}}function resetSnapshot(snapshot,state){var 
Users=state.Users,Colors=state.Colors,Number=state.Number;
var index=Colors.colors.indexOf(snapshot.currentColor);
Colors.colorIndex=index;
console.log('colors',index);
Number.currentNumber=snapshot.number}

//# sourceMappingURL=Snapshot-compiled.js.map