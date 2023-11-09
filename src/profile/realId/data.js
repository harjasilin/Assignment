import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Blank from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../action/authAction";


const Data = ({ navigation }) => {
    const dispatch = useDispatch()
    const realIdUser = useSelector((state) => state.realIdUser.users)
    const handleLogout = () => {
        dispatch(logout());
        navigation.navigate('SplashScreen')
    };

    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: '10%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.headertxt}>Data</Text>
                    <TouchableOpacity onPress={handleLogout}>
                        <Text style={styles.headertxt}>Logout</Text>
                    </TouchableOpacity>
                </View>
                {realIdUser &&
                    realIdUser?.map((item, index) => (
                        <View style={{ marginTop: 20, padding: 20, justifyContent: 'space-between', flexDirection: 'row', borderWidth: 1, borderColor: 'black' }}>
                            <Image source={{ uri: item.value.imageURL }} style={{ height: 100, width: 100, borderRadius: 50 }} />
                            <View style={{ gap: 10 }}>
                                <Text style={{ color: 'black' }}>{item.value.email}</Text>
                                <Text style={{ color: 'black' }}>User Name : {item.value.userName}</Text>
                                <Text style={{ color: 'black' }}>Phone : {item.value.phone}</Text>
                            </View>
                        </View>
                    ))}
            </View>
        </ScrollView>
    )
}
export default Data
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 40,
        height: 40,
        marginTop: 30,
        alignSelf: 'center',
    },
    headertxt: {
        textAlign: 'center', color: 'black', fontSize: 20
    }


});