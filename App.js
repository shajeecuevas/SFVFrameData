//Decide between a list thumbnail, button, or list.

import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Title, Button } from 'native-base';

// const App = StackNavigator({
//   Home: { screen: CharacterSelect }
// });


export default class CharacterSelect extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>
            CharacterSelect
          </Title>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Abigail.png') } />
              <Body>
                <Text>Abigail</Text>
                <Button style={styles.view} transparent onPress={() => navigate('Home')}><Text>View</Text></Button>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Akuma.png') } />
              <Body>
                <Text>Akuma (Gouki)</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Alex.png') } />
              <Body>
                <Text>Alex</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Balrog.png') } />
              <Body>
                <Text>Balrog (Boxer)</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Birdie.png') } />
              <Body>
                <Text>Birdie</Text>
                <Text note>Headbutt Happy Glutton</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Cammy.png') } />
              <Body>
                <Text>Cammy</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Chun-Li.png') } />
              <Body>
                <Text>Chun-Li</Text>
                <Text note>Description Here</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Dhalsim.png') } />
              <Body>
                <Text>Dhalsim</Text>
                <Text note>Description Here</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Ed.png') } />
              <Body>
                <Text>Ed</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/FANG.png') } />
              <Body>
                <Text>F.A.N.G</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Guile.png') } />
              <Body>
                <Text>Guile</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Ibuki.png') } />
              <Body>
                <Text>Ibuki</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Juri.png') } />
              <Body>
                <Text>Juri</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Karin.png') } />
              <Body>
                <Text>Karin</Text>
                <Text note>Description Here</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Ken.png') } />
              <Body>
                <Text>Ken</Text>
                <Text note>Description Here</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Kolin.png') } />
              <Body>
                <Text>Kolin</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Laura.png') } />
              <Body>
                <Text>Laura</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/MBison.png') } />
              <Body>
                <Text>M.Bison (Dictator)</Text>
                <Text note>Description Here</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Menat.png') } />
              <Body>
                <Text>Menat</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Necalli.png') } />
              <Body>
                <Text>Necalli</Text>
                <Text note>Description Here</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Rashid.png') } />
              <Body>
                <Text>Rashid</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/RMika.png') } />
              <Body>
                <Text>R.Mika</Text>
                <Text note>Description Here</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Ryu.png') } />
              <Body>
                <Text>Ryu</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Urien.png') } />
              <Body>
                <Text>Urien</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Vega.png') } />
              <Body>
                <Text>Vega (Claw)</Text>
                <Text note>Description Here</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Zangief.png') } />
              <Body>
                <Text>Zangief</Text>
                <Text note>Description Here</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={ require('./images/Zeku.png') } />
              <Body>
                <Text>Zeku</Text>
                <Text note>Awakened Talent</Text>
              </Body>
            </ListItem>
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
