import 'react-native-gesture-handler';
import React , { useState }from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/header';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './routes/AuthNavigator';

// --------------AWS AMPLIFY ----------
import { Auth } from 'aws-amplify';
//-------------------------------------

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
}
