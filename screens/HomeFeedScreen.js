//Importing the core functionality
import React from 'react';
import {ScrollView, View, Button, TextInput, Text, Image, TouchableOpacity} from 'react-native';

//Exporting screen as class for use in stack navigator
export default class HomeFeedScreen extends React.Component {
    static navigationOptions = {
        title: 'The ROM Shop'
    };

    render() {
        return (
            <ScrollView>
                <View style={{padding: 20, alignItems: 'center'}}>
                    <Text style={{color: 'grey', textAlign: 'center'}}>
                        My Dashboard
                    </Text>
                </View>

                <View style={{
                    padding: 10,
                    alignItems: 'center',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <View>
                        <TouchableOpacity activeOpacity={.5} onPress={() => this.props.navigation.navigate('Profile')}>
                            <Image source={require('../img/person.png')}/>
                        </TouchableOpacity>
                        <Text style={{textAlign: 'center'}}>My Account</Text>
                    </View>

                    <View>
                        <TouchableOpacity activeOpacity={.5}>
                            <Image source={require('../img/search.png')}/>
                        </TouchableOpacity>
                        <Text style={{textAlign: 'center'}}>Search</Text>
                    </View>
                </View>

                <View style={{
                    padding: 10,
                    alignItems: 'center',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <View>
                        <TouchableOpacity activeOpacity={.5}
                                          onPress={() => this.props.navigation.navigate('AddListing')}>
                            <Image source={require('../img/add_box.png')}/>
                        </TouchableOpacity>
                        <Text style={{textAlign: 'center'}}>Add a Listing</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
