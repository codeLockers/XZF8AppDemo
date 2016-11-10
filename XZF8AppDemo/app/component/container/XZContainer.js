'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Animated
} from 'react-native';

import XZStyles from '../../common/XZStyles.js'
import XZConst from '../../common/XZConst.js'
import XZContainerHeadView from './XZContainerHeadView.js'

class XZContainer extends Component {

	constructor(props) {
  		super(props);

  		this.state = {
  			offset:new Animated.Value(0)
  		};
	}

  render() {
    return (
  		
      <View style={XZStyles.styles.container}>

      		<XZContainerHeadView offset={this.state.offset}/>
      		<ScrollView
      		onScroll={(event) => {
      			// console.log('scroll'+event.nativeEvent.contentOffset.y)
      			this.state.offset.setValue(event.nativeEvent.contentOffset.y)
      		}}
      		scrollEventThrottle={16}
      		automaticallyAdjustContentInsets={false}>
      			<View style={{width:100,height:1000,backgroundColor:'green'}}/>
      		</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default XZContainer;