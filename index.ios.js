/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import SpeechService from './services/speech.js';


class iHaveToTakeThis extends Component {

  constructor(props) {
    super(props);
    this.speechService = new SpeechService();
  }

  componentDidMount() {
    this.speechService.startListening();
  }

  // setup eventListener
  // 1st Sequence: wait 30 seconds then
  // send phone call

  // binding the function with 'this' which is connected to the class
  onSaveMeClick = () => {
      console.log("We're in the function");
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onSaveMeClick}>
          <Text style={styles.welcome}>
            Get me out of this conversation!
          </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('iHaveToTakeThis', () => iHaveToTakeThis);
