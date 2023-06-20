import { View, Text, Alert, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

const Settings = ({ navigation }) => {

    const logOutHandler = () => {
        navigation.navigate('LoginPage')
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <CustomButton
                onPress={logOutHandler}
                text="Logout"
                type='TERTIARY'
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Settings