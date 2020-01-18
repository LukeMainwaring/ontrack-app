import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

const ProfileAvatar = ({}) => {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        source={{
          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
        }}
        size='xlarge'
      />
      <Text style={styles.name}>Luke Mainwaring</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  name: {
    fontSize: 25,
    fontWeight: '600'
  }
});

export default ProfileAvatar;
