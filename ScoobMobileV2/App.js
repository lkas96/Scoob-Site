import React , { useState }from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/header';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    <Navigator />
  );
}