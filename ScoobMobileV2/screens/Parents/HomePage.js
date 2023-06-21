import { StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../components/CustomButton';

const HomePage = ({ navigation }) => {

    const [child, setChild] = useState([
        {name: 'John Alexis', id: '1'},
        {name: 'Random Man', id: '2'},
        {name: 'Eternal Blue', id: '3'},
        {name: 'Long Gone Kid', id: '4'},
        {name: 'Bareback Brother', id: '5'},
        {name: 'Toad Mushroom', id: '6'},
        {name: 'Coder4Lyfe', id: '7'},
        {name: 'Luigi Mario', id: '8'},
        {name: 'Peach Bowser', id: '9'},
        {name: 'Who Is This', id: '10'},
    ]);

    return (
        <SafeAreaView style={styles.container}>  
            <Text style={styles.title}>Child(s)</Text>
            <SafeAreaView style={styles.scrollContainer}>
                <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewItem}
                // keyExtractor={(item) => item.id} //if you want to extract key value
                data={child}
                renderItem={({item}) => (
                    <CustomButton
                        text={`${item.name}`}
                        type='HOME'
                        onPress={() =>
                            navigation.navigate('ChildProfile',{childInfo: item})}
                    />
                )}
            />
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        paddingHorizontal: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    scrollContainer: {
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: 'lightgray',
        margin: 1,
    },
    item: {
        marginTop: 24,
        backgroundColor: 'yellow',
        fontSize: 24,
    },
    scrollViewItem: {
        justifyContent:'center',
        alignSelf: 'stretch',
    },
    image: {
		resizeMode: 'contain',
		height: 20,
		width: 10,
	},
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 10,
        paddingLeft: 10,
	},
});

export default HomePage