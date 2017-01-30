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

class WordStore {
    @observable currentWord = "Hi";
}

class UserStore {
    @observable currentUsers = {};
    @observable users = [];

    @action
    getUserss = async () => {
        this.users = await Api.getUserss();
    };

    @action
    findUsers(id) {
        return this.users.find(user => user.user_id === Number(id))
    }

    @computed
    get username() {
        if (this.currentUsers.name.length > 0) {
            return this.currentUsers.name
        } else {
            return null;
        }
    }

}

class UndoStore {
    @observable snapshots = [];

    @action
    pushSnapshot(snap) {
        this.snapshots.push(snap);
    }

    @action
    popSnapshot() {
        this.snapshots.pop();
    }
}

export const subStores = [
    new UiStore(),
    new ColorStore(),
    new UserStore(),
    new WordStore(),
    new UndoStore(),
    new NumberStore()
];
