/**
 * Created by grahamallen on 1/27/17.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Main from './components/containers/Main'
import {Provider, observer} from 'mobx-react/native'
import GlobalStore from './stores/StoreCombiner'

@observer
export class App extends Component {
    render() {
        return (
            <Provider globals={GlobalStore} stores={GlobalStore.stores}>
                <Main />
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

