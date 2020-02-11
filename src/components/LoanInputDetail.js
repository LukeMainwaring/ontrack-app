import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const LoanInputDetail = () => {
  return (
    <Header
      containerStyle={styles.headerContainer}
      centerComponent={{ text: 'Loan Breakdown', style: styles.headerTitle }}
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

export default LoanInputDetail;
