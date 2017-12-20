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
    let { navigate } = this.props.navigation;

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
            <Text note onPress={() => navigate('Fighter', {fighter})}>View</Text>
          </Right>
        </ListItem>
      );
    });

    return (
      <Container>
        <Header>
          <Body>
            <Left/>
            <Title>
              Character Select
            </Title>
            <Right/>
          </Body>
        </Header>
        <Content>
          <List>
            {fighters} 
          </List>
        </Content>
      </Container>
    );
  }
}


class FighterDetail extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigate } = this.props.navigation;
    const { fighter } = this.props.navigation.state.params;
    let rows = [];
    let fighters = fighter[this.props.fighterIndex];
    let { metadata } = fighter.data;
    fighter.data.forEach((move, i) => {
        rows.push(
          <View key={i}>
            <Text>{ move.metadata }</Text>
          </View>
        );
    });

    return (
      <Container>
        <Header>
          <Left>
            <Thumbnail square size={80} source={fighter.image} />
          </Left>
          <Body>
            <Title>
              {fighter.name}
            </Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Text>
            {metadata.health}
          </Text>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
    view: {
        marginLeft: 250,
    },
});

export const App = StackNavigator({
  Fighters: {screen: CharacterSelect},
  Fighter: {screen: FighterDetail},
});
