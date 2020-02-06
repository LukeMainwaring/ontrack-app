import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoanInput from '../components/LoanInput';

const LoanInputScreen = ({}) => {
  return (
    <View style={styles.container}>
      <LoanInput />
      {/* <Text>LoanInputScreen</Text> */}
    </View>
  );
};

LoanInputScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#303C6C',
    flex: 1
  }
});

export default LoanInputScreen;
