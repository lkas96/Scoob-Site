import { View, Text, Alert, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

const HomePage = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>            
            <Text>Welcome Home</Text>
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

export default HomePage