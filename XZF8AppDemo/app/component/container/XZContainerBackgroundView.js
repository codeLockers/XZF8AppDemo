'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Animated,
  Text
} from 'react-native';

var resolveAssetSource = require('resolveAssetSource');

import XZConst from '../../common/XZConst.js'


class XZContainerBackgroundView extends Component {
 	
 	static defaultProps = {
 	  	maxHeight:0,
 	  	minHeight:64
 	}

 	_renderBackgroundImage(){

		const {maxHeight,minHeight,offset} = this.props

	  	const source = resolveAssetSource(require('../../schedule/image/schedule-background.png'));
	    if (!source) {
	      return null
	    }

	    const length = maxHeight-minHeight
	    const translateY = offset.interpolate({
	       inputRange:[0,length/2,length],
	       outputRange:[0, -length/2,-length/1.5],
	       extrapolate:'clamp'
	    })

	    const initialScale = Math.max(XZConst.Screen_Width / source.width * 2 - 1, 1);
	    const scale = offset.interpolate({
	      inputRange: [-length, 0],
	      outputRange: [2, initialScale],
	      extrapolateRight: 'clamp',
	    });

  	return (
  		<Animated.Image 
  		style={{transform:[{translateY},{scale}]}}		
  		source={require('../../schedule/image/schedule-background.png')}/>
  		)
 	}

 	_renderContent(){

 		if (React.Children.count(this.props.children) === 0) {
 			return null
 		}

 		const {maxHeight,minHeight,offset} = this.props

 		const length = maxHeight-minHeight

 		const opacity = offset.interpolate({
 			inputRange:[0,length-40],
 			outputRange:[1,0],
 			extrapolate:'clamp'
 		})

 		const translateY=offset.interpolate({
 			inputRange:[0,length],
 			outputRange:[0, -(length / 2) - 32],
 			extrapolate:'clamp'
 		})

 		return(
 			<Animated.View style={[styles.content,{opacity:opacity,transform:[{translateY}]}]}>
 				{React.Children.only(this.props.children)}
 			</Animated.View>
 			)
 	}

  	render() {

  		const {maxHeight,minHeight,offset} = this.props

  		const height = offset.interpolate({
  			inputRange:[0,maxHeight-minHeight],
  			outputRange:[maxHeight,minHeight],
  			extrapolateRight:'clamp'
  		})

    	return (
     	 <Animated.View
      		style={[styles.container,{height:height}]}>

      		{this._renderBackgroundImage()}
      		{this._renderContent()}
     	 </Animated.View>
    	);
  }
}

const styles = StyleSheet.create({

	container:{
		backgroundColor:'transparent',
		position:'absolute',
		left:0,
		top:0,
		right:0
	},
	content:{
		position:'absolute',
		left:0,
		right:0,
		top:0,
		height:260,
		backgroundColor:'transparent',
		alignItems: 'center',
		justifyContent: 'center',
	}
});


export default XZContainerBackgroundView;