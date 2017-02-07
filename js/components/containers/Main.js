/**
 * Created by grahamallen on 1/27/17.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer, Provider, inject} from 'mobx-react/native'
import {Button, ListItem, Icon, Input, Container, Content, Header, List, Left, Right, Body, Title} from 'native-base';

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
        this.props.globals.login();
    }

    render() {
        let {UiStore, NumberStore, ColorStore, FormStore} = this.props.stores;
        let globals = this.props.globals;

        const viewStyle = {width: 50, height: 50, backgroundColor: ColorStore.currentColor};

        const undoButton = (
            <Button bordered danger onPress={() => globals.resetState()}>
                <Text>{'Undo'}</Text>
            </Button>
        )

        return (
            <Container>
            <Content>
                <Header  style={{flex: 1, flexDirection: 'row', backgroundColor: ColorStore.currentColor}}>
                    <Left>
                        <Button transparent>
                            <Text style={{color: 'white'}}>{NumberStore.currentNumber}</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>{FormStore.header ? FormStore.header : "Create Form"}</Title>
                    </Body>
                    <Right >
                        <Button transparent>
                            <Text style={{color: 'white'}}>{NumberStore.currentNumber}</Text>
                        </Button>
                    </Right>
                </Header>
                <View style={{flex: 1, width: null, height: null}} >
                        <ListItem style={{width: 300}}>
                            <Input
                                style={{width: 300}} placeholder='Title'
                                value={FormStore.header}
                                onChangeText={(text) => FormStore.header = text}
                            />
                        </ListItem>

                        <ListItem style={{width: 300}}>
                            <Input style={{width: 300}}
                                   placeholder='Description'
                                   value={FormStore.description}
                                   onChangeText={(text) => FormStore.description = text}
                            />
                        </ListItem>
                        <ListItem>
                            <Text>Simon Mignolet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Nathaniel Clyne</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                        </ListItem>
                </View>
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
                    <Button bordered onPress={() => NumberStore.add()}>
                        <Text >{'Add'}</Text>
                    </Button>
                    {UiStore.displayUndo && undoButton}
                </View>
            </Content>
            </Container>
        );
    }
};

export default Main