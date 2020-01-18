import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Button, withTheme } from 'react-native-elements';

const DATA = [
  { category: 'Month Progress', value: '70%' },
  { category: 'Year Progress', value: '40%' },
  { category: 'End Progress', value: '20%' },
  { category: 'Badges Earned', value: '3' },
  { category: 'Goal Date', value: 'Dec 2022' },
  { category: 'Recurring', value: '$300 Monthly' }
];

// For alternating colors
const COLORS = ['#303C6C', '#F4976C'];

const UserProgress = ({}) => {
  renderProgressItem = (item, index) => {
    return (
      <View style={styles.progressItem}>
        <Text style={styles.progressItemCategory}>{item.category + ': '}</Text>
        <Text
          style={{
            color: COLORS[index % 2],
            fontSize: 20,
            fontWeight: 'bold'
          }}
        >
          {item.value}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        scrollEnabled={false}
        data={DATA}
        keyExtractor={result => result.category}
        style={styles.progressList}
        renderItem={({ item, index }) => {
          return renderProgressItem(item, index);
        }}
      />

      <Button
        buttonStyle={styles.button}
        title='Make a Payment'
        titleStyle={styles.buttonTitle}
        onPress={() => console.log('Making a payment')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    width: 275
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  progressItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    width: 300
  },
  progressItemCategory: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  progressList: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 100
  }
});

export default UserProgress;
