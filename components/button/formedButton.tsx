import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

type PropsButtonType = {
    name?: string,
    handleTouch: () => void
}

const FormedButton = ({ name, handleTouch }: PropsButtonType) => {

    const [fontsLoaded] = useFonts({
        'RalewayBold': require('@/assets/fonts/Raleway-Bold.ttf'),
        'Raleway': require('@/assets/fonts/Raleway-Regular.ttf'),
    });
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
        borderRadius: 7,
        padding: 10,
        backgroundColor: "#58594D",
        height: 42,

    },
    text: {
        color: "#E0E0D1",
        fontSize: 18,
        lineHeight: 22,
        fontFamily: "Raleway"
    }
})