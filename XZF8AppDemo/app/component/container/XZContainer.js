'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Animated,
  Text
} from 'react-native';

import XZStyles from '../../common/XZStyles.js'
import XZConst from '../../common/XZConst.js'
import XZContainerHead from './XZContainerHead.js'
import XZContainerBackgroundView from './XZContainerBackgroundView.js'
import XZContainerViewPage from './XZContainerViewPage.js'

const EMPTY_CELL_HEIGHT = 200


class XZContainer extends Component {

	constructor(props) {
  		super(props);

  		this.state = {
  			offset_y:new Animated.Value(0)
  		};
	}

  /**
   * 滑动回调
   * @param  {float} offset 位移距离
   */
  _handleScroll(offset){
    this.state.offset_y.setValue(offset)
  }

  _renderHeadTitle(){

    var opacity = this.state.offset_y.interpolate({
      inputRange:[0,EMPTY_CELL_HEIGHT],
      outputRange:[0,1],
      extrapolate:'clamp'
    })

    return (
      <Animated.Text style={{opacity:opacity,color:'white',fontSize:20,fontWeight:'bold'}}>
        {this.props.title}
      </Animated.Text>
      )
  }

  _renderBackgroundContent(){
    return(
        <Text style={{fontSize:42,fontWeight:'bold',color:'white'}}>{this.props.title}</Text>
      )
  }

  render() {
    return (
  		
      <View style={{flex: 1,}}>

        <XZContainerBackgroundView
        minHeight={64}
        maxHeight={EMPTY_CELL_HEIGHT}
        offset={this.state.offset_y}
        >
        {this._renderBackgroundContent()}
        </XZContainerBackgroundView>

        <XZContainerHead
        rightItem={this.props.rightItem}>
          {this._renderHeadTitle()}
        </XZContainerHead>

        <XZContainerViewPage 
        handleScroll={this._handleScroll.bind(this)}
        />
      </View>
    );
  }
}




const styles = StyleSheet.create({

});


export default XZContainer;