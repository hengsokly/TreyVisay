// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React, { Component } from 'react';
import { Platform, AppRegistry, Text } from 'react-native';

import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';
import { FontSetting } from './app/assets/style_sheets/font_setting';
import App from './app';

import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

const customTextProps = {
  style: {
    fontSize: FontSetting.text,
    color: 'black',
    ...Platform.select({
      android: {
        fontFamily: 'Kantumruy',
        lineHeight: 38,
      },
      ios: {
        fontFamily: 'HelveticaNeue',
        lineHeight: 0,
      }
    })

  }
};

const customTextInputProps = {
  style: {
    height: 48,
    fontSize: FontSetting.text,
    ...Platform.select({
      android: {
        fontFamily: 'Kantumruy',
        lineHeight: 48,
      },
      ios: {
        fontFamily: 'HelveticaNeue',
        lineHeight: 28
      }
    })
  }
};

setCustomText(customTextProps);
setCustomTextInput(customTextInputProps);

export default class TreyVisay extends Component {
  render() {
    return(
      <StyleProvider style={getTheme(commonColor)}>
        <App/>
      </StyleProvider>
    )
  }
}

AppRegistry.registerComponent('TreyVisay', () => TreyVisay);
