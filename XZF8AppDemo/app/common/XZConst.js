'use strict';

import React, { Component } from 'react';

import {
	Dimensions,
	Platform
} from 'react-native';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25
const NAVIGATION_BAR_HEIGHT = Platform.OS == 'ios' ? (44+STATUS_BAR_HEIGHT) : (56+STATUS_BAR_HEIGHT)

module.exports = {
	Screen_Width : Dimensions.get('window').width,
	Screen_Height : Dimensions.get('window').height,
	STATUS_BAR_HEIGHT,
	NAVIGATION_BAR_HEIGHT 
}