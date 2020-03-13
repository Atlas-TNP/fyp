// Import the core functionality
import React from 'react';
import {View, Button, TextInput, Text} from 'react-native';

//Exporting screen as a class for use in the Navigator in App.js
export default class GetListing extends React.Component {
    static navigationOptions = {
        title: 'Retrieve data from the Live Database'
    };

//setting the state of the api call to be empty as this is a retrieveal call

//a Firebase Method to retrieve data from the database
//code attapted from https://medium.com/mindorks/firebase-realtime-database-with-react-native-5f357c6ee13b and Firebase Docs


//A formating method to create an array of the data pulled from the database for use in a Text tag later

//Defines the content on the screen
    render() {
        return (
            <View style={{padding: 20, justifyContent: 'center'}}>
                <View style={{padding: 10}}>
                    <Button title='Pull Data'
                        //onPress = { () => } }
                    />
                </View>
                <View style={{padding: 10}}>
                    <Button title='Take me back'
                            onPress={() => this.props.navigation.navigate('AddListing')}
                            color='#ff2020'
                    />
                </View>
                <View style={{padding: 20}}>
                    <Text>
                        Data pulled from database:
                    </Text>
                </View>
            </View>
        )
    }
}
