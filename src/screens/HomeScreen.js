import React from 'react';
import { StyleSheet } from 'react-native';
import UserProgress from '../components/UserProgress';
import OntrackHeader from '../components/OntrackHeader';
import ProgressCarousel from '../components/ProgressCarousel';

const HomeScreen = ({}) => {
  return (
    <>
      <OntrackHeader title='OnTrack' />
      <ProgressCarousel />
      <UserProgress />
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
