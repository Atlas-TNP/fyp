//Importing the core functionality
import React from 'react';
import {View, Button, TextInput, Text} from 'react-native';

//Exporting screen as class for use in stack navigator
export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register'
    };

//A method to validate verification fields match
    checkFieldsMatch = () => {
    };

//Renders screen content
    render() {
        return (
            <View style={{padding: 20}}>
                <View style={{padding: 30, alignItems: 'center'}}>
                    <TextInput placeholder='Email Address'
                               style={{padding: 5, width: '80%', borderBottomColor: 'grey', borderBottomWidth: 2}}
                               autoCapitalize="none"
                    />
                    <TextInput placeholder='Verify email Address'
                               style={{padding: 5, width: '80%', borderBottomColor: 'grey', borderBottomWidth: 2}}
                               autoCapitalize="none"
                    />
                </View>
                <View style={{padding: 30, alignItems: 'center'}}>
                    <TextInput placeholder='Password'
                               style={{padding: 5, width: '80%', borderBottomColor: 'grey', borderBottomWidth: 2}}
                               autoCapitalize="none" secureTextEntry={true}
                    />
                    <TextInput placeholder='Verify password'
                               style={{padding: 5, width: '80%', borderBottomColor: 'grey', borderBottomWidth: 2}}
                               autoCapitalize="none" secureTextEntry={true}
                    />
                </View>
                <View style={{padding: 20, justifyContent: 'center'}}>
                    <Button
                        title='Create Account'
                        onPress={() => this.props.navigation.navigate('HomeFeed')}
                    />
                </View>
                <View style={{padding: 20, justifyContent: 'center'}}>
                    <Text style={{color: 'grey', textAlign: 'center'}}>
                        By clicking "Create Account" you agree to the Terms and Conditions and The Rom Shop Privacy
                        Policy.
                    </Text>
                </View>
            </View>
        )
    }
}
