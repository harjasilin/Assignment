import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import PasswordText from "../component/passwordText";
import axios from "axios";
import { signUp } from "../action/authAction";
import { useDispatch } from "react-redux";

const SignUp = ({ navigation }) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };
    const isValidEmail = (email) => {
        const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailPattern.test(email);

    };
    const isValidPassword = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    }
    const handleAdd = () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert('Please enter each filed.')
            return;
        }
        if (!isValidEmail(email)) {
            Alert.alert('Invalid email address');
            return;
        }
        if (!isValidPassword(password)) {
            Alert.alert('Enter strong password');
            return;
        }
        if (password.length < 10) {
            Alert.alert('Please enter strong password with 10 character.')
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Password mismatch')
            return;
        }
        const user = {
            email,
            password,

        }
        dispatch(signUp(user))
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Create new Account</Text>
            <View style={styles.page}>
                <Text style={styles.textHeadr}>E-mail *</Text>
                <View style={styles.input}>
                    <View style={styles.mt10}>
                        <Icon name="person-outline" size={18} color="black" />
                    </View>
                    <TextInput
                        placeholder='Enter your e-mail'
                        placeholderTextColor={'gray'}
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                    />
                </View>
                <Text style={{ ...styles.textHeadr, marginTop: 20 }}>Passowrd *</Text>
                <View style={styles.input}>
                    <View style={styles.mt10}>
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
                <Text style={{ ...styles.textHeadr, marginTop: 20 }}>Confirm Password *</Text>
                <View style={styles.input}>
                    <View style={styles.mt10}>
                        <Icon name="bag-outline" size={18} color="black" />
                    </View>
                    <TextInput
                        placeholder='Confirm your password'
                        placeholderTextColor={'gray'}
                        style={{ width: '75%' }}
                        value={confirmPassword}
                        secureTextEntry={!confirmPasswordVisible}
                        onChangeText={(e) => setConfirmPassword(e)}
                    />
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                            <Icon name={confirmPasswordVisible ? "eye-off" : "eye"} size={18} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <PasswordText />
                <TouchableOpacity onPress={handleAdd}
                    style={styles.button}>
                    <Text style={styles.btnText}>Next</Text>
                    <Icon name="arrow-redo-outline" size={25} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}
                    style={styles.cancel}>
                    <Text style={styles.cancelText}>Cancel account creation</Text>
                </TouchableOpacity>

                <Image source={require('../assets/Logo.png')}
                    style={styles.image} />
            </View>
        </ScrollView>
    )
}
export default SignUp
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
    header: { marginTop: 40, fontSize: 20, color: 'black', textAlign: 'center' },
    page: { padding: '10%' },
    textHeadr: { color: 'black', fontSize: 16 },
    mt10: { marginStart: 10 },
    button: {
        marginTop: '30%',
        backgroundColor: '#E7651C',
        width: '100%', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center',
        flexDirection: 'row'
    },
    btnText: { color: 'white', fontWeight: 'bold', paddingHorizontal: 10 },
    cancel: { marginTop: 20, justifyContent: 'center', alignItems: 'center' },
    cancelText: { color: '#E7651C', fontWeight: 'bold' }
});