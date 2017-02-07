/**
 * Created by grahamallen on 1/27/17.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer, Provider, inject} from 'mobx-react/native'
import {Button, ListItem, Icon, Input, Container, Content, Header, List, Left, Right, Body, Title, Footer, FooterTab} from 'native-base';
import FormPage from '../FormPage';
import Controls from '../Controls';
import UndoButton from '../UndoButton'
export const styles = {
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

                    <FormPage />

                    <Controls />

                </Content>
              {UiStore.displayUndo && <UndoButton />}
            </Container>
        );
    }
};

export default Main