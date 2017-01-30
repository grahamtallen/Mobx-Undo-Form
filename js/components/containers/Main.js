/**
 * Created by grahamallen on 1/27/17.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer, Provider, inject} from 'mobx-react/native'
import {Button} from 'native-base';

const styles = {
    textStyles: {
        color: 'white'
    }
}

@inject(
    "stores",
    "globals"
) @observer
class Main extends Component {

    componentDidMount(){
        //this.props.globals.login();
    }

    render() {
        var {UiStore, NumberStore, ColorStore} = this.props.stores;
        var globals = this.props.globals;
        var loggedIn = UiStore.loggedIn;
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: ColorStore.currentColor}}>
                        <Text style={styles.textStyles}>{NumberStore.currentNumberStore}</Text>
                    </View>
                    <View style={{width: 50, height: 50, backgroundColor: ColorStore.currentColor}}>
                        <Text style={styles.textStyles}>{loggedIn ? "Logged In" : "Login"}</Text>
                    </View>
                    <View style={{width: 50, height: 50, backgroundColor: ColorStore.currentColor}}>
                        <Text style={styles.textStyles}>{NumberStore.currentNumberStore}</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button onPress={() => ColorStore.setColor(0)}>Red</Button>
                    <Button onPress={() => ColorStore.setColor(1)}>Blue</Button>
                    <Button onPress={() => NumberStore.add()}>Add</Button>
                    {UiStore.displayUndo && <Button onPress={() => globals.resetState()}>Undo</Button>}

                </View>
            </View>
        );
    }
};

export default Main