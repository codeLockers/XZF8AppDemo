'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  ListView,
  Text,
  Animated
} from 'react-native';

import XZConst from '../../common/XZConst.js'

class XZContainerViewPage extends Component {

	constructor(props) {
	  super(props);
		var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})

		let datas = []

		for (var i = 0; i <100; i++) {
			datas.push(i)
		}

		// console.log(datas)
	  this.state = {
	  	dataSource:ds.cloneWithRows(datas),
	  	width:0,
	  	height:0,
	  	// offset_y:new Animated.Value(0)
	  };
	}


  render() {
    return (
    	<ScrollView 
    	style={styles.container}
    	horizontal={true}
    	scrollEventThrottle={100}
        removeClippedSubviews={true}
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onLayout={(event) => {
        	this.setState({
        		width: event.nativeEvent.layout.width,
        		height:event.nativeEvent.layout.height
        	});
        }}>
    		<View style={{width:this.state.width,height:this.state.height}}>
 				<ListView
 				dataSource={this.state.dataSource}
 				renderRow={(rowData) => <View style={{backgroundColor:'white'}}><Text>{rowData}</Text></View>}
 				renderHeader={() => {
 					return(
 						<View style={{backgroundColor:'transparent',height:200-64}}></View>
 						)
 				}}
 				onScroll={(event) => {

 					this.props.handleScroll(event.nativeEvent.contentOffset.y)
 				}}
 				/>
 			</View>
    	</ScrollView>
    );
  }
}

const styles = StyleSheet.create({ 
	container:{
		flex: 1,
		backgroundColor:'transparent',
		// borderWidth:5,
		// borderColor:'purple',
	}
});


export default XZContainerViewPage;
// <View style={{height:300,width:XZConst.Screen_Width,backgroundColor:'red'}}/>
   		// <View style={{height:300,width:XZConst.Screen_Width,backgroundColor:'gray'}}/>