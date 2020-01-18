import React from 'react';
import { StyleSheet } from 'react-native';
import UserProgress from '../components/UserProgress';
import OntrackHeader from '../components/OntrackHeader';

const HomeScreen = ({}) => {
  return (
    <>
      <OntrackHeader title='OnTrack' />
      <UserProgress />
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
