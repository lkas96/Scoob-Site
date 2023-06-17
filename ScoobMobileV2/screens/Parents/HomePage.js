import { View, Text, Alert, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

const HomePage = ({ navigation }) => {

    const chatHandler = () => {
        navigation.navigate('ParentsChatPage')
    };

    const viewProfileHandler = () => {
        navigation.navigate('ParentsProfilePage')
    };

    const childInfoHandler = () => {
        navigation.navigate('ParentsChildInfoPage')
    };

    const busServiceHandler = () => {
        navigation.navigate('ParentsBusServicePage')
    };

    const logOutHandler = () => {
        navigation.goBack()
    };
    
    return (
        <View style={styles.container}>
            <Text>{navigation.getParam('username')}</Text>
            <Text>{navigation.getParam('password')}</Text>
            <CustomButton 
                onPress={chatHandler}
                text="Chat"
                type='TERTIARY'
            />

            <CustomButton 
                onPress={viewProfileHandler}
                text="View Profile"
                type='TERTIARY'
            />

            <CustomButton 
                onPress={childInfoHandler}
                text="Child Info"
                type='TERTIARY'
            />

            <CustomButton 
                onPress={busServiceHandler}
                text="Bus Service"
                type='TERTIARY'
            />

            <CustomButton
                onPress={logOutHandler}
                text="Logout"
                type='TERTIARY'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

export default HomePage