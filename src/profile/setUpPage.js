import React, { useEffect } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const SetUpPage = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Set up your profiles</Text>
            <View style={styles.page}>
                <Text style={styles.text}>
                    A Rukkor account is assoiciated with two profiles,one {'\n'}
                    which we call RealID and one which is your Alias.You{'\n'}
                    choose in which settings you wish to expose your true {'\n'}
                    identity and in which you wish to use an alias
                </Text>

                <TouchableOpacity onPress={() => { navigation.navigate('RealId') }}
                    style={styles.realId}>
                    <View style={styles.realIdtext}>
                        <Text style={{ fontSize: 18, color: 'black' }}>Real ID</Text>
                        <View style={{ marginTop: 20 }}>
                            <Icon name="person-outline" size={35} color="#E7651C" />
                        </View>
                    </View>
                    <Text style={styles.longText}>
                        With Real ID you can disclose your{'\n'}
                        personal details like name ,phone{'\n'}
                        number,birthday,email and more.{'\n'}
                        Use your Real ID when interacting{'\n'}
                        with trusted family,friends and{'\n'} colleagues.
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('AliasPage')} style={styles.realId}>
                    <View style={{ width: '32%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: 'black' }}>Alias</Text>
                        <View style={{ marginTop: 20 }}>
                            <Icon name="person-outline" size={35} color="#E7651C" />
                        </View>
                    </View>
                    <Text style={styles.longText}>
                        Using your Alias you can choose an{'\n'}
                        additional @alias with which you{'\n'}
                        can join Spaces and interact with{'\n'}
                        other users in communities where{'\n'}
                        you're not comfortable sharing your{'\n'} personal details.
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('RealId')}
                    style={styles.touch}>
                    <Text style={styles.btn}>Next</Text>
                    <Icon name="arrow-redo-outline" size={25} color="black" />
                </TouchableOpacity>

                <Image source={require('../assets/Logo.png')}
                    style={styles.image} />
            </View>
        </ScrollView>
    )
}
export default SetUpPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: { marginTop: 40, fontSize: 20, color: 'black', textAlign: 'center' },
    page: { padding: '10%' },
    text: { color: 'black', fontSize: 12, marginTop: 30, lineHeight: 17 },
    image: {
        width: 40,
        height: 40,
        marginTop: 30,
        alignSelf: 'center',
    },
    realId: { flexDirection: 'row', marginTop: 30, backgroundColor: '#FFFFFF', padding: 10 },
    realIdtext: { width: '32%', alignItems: 'center' },
    btn: { color: 'white', fontWeight: 'bold', paddingHorizontal: 10 },
    touch: { marginTop: '40%', backgroundColor: '#E7651C', width: '100%', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
    longText: { color: 'black', fontSize: 12, lineHeight: 17 }
});