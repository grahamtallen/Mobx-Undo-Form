/**
 * Created by grahamallen on 2/7/17.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer, Provider, inject} from 'mobx-react/native'
import {Button, ListItem, Icon, Input, Container, Content, Header, List, Left, Right, Body, Title, Footer, FooterTab} from 'native-base';
import {styles} from './containers/Main'

@inject('stores', 'globals') @observer
export default class FormPage extends Component {
    render() {

        let {NumberStore, FormStore} = this.props.stores;

        return (
            <View  >
                <ListItem style={{width: 300}}>
                    <Input
                        style={{width: 300}} placeholder='Title'
                        value={FormStore.header}
                        onChangeText={(text) => FormStore.header = text}
                        autoCapitalize="sentences"
                    />
                </ListItem>
                <ListItem style={{width: 300}}>
                    <Input
                        style={{width: 300}}
                        placeholder='Description'
                        value={FormStore.description}
                        onChangeText={(text) => FormStore.description = text}
                    />
                </ListItem>
                <ListItem>
                    <Text>{'Shared Users: ' + NumberStore.currentNumber}</Text>
                    <Right>
                        <Button bordered onPress={() => NumberStore.add()}>
                            <Text >{'Add'}</Text>
                        </Button>
                    </Right>
                </ListItem>
            </View>
        )
    }
}