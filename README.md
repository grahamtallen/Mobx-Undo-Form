# React-Native + Mobx Undo-able Form 

A form with undo-able actions. By unifying the entire application's observable state in a Global Store, you can revert the entire application's state using methods on the Global Store
###Examples
---

```javascript
    // in GlobalStore.js
    
class GlobalStore {

    @observable substores = {};

    constructor() {
        // After this global store class is instatiated via the constructor function,  map the substores to this object
        this.substores = mapStores(subStores); 

        var {UiStore, UndoStore} = this.substores; // you can even deconstruct the state immidiately after instantiation,


        reaction(() => this.snapshot, this.pushSnapshotAndSave); // and bind reactions to the global actions below

        reaction(() => UndoStore.snapshots.length > 1, (bool) => UiStore.displayUndo = bool); // or bind reactions to and from the substores

        when(() => UiStore.loggedIn, this.displayUser); // this, referring to the GlobalStore and the methods bound to it

    }
    
    ... // all other actions
    
    resetState() {
        let {UndoStore, UiStore, ColorStore} = this.substores;
        let lastSnapshot = UndoStore.snapshots.length > 1 && UndoStore.snapshots[1];
        if (lastSnapshot) {
            
            UiStore.autoSaveDrafts = false;

            // here is where the entire application state is reset based on the last snapshot, see Snapshot.js
            this.substores = resetSnapshot(lastSnapshot, this.substores);

            UndoStore.popSnapshot();
            UiStore.autoSaveDrafts = true;
        }
    }
}
  
```



