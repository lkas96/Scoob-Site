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

import { COLORS, icons, images, SIZES } from '../constants';


const Login = () => {
    const router = useRouter();
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

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

                <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={() => {router.replace("./ParentsHomePage");}}
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
      
  });