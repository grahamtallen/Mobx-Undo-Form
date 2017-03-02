/**
 * Created by grahamallen on 2/8/17.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer, Provider, inject} from 'mobx-react/native'
import {Button, ListItem, Icon, Input, InputGroup, Container, Content, Header, List, Left, Item, Right, Body, Title, Footer, FooterTab} from 'native-base';
import {styles} from './containers/Main'


const SearchDropdown = ({stores, globals}) => {
    let {UserStore, UiStore} = stores;
    let {searchedUsers} = globals;
    const shareWithUser = (user) => {
        UserStore.sharedUsers.push(user.user_id);
        UiStore.showUserSearch = false;
    };
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <InputGroup icon>
                <Icon name="md-search" />
                <Input
                    autofocus
                    value={UiStore.searchText}
                    placeholder='Rounded Textbox'
                    onChangeText={(text) => UiStore.searchText = text}
                />
            </InputGroup>
            <View>
                {searchedUsers.filter((user) => UserStore.sharedUsers.indexOf(user.user_id) === -1).map((user) => (
                    <ListItem onPress={shareWithUser}>
                        <Text>{user.name}</Text>
                    </ListItem>
                ))}
            </View>

        </View>
    )
}

export default inject('stores', 'globals')(observer(SearchDropdown))