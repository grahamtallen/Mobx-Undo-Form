/**
 * Created by grahamallen on 1/27/17.
 */
import {observable, computed, action, reaction, when } from 'mobx'
import Api from '../api/index'
import _ from 'lodash';
//import {UiStore, ColorStore, UserStore, WordStore, UndoStore, NumberStore} from './substores/'
import {snapshot, resetSnapshot} from './models/Snapshot'
import {subStores} from './substores/'

class GlobalStore {

    @observable stores = {};

    constructor() {
        _.forEach(subStores, (store, key) => {
            this.stores[store.constructor.name] = store
        });
        var {UndoStore, UiStore} = this.stores;
        reaction(
            () => this.snapshot,
            async (snapshot) => {
                UndoStore.pushSnapshot(snapshot);
                //await this.saveDraft(snapshot);
                console.log(UndoStore.snapshots.length);
            }
        );
        //when(() => UiStore.loggedIn, this.displayUser);

        //reaction(() => UndoStore.snapshot, () => UiStore.displayUndo = true)
        reaction(() => this.snapshot, () => this.calculateUndo());
    }

    @action
    resetState() {
        let {UndoStore, UiStore} = this.stores;
        resetSnapshot(UndoStore.snapshots[0], this.stores);
        UndoStore.popSnapshot();
    }

    @action
    login() {
        var {UserStore, UiStore} = this.stores;
        UserStore.currentUser = Api.getCurrentUser();// await
        UiStore.loggedIn = true;
    }

    @action
    logout() {
        var {UserStore, UiStore, ColorStore} = this.stores;
        UserStore.currentUser = {};// async
        UiStore.loggedIn = false;
        ColorStore.setColor(0);
    }

    @action
    displayUser() {
        var {ColorStore} = this.stores;
        ColorStore.setColor(2);

    }

    @computed
    get phrase() {
        var {UserStore, WordStore} = this.stores;
        return WordStore.currentWord + ", " + UserStore.currentUserStore.name;
    }

    @action
    calculateUndo() {
        var {UndoStore, UiStore} = this.stores;
        if (UndoStore.snapshots.length === 0) {
            UiStore.displayUndo = false;
        } else {
            UiStore.displayUndo = true;
        }
    }

    @computed
    get searchedUserStore() {
        var {UiStore, UserStore} = this.stores;
        return UserStore.users.filter(user => user.name.includes(UiStore.searchText))
    }

    @computed
    get snapshot() {
        return snapshot(this.stores)
    }
}


export default new GlobalStore();