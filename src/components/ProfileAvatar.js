import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from '../actions/user';

const ProfileAvatar = ({ user, userId, getUser }) => {
  useEffect(() => {
    getUser(userId);
  }, [userId]);

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        source={{
          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
        }}
        size='xlarge'
      />
      <Text style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
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

const mapStateToProps = ({ auth, user }) => {
  return { userId: auth.userId, user };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileAvatar);
