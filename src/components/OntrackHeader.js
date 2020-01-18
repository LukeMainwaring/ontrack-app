import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const OntrackHeader = ({ title }) => {
  return (
    <Header
      containerStyle={styles.headerContainer}
      centerComponent={{ text: title, style: styles.headerTitle }}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 125
  },
  headerTitle: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold'
  }
});

export default OntrackHeader;
