// Import the core functionality
import React from 'react';
//Import the essentials for screen navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//Import UI Elements
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
//Import screens from .js file
import GetListingScreen from './screens/GetListingScreen';
import AddListingScreen from './screens/AddListingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeFeedScreen from './screens/HomeFeedScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';


//importing the mongodb stitch tools
const {Stitch, AnonymousCredential} = require('mongodb-stitch-react-native-sdk');
const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');

//The main navigator for the whole application UI
const MainNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        AddListing: AddListingScreen,
        GetListing: GetListingScreen,
        HomeFeed: HomeFeedScreen,
        Register: RegisterScreen,
        Profile: ProfileScreen
    },
    {
        intialRouteName: 'Login'
    }
);

//Creates the Navigator
const App = createAppContainer(MainNavigator);
export default App;
