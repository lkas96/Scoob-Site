import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    View, 
    ScrollView, 
    SafeAreaView, 
    Image,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { COLORS, icons, images, SIZES } from '../constants';


const Login = () => {
    const router = useRouter();
    const users = ["Parent/Guardians", "Third-Party", "Teacher", "Driver"];
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        if (selectedUser === "Parent/Guardians") {
            router.replace("./ParentsHomePage")
        }
        else if (selectedUser === "Third-Party") {
            router.replace("./ThirdPartyHomePage")
        }
        else if (selectedUser === "Teacher") {
            router.replace("./TeacherHomePage")
        }
        else {
            router.replace("./DriverHomePage")
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.orange}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.orange}, 
                    headerShadowVisible: false,
                    headerTitle: ""
                }}            
            />

            <View style={styles.container}>
                
                <Image style={styles.image} source = {require("../assets/images/ScoobLogo.png")}/>

                <StatusBar style="auto" />

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Username"
                        placeholderTextColor="#003f5c"
                        onChangeText={(username) => setusername(username)}
                    /> 
                </View> 

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    /> 
                </View> 

                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text> 
                </TouchableOpacity> 

                <SelectDropdown
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

                <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={() => handleSubmit()}
                >
                    <Text style={styles.loginText}>LOGIN</Text> 
                </TouchableOpacity> 

            </View>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image:{
        resizeMode: 'contain',
        height: 100,
        width: 300,
        margin: 20,
    },
    inputView: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        width: "75%",
        height: 45,
        marginBottom: 10,
        alignItems: "center",
    },
    TextInput: {
        height: 35,
        width: "100%",
        borderRadius: 10,
        flex: 1,
        textAlign: 'center',
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "75%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: COLORS.white,
        textAlign: 'center',
    },
    loginText: {
        color:COLORS.black,
        fontWeight: 'bold',
        fontSize: 14,
    },
    dropdown2BtnStyle: {
        width: '75%',
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 10,
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