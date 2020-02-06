import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import Spacer from './Spacer';
import NavLink from './NavLink';

const LoanInput = ({ title }) => {
  return (
    <View>
      <Header
        containerStyle={styles.headerContainer}
        centerComponent={{ text: 'Loans', style: styles.headerTitle }}
      />
      <Card
        containerStyle={styles.cardStyle}
        // title='Welcome back!'
        // titleStyle={styles.cardTitleStyle}
      >
        <Spacer>
          <Input
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            label='Who is your loan servicer? (e.g. Navient, Nelnet)'
            labelStyle={styles.inputLabel}
          />
        </Spacer>
        <Spacer />
        <Input
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          label='Total Loan Amount'
          labelStyle={styles.inputLabel}
          leftIcon={{
            type: 'material-icons',
            name: 'attach-money'
            // size: 40
            // color: '#BCBCBC'
          }}
          // leftIconContainerStyle={{ paddingRight: 10 }}
        />
        <Spacer />
        <Input
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          label='Number of Loans'
          labelStyle={styles.inputLabel}
        />
        <Spacer />
        <Spacer>
          <NavLink redirectText='Skip for now' routeName='Home' />
        </Spacer>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 45
  },
  headerContainer: {
    height: 125
  },
  headerTitle: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 2,
    borderColor: '#7E7E7E',
    borderRadius: 5
  },
  inputContainer: {
    borderBottomWidth: 0
  },
  inputLabel: {
    color: '#000000',
    fontSize: 20,
    marginBottom: 8
  }
});

export default LoanInput;
