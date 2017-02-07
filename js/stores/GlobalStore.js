
import {observable, computed, action, reaction, when } from 'mobx'
import Api from '../api/index'
import _ from 'lodash';
import {snapshotModel, resetSnapshot} from './models/Snapshot'
import {subStores} from './substores/'
import {mapStores} from './MobxUtils'

/**
 * This file is designed to funnel the global state of the application, accesible via the @observable substores object.
 *
 *
 */


class GlobalStore {

    @observable substores = {};

    constructor() {
        this.substores = mapStores(subStores); // After this global store class is instatiated via the constructor function,
                                                // map the substores to this object


        var {UiStore, UndoStore} = this.substores; // you can even deconstruct the state immidiately after instantiation,


        reaction(() => this.snapshot, this.pushSnapshotAndSave); // and bind reactions to the global actions below

        reaction(() => UndoStore.snapshots.length > 1, (bool) => UiStore.displayUndo = bool); // or bind reactions to and from the substores

        //when(() => UiStore.loggedIn, this.displayUser);

    }

    pushSnapshotAndSave = async (snapshot) => {
        let {UndoStore, UiStore} = this.substores;
        if (snapshot && UiStore.autoSaveDrafts) {
            UndoStore.pushSnapshot(snapshot);
            UiStore.displayUndo = true;
            setTimeout(() => {
                //Api.saveDraft(snapshot);
            }, 12000)
        } else {
            console.log('no snapshot saved!')
        }

    };

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

    @action
    login = async () => {
        let {UserStore, UiStore} = this.substores;
        UserStore.currentUser = await Api.getCurrentUser(); // actions can be asynchronus
        UiStore.loggedIn = true;
    }

    @action
    logout() {
        let {UserStore, UiStore, ColorStore, WordStore} = this.substores;
        UserStore.currentUser = {};// async
        UiStore.loggedIn = false;
    }

    @computed
    get phrase() {
        let {UserStore, FormStore} = this.substores;
        if (UserStore.currentUser.name) {
            return FormStore.header + ", " + UserStore.currentUser.name;
        } else {
            return null
        }
    }

    @computed
    get searchedUsers() {
        var {UiStore, UserStore} = this.substores;
        return UserStore.users.filter(user => user.name.includes(UiStore.searchText))
    }

    @computed
    get snapshot() {
        return snapshotModel(this.substores)
    }
}


export default new GlobalStore();