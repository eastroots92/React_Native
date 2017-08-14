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

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
