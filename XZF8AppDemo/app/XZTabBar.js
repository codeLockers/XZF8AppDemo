'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TabBarIOS,
} from 'react-native';

import XZColor from './common/XZColors.js'

import XZScheduleScene from './schedule/XZScheduleScene.js'
import XZMyScheduleScene from './mySchedule/XZMyScheduleScene.js'
import XZMapsScene from './maps/XZMapsScene.js'
import XZNotificationScene from './notification/XZNotificationScene.js'
import XZInfoScene from './info/XZInfoScene.js'

class XZTabBar extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	selectedTab:'schedule'
	  };
	}


	 render() {
	    return (
	      	<TabBarIOS
	      	tintColor={XZColor.darkText}
	      	translucent={false}>
	      		<TabBarIOS.Item
	      		title='Schedule'
	      		icon={require('./image/schedule-icon-1.png')}
	      		selectedIcon={require('./image/schedule-icon-1-active.png')}
	   			selected={this.state.selectedTab === 'schedule'}
	   			onPress={() => {
	   				this.setState({
	   					selectedTab:'schedule' 
	   				});
	   			}}>
	   				<XZScheduleScene />
	      		</TabBarIOS.Item>

	      		<TabBarIOS.Item
	      		title='My F8'
	      		icon={require('./image/my-schedule-icon.png')}
	      		selectedIcon={require('./image/my-schedule-icon-active.png')}
	   			selected={this.state.selectedTab === 'myschedule'}
	   			onPress={() => {
	   				this.setState({
	   					selectedTab:'myschedule' 
	   				});
	   			}}>
	   				<XZMyScheduleScene />
	      		</TabBarIOS.Item>

	      		<TabBarIOS.Item
	      		title='Maps'
	      		icon={require('./image/maps-icon.png')}
	      		selectedIcon={require('./image/maps-icon-active.png')}
	   			selected={this.state.selectedTab === 'maps'}
	   			onPress={() => {
	   				this.setState({
	   					selectedTab:'maps' 
	   				});
	   			}}>
	   				<XZMapsScene />
	      		</TabBarIOS.Item>

	      		<TabBarIOS.Item
	      		title='notification'
	      		icon={require('./image/notifications-icon.png')}
	      		selectedIcon={require('./image/notifications-icon-active.png')}
	   			selected={this.state.selectedTab === 'notification'}
	   			onPress={() => {
	   				this.setState({
	   					selectedTab:'notification' 
	   				});
	   			}}>
	   				<XZNotificationScene />
	      		</TabBarIOS.Item>

	      		<TabBarIOS.Item
	      		title='Info'
	      		icon={require('./image/info-icon.png')}
	      		selectedIcon={require('./image/info-icon-active.png')}
	   			selected={this.state.selectedTab === 'info'}
	   			onPress={() => {
	   				this.setState({
	   					selectedTab:'info' 
	   				});
	   			}}>
	   				<XZInfoScene />
	      		</TabBarIOS.Item>
	      	</TabBarIOS>
	    );
	  }
}

const styles = StyleSheet.create({

});


export default XZTabBar;