import { View, Text, Alert, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

const HomePage = ({ navigation }) => {

    const childButtonPress = () => {
        navigation.navigate('ChildProfile')
    }

    return (
        <SafeAreaView style={styles.container}>            
            <CustomButton 
                text="Child 1"
                type='TERTIARY'
                onPress={childButtonPress}
            />
            <CustomButton 
                text="Child 2"
                type='TERTIARY'
                onPress={childButtonPress}
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

export default HomePage