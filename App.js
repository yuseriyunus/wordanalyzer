import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      inputword : ' ',
      vow: 0,
      cons: 0,
      number: 0
    }
  }

  analyze = () => {
    let v = 0;
    let c = 0;
    let noChar = 0;

    for (let i = 0; i < this.state.inputword.length; i++){
      let ch = this.state.inputword.charAt(i);

      if(ch != ' '){
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
          v++;
          this.setState({vow: v});
        }
        else{
          c++;
          this.setState({cons: c});
        }
        noChar++;
        this.setState({number: noChar});
      }
        
    }
    return;
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>Word Analyzer</Text>
        </View>
        <View style={Styles.container}>
        <TextInput onChangeText={(inputword) => this.setState({inputword})} style={Styles.instructions} placeholder='Type any word'/>
        </View>
        <View style={Styles.container}>
        <Button color="#213452" onPress={this.analyze} title='Analyze'/>
        <Text></Text>
        <Text>Word: {this.state.inputword}</Text>
        <Text>Vowel: {this.state.vow}</Text>
        <Text>Consonant: {this.state.cons}</Text>
        <Text>Number of Words: {this.state.number}</Text>
        </View>
      </View>
    );
  }
}

import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
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
      backgroundColor: '#C0C0C0',
    },
  });