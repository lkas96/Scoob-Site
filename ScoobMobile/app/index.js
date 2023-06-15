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
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';


import { COLORS, SHADOWS, SIZES } from "../constants";

const Login = () => {
    const router = useRouter();
    const users = ["Parent/Guardians", "Third-Party", "Teacher", "Driver"];
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        try{
            // (selectedUser = undefined) is to reset the variable so when the user logs out,
            // the data will be reset rather than saving the previous data
            if (selectedUser === "Parent/Guardians") {
                selectedUser = undefined
                router.replace("./ParentsHomePage")
            }
            else if (selectedUser === "Third-Party") {
                selectedUser = undefined
                router.replace("./ThirdPartyHomePage")
            }
            else if (selectedUser === "Teacher") {
                selectedUser = undefined
                router.replace("./TeacherHomePage")
            }
            else if (selectedUser === "Driver") {
                selectedUser = undefined
                router.replace("./DriverHomePage")
            }
            else{
                alert("Please select a user from the dropdown list")    
            }
        } catch(e){
            alert("Please select a user from the dropdown list")
        }
    };

    const onLoginPressed = () => {
        try{
            // (selectedUser = undefined) is to reset the variable so when the user logs out,
            // the data will be reset rather than saving the previous data
            if (selectedUser === "Parent/Guardians") {
                selectedUser = undefined
                router.replace("./ParentsHomePage")
            }
            else if (selectedUser === "Third-Party") {
                selectedUser = undefined
                router.replace("./ThirdPartyHomePage")
            }
            else if (selectedUser === "Teacher") {
                selectedUser = undefined
                router.replace("./TeacherHomePage")
            }
            else if (selectedUser === "Driver") {
                selectedUser = undefined
                router.replace("./DriverHomePage")
            }
            else{
                alert("Please select a user from the dropdown list")    
            }
        } catch(e){
            alert("Please select a user from the dropdown list")
        }
    };

    const onForgotPasswordPressed = () => {
        router.replace("./Boundary/ForgotPasswordPage")
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
                    <CustomInput 
                        placeholder="Username"
                        value={username}
                        setValue={setUsername} 
                    />
                </View> 
        
                <View style={styles.inputView}>
                    <CustomInput 
                        placeholder="Password"
                        value={password}
                        setValue={setPassword} 
                        secureTextEntry={true}
                    />
                </View> 

                <TouchableOpacity style={styles.forgot_button} onPress={onForgotPasswordPressed}>
                    <Text>Forgot Password?</Text> 
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

                <CustomButton 
                    text='Login'
                    onPress={onLoginPressed}
                />
            </View>
        </SafeAreaView>
    )
}
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
        borderRadius: 10,
        width: "75%",
        marginVertical: 10,
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
        margin: 20,
        fontWeight: 'bold',
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

export default Login;