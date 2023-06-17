import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor:"#3B71F3",
    },

    container_TERTIARY: {
        backgroundColor:"#3B71F3",
        width: '75%',
        padding: 15,
        margin: 10,
        alignItems: 'center',
        borderRadius: 5,
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY: {
        color: 'black',
    },
})

export default styles;