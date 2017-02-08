/**
 * Created by grahamallen on 2/8/17.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer, Provider, inject} from 'mobx-react/native'
import {Button, ListItem, Icon, Input, Container, Content, Header, List, Left, Item, Right, Body, Title, Footer, FooterTab} from 'native-base';
import {styles} from './containers/Main'


const SearchDropdown = ({stores, globals}) => {
    let {UserStore, UiStore} = stores;
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Item rounded>
                <Input
                    value={UiStore.searchText}
                    placeholder='Rounded Textbox'
                    onChangeText={(text) => UiStore.searchText = text}
                />
            </Item>
            <List>
                <ListItem>
                    <Text>{globals.searchedUsers.length}</Text>
                </ListItem>
            </List>
        </View>
    )
}

export default inject('stores', 'globals')(observer(SearchDropdown))