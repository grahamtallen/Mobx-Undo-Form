/**
 * Created by grahamallen on 1/27/17.
 */
import {observable, computed, action, reaction, when } from 'mobx'
import Api from '../api/index'
import _ from 'lodash';
import {snapshotModel, resetSnapshot} from './models/Snapshot'
import {subStores} from './substores/'
import {mapStores} from './MobxUtils'

class GlobalStore {

    @observable stores = {};

    constructor() {
        this.stores = mapStores(subStores);
        var {UiStore, UndoStore} = this.stores;

        reaction(() => this.snapshot, this.pushSnapshotAndSave);

        //when(() => UiStore.loggedIn, this.displayUser);

        reaction(() => UndoStore.snapshots.length > 1, (bool) => UiStore.displayUndo = bool);
    }


    pushSnapshotAndSave = async (snapshot) => {
        let {UndoStore, UiStore} = this.stores;
        if (snapshot && UiStore.autoSaveDrafts) {
            UndoStore.pushSnapshot(snapshot);
            UiStore.displayUndo = true;
            setTimeout(() => {
                //Api.saveDraft(snapshot);
            }, 12000)
        } else {
            console.log('no snapshot saved!')
        }

    }

    resetState() {
        let {UndoStore, UiStore, ColorStore} = this.stores;
        let lastSnapshot = UndoStore.snapshots.length > 1 && UndoStore.snapshots[1];
        if (lastSnapshot) {
            console.log('resetState', lastSnapshot);
            UiStore.autoSaveDrafts = false;
            console.log(lastSnapshot.currentColor);
            this.stores = resetSnapshot(lastSnapshot, this.stores);
            console.log(ColorStore.currentColor, 'old Color');
            UndoStore.popSnapshot();
            UiStore.autoSaveDrafts = true;
        }
        else console.log('undefined lastSnap')

    }

    @action
    login() {
        let {UserStore, UiStore} = this.stores;
        UserStore.currentUser = Api.getCurrentUser();// await
        UiStore.loggedIn = true;
    }

    @action
    logout() {
        let {UserStore, UiStore, ColorStore, WordStore} = this.stores;
        UserStore.currentUser = {};// async
        UiStore.loggedIn = false;
    }

    @action
    displayUser() {
        let {ColorStore} = this.stores;
        //ColorStore.setColor(2);

    }

    @computed
    get phrase() {
        let {UserStore, FormStore} = this.stores;
        if (UserStore.currentUser.name) {
            return FormStore.header + ", " + UserStore.currentUser.name;
        } else {
            return null
        }
    }


    @computed
    get searchedUsers() {
        var {UiStore, UserStore} = this.stores;
        return UserStore.users.filter(user => user.name.includes(UiStore.searchText))
    }

    @computed
    get snapshot() {
        return snapshotModel(this.stores)
    }
}


export default new GlobalStore();