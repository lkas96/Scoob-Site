import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React, {useState, Component} from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput'
import {COLORS, SIZES} from '../../constants'
import { Stack, useRouter } from 'expo-router';

const ForgotPasswordPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');

    const onSendPressed = () => {
        
    };

    const onBackPressed = () => {
        router.replace("../index")
    };
    return (
    <SafeAreaView style={{backgroundColor: COLORS.orange, flex: 1}}>
        <Stack.Screen 
            options={{
                headerStyle: {backgroundColor: COLORS.orange,}, 
                headerShadowVisible: false,
                headerTitle: "Forget Password",
            }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <CustomInput 
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                    type="FP"
                />
                <CustomButton text="Send" onPress={onSendPressed}/>
                <CustomButton text="Back to Sign in" type="TERTIARY" onPress={onBackPressed}/>

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: COLORS.orange,
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },
})
export default ForgotPasswordPage