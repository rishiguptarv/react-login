import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';
import styled from 'styled-components/native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Login/>
        < StyledText > Rishi Gupta </StyledText>
      </View>
    );
  }
}

const StyledText = styled(Text) `
  font-size: 7;
  text-align: center;
  color: red;
  marginTop: 100px;
`;

