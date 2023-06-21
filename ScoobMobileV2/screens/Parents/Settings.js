import { StyleSheet, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../components/CustomButton';


const Settings = ({ navigation }) => {

    const [parent, setParent] = useState([
        {name: 'John Alexis', id: 'S9876543A', email: 'john@gg.com', phoneNo: '91234567'},
    ]);

    const viewProfileHandler = () => {
        navigation.navigate('ParentsProfile', {parentInfo: parent})
    };

    const logOutHandler = () => {
        navigation.navigate('LoginPage')
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <CustomButton 
                onPress={viewProfileHandler}
                text="View Profile"
                type='TERTIARY'
            />            
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