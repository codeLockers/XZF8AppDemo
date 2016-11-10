'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Animated,
  Text,
} from 'react-native';

var resolveAssetSource = require('resolveAssetSource');

import XZConst from '../../common/XZConst.js'

class XZContainerHeadView extends Component {

	static defaultProps = {
	  offset:new Animated.Value(0),
	  maxHeight:200,
	  minHeight:100,
	  
	}

  constructor(props) {
    super(props);
  
    this.state = {
    	shift: new Animated.Value(0)
    };
  }

  renderBackgroundImage(){

  	const source = resolveAssetSource(require('../../schedule/image/schedule-background.png'));
    if (!source) {
      return null
    }

    const translateX = this.state.shift.interpolate({
      inputRange: [0, 1],
      outputRange: [0, XZConst.XZScreen_Width - source.width],
      extrapolate: 'clamp',
    });

    console.log(translateX)

    console.log(source.width)

  	return (
  		<Animated.Image 
  		// style={{flex: 1,}}		
  		source={require('../../schedule/image/schedule-background.png')}/>
  		)
  }

  render() {

  	const {minHeight,maxHeight,offset} = this.props

  	const height = this.props.offset.interpolate({
  		inputRange:[0,maxHeight-minHeight],
  		outputRange:[maxHeight,minHeight],
  		extrapolateRight: 'clamp'
  	})

    return (
      <Animated.View style={{height:height,backgroundColor:'yellow'}}>		
      	{this.renderBackgroundImage()}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({

});


export default XZContainerHeadView;