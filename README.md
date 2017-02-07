# React-Native + Mobx Undo-able Form 

A form with undo-able actions. By unifying the entire application's observable state in a Global Store, you can revert the entire application's state using methods on the Global Store
###Examples
---

```javascript
    // in GlobalStore.js
    
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

  
```



