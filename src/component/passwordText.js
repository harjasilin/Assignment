import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const PasswordText = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.headerText}>
                Pick a strong password,requirements are at least one {'\n'}
                of each minimum 10 characters</Text>
            <View style={{ marginStart: 10 }}>
                <Text style={styles.headerText}>. Uppercase letter (A-Z)</Text>
                <Text style={styles.headerText}>. Lowercase letter (a-z)</Text>
                <Text style={styles.headerText}>. Number (0-9)</Text>
                <Text style={styles.headerText}>. Symbol (!@#$%^&*)</Text>
            </View>

        </View>
    )
}
export default PasswordText
const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        padding: 5,
        backgroundColor: '#f6c5aa',
        marginTop: 40
    },
    headerText: { color: 'black', fontSize: 12 }

});