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
import SearchDropdown from '../SearchDropdown'
export const styles = {
    textStyles: {
        color: 'white'
    }
}


@inject("stores", "globals")
@observer
class Main extends Component {

    componentDidMount(){
        this.props.stores.UserStore.getUsers();
    }

    render() {

        let {UiStore, NumberStore, ColorStore, FormStore} = this.props.stores;
        let globals = this.props.globals;

        const headerStyle = {flex: 1, flexDirection: 'row', backgroundColor: ColorStore.currentColor};
        let headerText = FormStore.header ? FormStore.header : "Create Form";

        return (
            <Container>
                <Content>
                    <Header  style={headerStyle}>
                        <Body>
                            <Title>{headerText}</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text style={styles.textStyles}>{NumberStore.currentNumber}</Text>
                            </Button>
                        </Right>
                    </Header>
                    <Controls />
                    <FormPage />
                    {UiStore.showUserSearch && <SearchDropdown />}
                </Content>
              {UiStore.displayUndo && <UndoButton />}
            </Container>
        );
    }
};

export default Main