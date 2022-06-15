import React from 'react';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get('window').width;
export default class Slides extends React.Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button icon='launch' mode='contained' onPress={this.props.onComplete}>
          Mulai
        </Button>
      );
    }
  }

  renderDot(currentIndex) {
    return this.props.data.map((slide, index) => {
      return (
        <Text
          key={index}
          style={[
            styles.dot,
            { color: index === currentIndex ? '#3F51B5' : '#fff' }
          ]}
        >
          .
        </Text>
      );
    });
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
          <View style={styles.dotContainer}>{this.renderDot(index)}</View>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    padding: 15
  },
  textStyle: {
    fontSize: 30,
    marginBottom: 15,
    color: '#fff'
  },
  buttonStyle: {
    marginTop: 15
  },
  dotContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50
  },
  dot: {
    fontSize: 48
  }
};
