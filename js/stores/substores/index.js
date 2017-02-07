/**
 * Created by grahamallen on 1/29/17.
 */
import {observable, computed, action, reaction, when } from 'mobx'
import Api from '../../api/index'
import _ from 'lodash';

class UiStore {
    @observable loggedIn = false;
    @observable searchText = "";
    @observable displayUndo = false;
    @observable autoSaveDrafts = true;
}

class ColorStore {
    @observable colors = ["blue", "red", "green"];

    @observable colorIndex = 0;

    @computed get currentColor() {
        var {colors, colorIndex} = this;
        return colors[colorIndex];
    }

    @action changeColor() {
        this.colorIndex++
    }

    @action setColor(num) {
        this.colorIndex = num
    }
}

class NumberStore {
    @observable currentNumber = 2;
    @action
    add() {
        this.currentNumber++
    }
}

class FormStore {
    @observable header = "";
    @observable description = "";
}

class UserStore {
    @observable currentUser = {};
    @observable users = [];

    @action
    getUsers = async () => {
        this.users = await Api.getUsers();
    };

    @action
    findUsers(id) {
        return this.users.find(user => user.user_id === Number(id))
    }

    @computed
    get username() {
        if (this.currentUser.name) {
            return this.currentUser.name
        } else {
            return null;
        }
    }

}

class UndoStore {
    @observable snapshots = [];

    @action
    pushSnapshot(snap) {
        if (snap) {
            this.snapshots.unshift(snap);
            console.log(this.snapshots[0].header, 'the previous Color is stored here')
        }
        else console.log('undefined snap')
    }

    @action
    popSnapshot() {
        this.snapshots.shift();
        console.log(this.snapshots[0].header, 'after resetting the state, the previous snap, before the one that was just reset, is stored here')


    }
}


export const subStores = [
    new UiStore(),
    new ColorStore(),
    new UserStore(),
    new FormStore(),
    new UndoStore(),
    new NumberStore()
];
