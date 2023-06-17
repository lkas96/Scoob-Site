import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import { useRouter } from 'expo-router'

const ParentsViewProfile = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
            <View
                style={{
                    flex: 1,
                    padding: SIZES.medium
                }}
            >
            <Text>Homepage</Text>
            </View>
        </SafeAreaView>
  )
}

export default ParentsViewProfile