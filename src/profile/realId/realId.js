import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Blank from 'react-native-vector-icons/MaterialCommunityIcons'
import Mobile from 'react-native-vector-icons/AntDesign'
import { launchImageLibrary } from 'react-native-image-picker';
import { realId } from "../../action/realIdAction";
import { useDispatch } from "react-redux";

const RealId = ({ navigation }) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [imageURL, setImageURL] = useState('')

    const onpickerClick = async () => {
        const options = {
        }
        const result = await launchImageLibrary(options);
        setImageURL(result.assets[0]?.uri)
    }
    const isValidEmail = (email) => {
        const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailPattern.test(email);

    };
    const handleAdd = () => {
        if (!email || !userName || !firstName || !lastName || !phone || !imageURL) {
            Alert.alert('Please enter each filed.')
            return;
        }
        if (!isValidEmail(email)) {
            Alert.alert('Invalid email address');
            return;
        }
        if (phone.length !== 10) {
            Alert.alert('Please enter valid phone number')
            return;
        }

        const user = {
            email,
            userName,
            firstName,
            lastName,
            phone,
            imageURL

        }
        dispatch(realId(user))
        navigation.navigate('CareToShare')
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerWrap}>
                <Icon name="arrow-back" size={25} color="black" onPress={() => navigation.goBack()} />
                <Text style={styles.headertxt}>Real ID</Text>
                <Blank name="blank" size={25} color="white" />
            </View>
            <TouchableOpacity onPress={onpickerClick} style={styles.camera}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={{ uri: imageURL ? imageURL : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=' }} style={{ height: 100, width: 100, borderRadius: 50 }} />
                </View>

            </TouchableOpacity>

            <View style={{ padding: '10%' }}>
                <Text style={{ color: 'black', fontSize: 16 }}>E-mail</Text>
                <View style={{ ...styles.input, backgroundColor: 'gray' }}>
                    <View style={styles.ms10}>
                        <Icon name="person-outline" size={18} color="white" />
                    </View>
                    <TextInput
                        placeholder='tony2jvj.com'
                        placeholderTextColor={'white'}
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                    />
                </View>
                <Text style={styles.textInputWrap}>User name *</Text>
                <View style={styles.input}>
                    <View style={styles.ms10}>
                        <Icon name="person-outline" size={18} color="black" />
                    </View>
                    <TextInput
                        placeholder='ironman'
                        placeholderTextColor={'gray'}
                        value={userName}
                        onChangeText={(e) => setUserName(e)}
                    />
                </View>
                <Text style={styles.textInputWrap}>First name *</Text>
                <View style={styles.input}>
                    <View style={styles.ms10}>
                        <Icon name="person-outline" size={18} color="black" />
                    </View>
                    <TextInput
                        placeholder='ironman'
                        placeholderTextColor={'gray'}
                        value={firstName}
                        onChangeText={(e) => setFirstName(e)}
                    />
                </View>
                <Text style={styles.textInputWrap}>Last name *</Text>
                <View style={styles.input}>
                    <View style={styles.ms10}>
                        <Icon name="person-outline" size={18} color="black" />
                    </View>
                    <TextInput
                        placeholder='ironman'
                        placeholderTextColor={'gray'}
                        value={lastName}
                        onChangeText={(e) => setLastName(e)}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, gap: 10 }}>
                    <View style={{ width: '30%' }}>
                        <Text style={{ color: 'black', fontSize: 16, }}>Country</Text>
                        <View style={styles.input}>
                            <View style={styles.ms10}>
                                <Icon name="aperture-sharp" size={18} color="black" />
                            </View>
                            <TextInput
                                placeholder='+91'
                                placeholderTextColor={'gray'}
                            // value={password}
                            // secureTextEntry={true}
                            // onChangeText={(e) => setPassword(e)}
                            />
                            <View style={{ justifyContent: 'flex-end' }}>
                                <Mobile name="down" size={18} color="black" />

                            </View>
                        </View>
                    </View>

                    <View style={{ width: '65%' }}>
                        <Text style={{ color: 'black', fontSize: 16, }}>Mobile</Text>
                        <View style={styles.input}>
                            <View style={styles.ms10}>
                                <Mobile name="mobile1" size={18} color="black" />
                            </View>
                            <TextInput
                                placeholder='xxx-xx xx xxx'
                                placeholderTextColor={'gray'}
                                keyboardType="numeric"
                                value={phone}
                                maxLength={10}
                                onChangeText={(e) => setPhone(e)}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={handleAdd}
                    style={styles.btn}>
                    <Text style={styles.saveText}>Save and continue</Text>
                    <Icon name="arrow-redo-outline" size={25} color="black" />
                </TouchableOpacity>

                <Image source={require('../../assets/Logo.png')}
                    style={styles.image} />
            </View>
        </ScrollView>
    )
}
export default RealId
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
    saveText: { color: 'white', fontWeight: 'bold', paddingHorizontal: 10 },
    btn: { marginTop: '10%', backgroundColor: '#E7651C', width: '100%', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
    headerWrap: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, paddingHorizontal: 40 },
    headertxt: { fontSize: 20, color: 'black', textAlign: 'center' },
    camera: { marginTop: 30, alignSelf: 'center', },
    ms10: { marginStart: 10 },
    textInputWrap: { color: 'black', fontSize: 16, marginTop: 20 }

});