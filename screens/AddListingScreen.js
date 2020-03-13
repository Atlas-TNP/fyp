// Import the core functionality
import React from 'react';
import {ScrollView, Image, View, Button, TextInput, Text} from 'react-native';

//Mongodb import
const {Stitch, AnonymousCredential} = require('mongodb-stitch-react-native-sdk');
const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');


//Exporting screen as a class for use in the Navigator in App.js
export default class AddListing extends React.Component {
    static navigationOptions = {
        title: 'Publish a New Listing'
    };

    state = {  }

    //Code to load stitch into the App
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
        return (
            <View style={{padding: 20}}>
                <View style={{padding: 30, alignItems: 'center'}}>
                    <TextInput placeholder='Listing Name'
                               style={{padding: 5, width: '80%', borderBottomColor: 'grey', borderBottomWidth: 1}}
                               autoCapitalize="none"
                               maxLength={50}/>
                    <TextInput placeholder='Listing Description'
                               style={{padding: 5, width: '80%', borderBottomColor: 'grey', borderBottomWidth: 1}}
                               autoCapitalize="none"
                               maxLength={160}
                               multiline
                               numberOfLines={5}/>
                    <TextInput placeholder='Contactable Phone/Email'
                               style={{padding: 5, width: '80%', borderBottomColor: 'grey', borderBottomWidth: 1}}
                               autoCapitalize="none"/>
                </View>
                <View style={{padding: 20, justifyContent: 'center'}}>
                    <Button
                        title='Publish Listing'
                        onPress={() => this.props.navigation.navigate('GetListing')}
                    />
                </View>
            </View>
        )
    }
}
