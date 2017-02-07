
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer, Provider, inject} from 'mobx-react/native'
import {Button, ListItem, Icon, Input, Container, Content, Header, List, Left, Right, Body, Title, Footer, FooterTab} from 'native-base';
import {styles} from './containers/Main'


const Controls = ({stores, globals}) => {
    let {ColorStore} = stores;
    return (
        <Footer style={{backgroundColor: ColorStore.currentColor}}>
            <FooterTab>
                <Button onPress={() => globals.resetState()}>
                    <Text style={styles.textStyles}>{'Undo'}</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
}

export default inject('stores', 'globals')(observer(Controls))