import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { signIn as inside } from "../action/authAction";
import { useSelector, useDispatch } from "react-redux";

const SignIn = ({ navigation }) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    const users = useSelector((state) => state.user.users)
    const handleSignIn = () => {
        const existingUser = users.filter((user) => user.value.email === email)
        if (existingUser.length > 0) {
            const existingPassword = existingUser[0].value.password
            if (existingPassword === password) {
                dispatch(inside(existingUser[0]));
                navigation.navigate('SetUpPage')
            } else {
                Alert.alert('Enter valid  password')
            }
        } else {
            Alert.alert('Enter valid email')
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../assets/Logo.png')}
                style={styles.image} />
            <View style={styles.page}>
                <Text style={styles.textField}>E-mail</Text>
                <View style={styles.input}>
                    <View style={styles.ms10}>
                        <Icon name="person-outline" size={18} color="black" />
                    </View>
                    <TextInput
                        placeholder='Enter your e-mail'
                        placeholderTextColor={'gray'}
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                    />
                </View>
                <View style={styles.passwordPor}>
                    <Text style={styles.passwordtxt}>Password</Text>
                    <TouchableOpacity>
                        <Text style={styles.forgottxt}>Forgot password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.input}>
                    <View style={styles.ms10}>
                        <Icon name="bag-outline" size={18} color="black" />
                    </View>
                    <TextInput
                        placeholder='Choose a password'
                        placeholderTextColor={'gray'}
                        style={{ width: '75%' }}
                        value={password}
                        secureTextEntry={!passwordVisible}
                        onChangeText={(e) => setPassword(e)}
                    />
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Icon name={passwordVisible ? "eye-off" : "eye"} size={18} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.lang}>Language</Text>
                <View style={{ ...styles.input }}>
                    <View style={styles.ms10}>
                        <Icon name="aperture-sharp" size={18} color="black" />
                    </View>
                    <TextInput
                        placeholder='English'
                        placeholderTextColor={'black'}
                    // value={password}
                    // secureTextEntry={true}
                    // onChangeText={(e) => setPassword(e)}
                    />
                </View>
                <TouchableOpacity onPress={handleSignIn}
                    style={styles.btn}>
                    <Text style={styles.btnText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}
                    style={styles.account}>
                    <Text style={styles.accountText}>Create new account</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default SignIn
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 120,
        height: 120,
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
    textField: {
        color: 'black', fontSize: 16
    },
    accountText: { color: '#E7651C', fontWeight: 'bold' },
    account: { marginTop: 20, width: '100%', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: '#E7651C' },
    btnText: { color: 'white', fontWeight: 'bold' },
    btn: { marginTop: '50%', backgroundColor: '#E7651C', width: '100%', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center' },
    page: { padding: '10%' },
    ms10: { marginStart: 10 },
    passwordPor: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
    passwordtxt: { color: 'black', fontSize: 16 },
    forgottxt: { color: 'black', fontSize: 12, color: '#E7651C' },
    lang: { color: 'black', fontSize: 16, marginTop: 20 }
});