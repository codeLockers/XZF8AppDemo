'use strict';

import React, { Component } from 'react';

import {
	Dimensions
} from 'react-native';

module.exports = {
	XZScreen_Width : Dimensions.get('window').width,
	XZScreen_Height : Dimensions.get('window').height
}