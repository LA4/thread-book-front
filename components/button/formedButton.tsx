import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

type PropsButtonType = {
    name?: string,
    width?: number,
    backgroundColor?: string,
    handleTouch: () => void
}

const FormedButton = ({ name, handleTouch, width, backgroundColor = "#58594D" }: PropsButtonType) => {

    const [fontsLoaded] = useFonts({
        'RalewayBold': require('@/assets/fonts/Raleway-Bold.ttf'),
        'Raleway': require('@/assets/fonts/Raleway-Regular.ttf'),
    });
    const handleTouched = () => {
        handleTouch()
    }
    return (
        <Pressable style={[styles.button, { width: width, backgroundColor: backgroundColor }]} onPress={() => handleTouched()}>
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
        height: 42,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    },
    text: {
        color: "#E0E0D1",
        fontSize: 18,
        lineHeight: 22,
        fontFamily: "Raleway"
    }
})