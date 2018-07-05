type Props = {};
import React, {Component} from "react"
import {View, TouchableHighlight, Text, Alert } from 'react-native'
import TouchID from 'react-native-touch-id'

export default class App extends Component<Props> {
    _pressHandler() {
      //config is optional to be passed in on Android
      const optionalConfigObject = {
          title: "Authentication Required", // Android
          color: "#e00606", // Android,
          fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
      }
      TouchID.authenticate('to demo this react-native component', optionalConfigObject)
          .then(success => {
              Alert.alert('Authenticated Successfully');
          })
          .catch(error => {
              Alert.alert('Authentication Failed');
          });
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableHighlight onPress={this._pressHandler}>
                    <Text>
                        Authenticate with Touch ID
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
};