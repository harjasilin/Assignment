import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Blank from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from "react-redux";

const Data = ({ navigation }) => {
    const realIdUser = useSelector((state) => state.realIdUser.users)
    console.log(realIdUser)
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.headertxt}>Data</Text>

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



});