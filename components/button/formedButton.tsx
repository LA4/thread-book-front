import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type PropsButtonType = {
    name?: string,
    handleTouch: () => void
}

const FormedButton = ({ name, handleTouch }: PropsButtonType) => {
    const handleTouched = () => {
        handleTouch()
    }
    return (
        <Pressable style={styles.button} onPress={() => handleTouched()}>
            <Text style={styles.text}>{name}</Text>
        </Pressable>
    )
}

export default FormedButton

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        padding: 9,

    },
    text: {
        color: "#E0E0D1",
        textDecorationLine: 'underline',
        textDecorationColor: "red",
        fontSize: 24
    }
})