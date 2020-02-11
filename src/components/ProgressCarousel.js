import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class ProgressCarousel extends Component {
  state = { activeSlide: 0 };

  _renderItem({ item, index }) {
    // TODO: render real custom component from redux state instead of
    // rendering a mock image
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageSlide}
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'
          }}
        />
      </View>
    );
  }

  get pagination() {
    const { activeSlide } = this.state;
    const entries = ['entry 1', 'entry 2', 'entry 3'];

    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: '#ffffff' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#5C5C5C'
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    const entries = ['entry 1', 'entry 2', 'entry 3'];
    return (
      <View>
        <Carousel
          data={entries}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({ activeSlide: index })}
          itemWidth={250}
          sliderWidth={450}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 30
  },
  imageSlide: {
    height: 200,
    width: 200
  }
});
