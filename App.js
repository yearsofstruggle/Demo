/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import InputScreen from "./jscode/InputScreen";
import PictureScreen from './jscode/PictureScreen';
import ResultScreen from './jscode/ResultScreen';

const App = StackNavigator({
    InputScreen : { screen : InputScreen },
    PictureScreen : { screen : PictureScreen },
    ResultScreen : { screen : ResultScreen }
}, {
    headerMode : 'screen',
});

export default App;