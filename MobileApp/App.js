/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import LoginScreen from './src/Views/LoginScreen/LoginScreen'
import CameraViewScreen from './src/Views/CameraViewScreen/CameraViewScreen'
import LandingScreen from './src/Views/LandingScreen/LandingScreen'
import PhotoLandingScreen from './src/Views/PhotoLandingScreen/PhotoLandingScreen'
import FormScreen from './src/Views/FormScreen/FormScreen'
import GalleryScreen from './src/Views/GalleryScreen/GalleryScreen'
import FeedScreen from './src/Views/FeedScreen/FeedScreen'
import ProfileScreen from './src/Views/ProfileScreen/ProfileScreen'
import SearchScreen from './src/Views/SearchScreen/SearchScreen'
import DiscoverScreen from './src/Views/DiscoverScreen/DiscoverScreen'
import ShowPhotoScreen from './src/Views/ShowPhotoScreen/ShowPhotoScreen'

import Icon from 'react-native-vector-icons/FontAwesome';

const AuthStack = createStackNavigator({
  SignIn: LoginScreen
});

const FeedStack = createStackNavigator({
  FeedScreen: FeedScreen
});

const GalleryStack = createStackNavigator({
  Gallery: GalleryScreen,
});

const CameraStack = createStackNavigator({
  Search: CameraViewScreen,
  FormScreenStack: FormScreen,
  showPhoto:  ShowPhotoScreen,
});

const DiscoverStack = createStackNavigator({
  Discover: DiscoverScreen,
});

const SearchStack = createStackNavigator({
  Search:  SearchScreen,
});

const ProfileStack = createStackNavigator({
  ProfileScreen: ProfileScreen,
});

const MainTabs = createBottomTabNavigator({
  FeedStack: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color="grey" />
      ),
    },
    tabBarOptions: { 
      showIcon: true ,
      showLabel: false
   },
  },
  SearchStack: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={25} color="grey" />
      ),
    },
  },
  PhotoLandingScreen: {
    screen: PhotoLandingScreen,
    navigationOptions: {
      tabBarLabel: 'Photo',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="camera" size={25} color="grey" />
      ),
    },
    tabBarOptions: { showLabel: false }
  },
  Discover: {
    screen: DiscoverStack,
    navigationOptions: {
      tabBarLabel: 'Discover',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="map-marker" size={25} color="grey" />
      ),
    },
    tabBarOptions: { 
      showIcon: true,
      showLabel: false 
   },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" size={25} color="grey" />
      ),
    },
    tabBarOptions: { 
      showIcon: true,
      showLabel: false 
   },
  },
});

const PhotoTabs = createBottomTabNavigator({
  // Gallery: {
  //   screen: GalleryStack,
  //   navigationOptions: {
  //     tabBarLabel: 'Gallery',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="image" size={30} color="grey" />
  //     ),
  //   },
  //   tabBarOptions: { 
  //     showIcon: true 
  //  },
  // },
  Camera: {
    screen: CameraStack,
    navigationOptions: {
      tabBarLabel: 'Camera',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="camera" size={25} color="grey" />
      ),
    },
    tabBarOptions: { 
      showIcon: true 
   },
  },
});

// const MainDrawer = createDrawerNavigator({
//   MainTabs: MainTabs,

// });

const AppModalStack = createStackNavigator(
  {
    App: MainTabs,
    PhotoScreen: {
      screen: PhotoTabs,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const App = createSwitchNavigator({
  Loading: {
    screen: LandingScreen,
  },
  Auth: {
    screen: AuthStack,
  },
  App: {
    screen: AppModalStack,
  },
});

export default createAppContainer(App);