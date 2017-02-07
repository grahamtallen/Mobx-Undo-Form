/**
 * Created by grahamallen on 1/27/17.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer, Provider, inject} from 'mobx-react/native'
import {Button, ListItem, Icon, Input, Container, Content, Header, List, Left, Right, Body, Title, Footer, FooterTab} from 'native-base';

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
            <Footer style={{backgroundColor: ColorStore.currentColor}}>
                <FooterTab>
                    <Button onPress={() => globals.resetState()}>
                        <Text style={styles.textStyles}>{'Undo'}</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )

        return (
            <Container>
            <Content>
                <Header  style={{flex: 1, flexDirection: 'row', backgroundColor: ColorStore.currentColor}}>
                    <Body>
                        <Title>{FormStore.header ? FormStore.header : "Create Form"}</Title>
                    </Body>
                    <Right >
                        <Button transparent>
                            <Text style={{color: 'white'}}>{NumberStore.currentNumber}</Text>
                        </Button>
                    </Right>
                </Header>
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
                            <Input style={{width: 300}}
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

            </Content>
                        {UiStore.displayUndo && undoButton}
            </Container>
        );
    }
};

export default Main