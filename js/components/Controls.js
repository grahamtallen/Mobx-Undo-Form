/**
 * Created by grahamallen on 2/7/17.
 */


/**
 * Created by grahamallen on 2/7/17.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer, Provider, inject} from 'mobx-react/native'
import {Button, ListItem, Icon, Input, Container, Content, Header, List, Left, Right, Body, Title, Footer, FooterTab} from 'native-base';
import {styles} from './containers/Main'


const Controls = ({stores}) => {
        let {ColorStore} = stores;
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Button style={{backgroundColor: 'red'}} onPress={() => ColorStore.setColor(1)}>
                    <Text style={styles.textStyles}>{'Red'}</Text>
                </Button>
                <Button onPress={() => ColorStore.setColor(0)}>
                    <Text style={styles.textStyles}>{'Blue'}</Text>
                </Button>
                <Button style={{backgroundColor: 'green'}} onPress={() => ColorStore.setColor(2)}>
                    <Text style={styles.textStyles}>{'Green'}</Text>
                </Button>
            </View>
        )
}

export default inject('stores')(Controls)