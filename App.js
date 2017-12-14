import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Title, Button, Left, Right } from 'native-base';

import { Fighters } from './data/fighters.js';

class CharacterSelect extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    let fighters = Object.keys(Fighters).map(name => {
      let fighter = Fighters[name];
      return (
        <ListItem key={fighter}>
          <Thumbnail square size={80} source={ fighter.image } />
          <Body>
            <Text>{ fighter.name }</Text>
            <Text note>{ fighter.desc || 'Awakened Talent' }</Text> 
          </Body>
          <Right>
            <Text note onPress={() => navigate('Home')}>View</Text>
          </Right>
        </ListItem>
      );
    });

    // Decide between a list thumbnail, button, or list.

    return (
      <Container>
        <Header>
          <Body>
            <Title>
              Character Select
            </Title>
          </Body>
        </Header>
        <Content>
          <List>
            { fighters } 
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    view: {
        marginLeft: 250,
    },
    cardHeader: {
        marginTop: 15,
        fontSize: 20
    },
    cardBalance: {
        fontSize: 15,
        textAlign: 'center'
    }
});

export const App = StackNavigator({
  Fighters: {screen: CharacterSelect},
});