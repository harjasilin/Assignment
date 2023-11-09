import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Blank from 'react-native-vector-icons/MaterialCommunityIcons'
import { launchImageLibrary } from 'react-native-image-picker';
const AliasPage = ({ navigation }) => {
    const [imageURL, setImageURL] = useState('')
    const [name, setName] = useState('')
    const [displayName, setDisplayName] = useState('')
    const onpickerClick = async () => {
        const options = {
        }
        const result = await launchImageLibrary(options);
        setImageURL(result.assets[0]?.uri)
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <Icon name="arrow-back" size={25} color="black" onPress={() => navigation.goBack()} />
                <Text style={styles.text}>Alias</Text>
                <Blank name="blank" size={25} color="white" />
            </View>
            <TouchableOpacity onPress={onpickerClick} style={styles.imageWrap}>
                <View style={styles.imageview}>
                    <Image source={{ uri: imageURL ? imageURL : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=' }} style={{ height: 100, width: 100, borderRadius: 50 }} />
                </View>

            </TouchableOpacity>
            <View style={styles.page}>
                <Text style={styles.titletext}>Alias</Text>
                <View style={styles.input}>
                    <View style={styles.mas10}>
                        <Icon name="person-outline" size={18} color="black" />
                    </View>
                    <TextInput
                        placeholder='ironman'
                        placeholderTextColor={'gray'}
                        value={name}
                        onChangeText={(e) => setName(e)}
                    />
                </View>
                <Text style={styles.displayText}>Display Name</Text>
                <View style={styles.input}>
                    <View style={styles.mas10}>
                        <Icon name="person-outline" size={18} color="black" />
                    </View>
                    <TextInput
                        placeholder='ironman'
                        placeholderTextColor={'gray'}
                        value={displayName}
                        onChangeText={(e) => setDisplayName(e)}
                    />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}
                    style={styles.touch}>
                    <Text style={styles.tocuhtxt}>Save and continue</Text>
                    <Icon name="arrow-redo-outline" size={25} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SetUppage')}
                    style={styles.skipwrap}>
                    <Text style={styles.skiptxt}>Skip Alias creation for now</Text>
                </TouchableOpacity>
                <Image source={require('../../assets/Logo.png')}
                    style={styles.image} />
            </View>
        </ScrollView>
    )
}
export default AliasPage
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
    skipwrap: { marginTop: 20, justifyContent: 'center', alignItems: 'center' },
    skiptxt: { color: '#E7651C', fontWeight: 'bold' },
    touch: {
        marginTop: '40%', backgroundColor: '#E7651C', width: '100%', height: 40,
        borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
    },
    tocuhtxt: { color: 'white', fontWeight: 'bold', paddingHorizontal: 10 },
    top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, paddingHorizontal: 40 },
    text: { fontSize: 20, color: 'black', textAlign: 'center' },
    imageWrap: { marginTop: 50, alignSelf: 'center', },
    imageview: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    page: { padding: '10%' },
    titletext: { color: 'black', fontSize: 16 },
    mas10: { marginStart: 10 },
    displayText: { color: 'black', fontSize: 16, marginTop: 20 }
});