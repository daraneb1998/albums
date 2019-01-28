/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/header';
import AlbumsList from './src/components/AlbumsList';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumsList />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }
});
