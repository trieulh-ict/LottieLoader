/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Animated,
  Easing,
  Platform,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import {Button, Text} from 'native-base';
import Swiper from 'react-native-swiper';
import LottieView from 'lottie-react-native';
import anim from './assets/motorcycle.json'

const phases = [
  [
    1, 95
  ],
  [95, 160]
]

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switched: true
    }
  }
  componentDidMount() {
    console.log(this.animation)
    // this.switchFrames() const Dimensions = require('Dimensions'); const {height,
    // width} = Dimensions.get('window') console.log(height, width)
  }

  switchFrames() {
    this.setState(previousState => {
      return {
        ...previousState,
        switched: !previousState.switched
      }
    })

    console.log(this.state)

    phase = this.state.switched
      ? phases[0]
      : phases[1]

    console.log(phase)
    this
      .animation
      .reset()
    this
      .animation
      .play(phase[0], phase[1])
  }

  onScroll(e, state, context) {
    // console.log(e, state, context)
  }

  handleScroll(event) {
    // console.log(event.nativeEvent.contentOffset.x)
    const x = event.nativeEvent.contentOffset.x
    const Dimensions = require('Dimensions');
    const width = Dimensions
      .get('window')
      .width
    const currentFrame = Math.round(150 * x / ((3 - 1) * width))

    this.animation.reset()
    this.animation.play(currentFrame, currentFrame)
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <LottieView
            style={{
            width: 200,
            height: 200
          }}
            autoplay={false}
            ref={animation => {
            this.animation = animation
          }}
            source={require('./assets/motorcycle.json')}/>
        </View>
        <Text style={styles.welcome}>Welcome to Lottie Animations :-)</Text>
        <View>
          <Button onPress={() => this.switchFrames()}>
            <Text>
              Change Frames
            </Text>
          </Button>
        </View>
        <View
          style={{
          flex: 1,
          width: '100%',
          marginTop: 20
        }}>
          <Swiper
            onScroll={this.handleScroll.bind(this)}
            scrollEventThrottle={16}
            loop={false}
            onScrollBeginDrag={(e, state, context) => this.onScroll(e, state, context)}
            style={styles.wrapper}
            showsButtons={true}>

            <View
              style={{
              flex: 1,
              backgroundColor: 'red'
            }}/>
            <View
              style={{
              flex: 1,
              backgroundColor: 'green'
            }}/>
            <View
              style={{
              flex: 1,
              backgroundColor: 'blue'
            }}/>
          </Swiper>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A6207E'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
});
