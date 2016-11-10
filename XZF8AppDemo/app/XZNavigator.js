'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Navigator
} from 'react-native';

import XZTabBar from './XZTabBar.js'

class XZNavigator extends Component {

	renderScene(route,navigator){

		return(<route.component {...route} navigator={navigator} />)
	}

  	render() {
    	return (
      		<Navigator
      		initialRoute={{title:'schedule',component:XZTabBar}}
      		renderScene={this.renderScene}
      		/>
    	);
  	}
}

const styles = StyleSheet.create({

});


export default XZNavigator;