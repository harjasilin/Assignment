import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";


const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('SignIn');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('./assets/Logo.png')}
                style={styles.image} />
        </View>
    )
}
export default SplashScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E7651C'
    },
    image: {
        width: 128, height: 128
    },
});