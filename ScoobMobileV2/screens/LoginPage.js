import React , { useState, useEffect}from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../constants';

import CustomButton from '../components/CustomButton';
import Header from '../components/header';

import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
    const navigation = useNavigation();

    const users = ["Parent/Guardians", "Teacher", "Driver"];

    const [credentials, setCredentials] = useState({username: '', password: ''});
  
    const onLoginPressed = () => {
        try{
            console.log(credentials.username, credentials.password);
            // (selectedUser = undefined) is to reset the variable so when the user logs out,
            // the data will be reset rather than saving the previous data
            if (selectedUser === "Parent/Guardians") {
                selectedUser = undefined
                navigation.navigate('ParentsBottomTab');
            }
            else if (selectedUser === "Teacher") {
                selectedUser = undefined
                navigation.navigate('TeachersHomePage');
            }
            else if (selectedUser === "Driver") {
                selectedUser = undefined
                navigation.navigate('DriversHomePage');
            }
            else{
                alert("Please select a user from the dropdown list")    
            }
        } catch(e){
            alert("Please select a user from the dropdown list")
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Image style={styles.image} source = {require("../assets/images/ScoobLogo.png")}/>
                {/* <Header /> */}
                <StatusBar style="auto" />

                <TextInput 
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(val) => setCredentials({ ...credentials, username: val })}
                />

                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(val) => setCredentials({ ...credentials, password: val })}
                    secureTextEntry={true}
                />
                
                <SelectDropdown
                    statlog
                    data={users}
                    defaultButtonText='Select user'
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonStyle={styles.dropdown2BtnStyle}
                    buttonTextStyle={styles.dropdown2BtnTxtStyle}
                    dropdownStyle={styles.dropdown2DropdownStyle}
                    rowStyle={styles.dropdown2RowStyle}
                    rowTextStyle={styles.dropdown2RowTxtStyle}
                    selectedRowStyle={styles.dropdown2SelectedRowStyle}
                    renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        selectedUser = selectedItem;
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />

                <View style={styles.buttonContainer}>
                    <CustomButton text='Login' onPress={onLoginPressed}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        resizeMode: 'contain',
        height: 100,
        width: 300,
        margin: 20,
    },
    buttonContainer: {
        marginTop: 20,
        width: '77%',
    },
    input: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 10,
        padding: 8,
        margin: 5,
        width: '77%',
        height: 50,
    },
    dropdown2BtnStyle: {
        width: '77%',
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginTop: 10,
    },
    dropdown2BtnTxtStyle: {
        color: COLORS.black,
        textAlign: 'center',
        fontSize: 14,
    },
    dropdown2DropdownStyle: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
    },
    dropdown2RowStyle: {
        backgroundColor: COLORS.white, 
        borderBottomColor: COLORS.black,
    },
    dropdown2RowTxtStyle: {
        color: COLORS.black,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    dropdown2SelectedRowStyle: {
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
  });

export default LoginPage