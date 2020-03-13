//Importing the core functionality
import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';

//Import MongoDB
const { Stitch, AnonymousCredential } = require('mongodb-stitch-react-native-sdk');
const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');

//Exporting screen as class for use in stack navigator
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome! Please login'
  }

  state = {
        currentUserId: undefined,
        client: undefined,
        atlasClient: undefined,
        db: undefined,
        collection: undefined,
        usrname: undefined,
  }

  _loadClient() {
        Stitch.initializeDefaultAppClient('jm-fyp-muanx').then(client => {
            this.setState({client});
            const dbClient = client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
            this.setState({atlasClient: dbClient});
            this.setState({db: dbClient.db("ROMDB")});
        });
  }

  _onPressLogin() {
      this.state.client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
            console.log(`Successfully logged in as user ${user.id}`);
            this.setState({ currentUserId: user.id })
      }).catch(err => {
            console.log(`Failed to log in anonymously: ${err}`);
            this.setState({ currentUserId: undefined })
      });
  }

  //Defines the content on the screen
    render() {
        return(
            <View style = { { padding: 20 } }>
              <View style = { { padding: 30 , alignItems: 'center' } }>
                <TextInput placeholder = 'Email Address' style = { { padding: 5, width: '80%', borderBottomColor: 'grey', borderBottomWidth: 2} }
                autoCapitalize="none" />
                <TextInput placeholder = 'Password' style = { { padding: 5, width: '80%', borderBottomColor: 'grey', borderBottomWidth: 2} }
                autoCapitalize="none" secureTextEntry={true} />
                </View>
              <View style = { { padding: 20, justifyContent: 'center' } }>
                <Button
                  title='Login'
                  onPress={() => this.props.navigation.navigate('HomeFeed')}
                />
              </View>
              <View style = { { padding: 20, justifyContent: 'center' } }>
                <Button
                  title='Or Register'
                  color='grey'
                  onPress={() => this.props.navigation.navigate('Register')}
                />
              </View>
            </View>
    )}
}
