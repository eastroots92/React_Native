import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class CustomText extends Component {
  render() {
    return (
      <Text>{this.props.text}</Text>
    )
  }
}


class gitbookTest2 extends Component {
  componentWillMount() {
    this.setState({
      inputText: '',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40,borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => {
            console.log(text)
            this.setState({inputText: text})
          }}
          value={this.state.inputText}
          />
        <CustomText text={this.state.inputText}/>
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

AppRegistry.registerComponent('gitbookTest2', () => gitbookTest2);
