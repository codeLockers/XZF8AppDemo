'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import XZConst from '../../common/XZConst.js'

class XZWrapperItem extends Component{

	render() {
		return(
			<TouchableOpacity>
				<Text style={styles.itemText}>{this.props.title.toUpperCase()}</Text>
			</TouchableOpacity>
			)
	}
}

class XZContainerHead extends Component {

  	render() {

  		const content = React.Children.count(this.props.children) === 0 ? <Text>0</Text> : this.props.children;

    	return (
      		<View>
      			<View style={styles.container}>
	      			<View style={styles.leftView}>
	      			</View>
	      			<View style={{justifyContent: 'center',}}>
	      				{content}
	      			</View>
	      			<View style={styles.rightView}>
	      				<XZWrapperItem title={this.props.rightItem}/>
	      			</View>
      			</View>
      		</View>
    	);
  	}
}

const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		height:(XZConst.NAVIGATION_BAR_HEIGHT-XZConst.STATUS_BAR_HEIGHT),
		marginTop:XZConst.STATUS_BAR_HEIGHT
	},
	leftView:{
		flex: 1,
	},
	rightView:{
		flex: 1,
		alignItems:'flex-end',
		justifyContent: 'center',
		marginRight:10
	},
	itemText:{
		letterSpacing:1,
		fontSize:14,
		color:'white'
	}
});


export default XZContainerHead;