import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton/CustomButton'
const Logout = () => {
    const router = useRouter();
    const onYesPressed = () => {
        router.replace('../../')
    };
    const onNoPressed = () => {
        router.replace('./ParentsNavigation')
    };
    return (
        <View>
        <Text>Confirm Log Out?</Text>
        <CustomButton 
                    text='Yes'
                    onPress={onYesPressed}
                />
        <CustomButton 
                    text='No'
                    onPress={onNoPressed}
                />
        </View>
  )
}

export default Logout