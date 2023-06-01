import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Image, StyleSheet, Text} from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import {
    ScreenHeaderBtn, Welcome
} from '../components';

const ParentsHomePage = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.white}, 
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl = {icons.menu} dimension="80%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl = {icons.user} dimension="80%" />
                    ),
                    headerTitle: "ThirdParty"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome 
                    
                    />
                    <Text onPress={() => {router.replace("./")}}>Logout</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ParentsHomePage;

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        height: 40,
        width: 100,
        padding: 20,
    }
})