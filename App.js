/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation"

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import homeScreen from './components/homeScreen';
import detailsScreen from './components/detailsScreen';
import aboutUs from "./components/aboutUs";
import contact from "./components/contact";
import service from "./components/service";
import Footer from "./components/Footer";


export const RootStack = createDrawerNavigator(
  {
      Home:homeScreen,
      AboutUs:aboutUs,
      service:service,
      gallery:detailsScreen,
      contact:contact,
      Footer:Footer,
  },
  {
      initialRouteName: "Home",
      activeTintColor: "#fff",
      drawerBackgroundColor: "violet",
      flex: 1,
      contentOptions: {
          activeTintColor: "white",
          inactiveTintColor: "green",         
      }
  }
)
const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  render(){
    return (
      <View style={{backgroundColor:'pink',height:'100%',width:'100%'}}>
        <AppContainer/>
      </View>
      
  );
  }
};

