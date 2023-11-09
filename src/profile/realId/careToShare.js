import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Blank from 'react-native-vector-icons/MaterialCommunityIcons'
import Mobile from 'react-native-vector-icons/AntDesign'
import { useDispatch } from "react-redux";
import { share } from "../../action/careAction";

const CareToShare = ({ navigation }) => {
    const dispatch = useDispatch()
    const [work, setWork] = useState('')
    const [title, setTitle] = useState('')
    const handleAdd = () => {
        if (!work || !title) {
            Alert.alert('Please enter each filed.')
            return;
        }
        const user = {
            work, title
        }
        dispatch(share(user))
        navigation.navigate('Data')
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerWrap}>
                <Icon name="arrow-back" size={25} color="black" onPress={() => navigation.goBack()} />
                <Text style={styles.header}>Care to share?</Text>
                <Blank name="blank" size={25} color="white" />
            </View>


            <View style={{ padding: '10%' }}>
                <Text style={{ color: 'black', fontSize: 12, marginTop: 20, lineHeight: 17 }}>
                    Care to share some more about yourself?This{'\n'}
                    information will be availabe in your Real ID profile.It will{'\n'}
                    be shared with other users should you choose to show{'\n'}
                    them your Real ID.
                </Text>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 20 }}>Where do you work?</Text>
                <View style={styles.input}>
                    <View style={{ marginStart: 10 }}>
                        <Icon name="person-outline" size={18} color="black" />
                    </View>
                    <TextInput
                        placeholder='Stark industries'
                        placeholderTextColor={'gray'}
                        value={work}
                        onChangeText={(e) => setWork(e)}
                    />
                </View>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 20 }}>What's your title/role?</Text>
                <View style={styles.input}>
                    <View style={{ marginStart: 10 }}>
                        <Icon name="person-outline" size={18} color="black" />
                    </View>
                    <TextInput
                        placeholder='ironman'
                        placeholderTextColor={'gray'}
                        value={title}
                        onChangeText={(e) => setTitle(e)}
                    />
                </View>


                <TouchableOpacity onPress={handleAdd}
                    style={styles.btn}>
                    <Text style={styles.btntxt}>Save and continue</Text>
                    <Icon name="arrow-redo-outline" size={25} color="black" />
                </TouchableOpacity>

                <Image source={require('../../assets/Logo.png')}
                    style={styles.image} />
            </View>
        </ScrollView>
    )
}
export default CareToShare
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
    input:
    {
        height: 45,
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btntxt: { color: 'white', fontWeight: 'bold', paddingHorizontal: 10 },
    btn: { marginTop: '40%', backgroundColor: '#E7651C', width: '100%', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
    headerWrap: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, paddingHorizontal: 40 },
    header: {
        fontSize: 20, color: 'black', textAlign: 'center'
    }
});