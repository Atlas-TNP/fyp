//Importing the core functionality
import React from 'react';
import {View, Button, TextInput, Text, ScrollView} from 'react-native';

//Exporting screen as class for use in stack navigator
export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'My profile'
    };

    //Defines the content on the screen
    render() {
        return (
            <ScrollView>
                <View style={{
                    padding: 10,
                    alignItems: 'center',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <Text>
                        Placeholder text; We're still working on this bit
                    </Text>
                </View>
            </ScrollView>
        )
    }
}
