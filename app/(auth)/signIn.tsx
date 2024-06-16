import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 36, color: "#fff" }}>signIn</Text>
        </View>
    )
}

export default SignIn
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})