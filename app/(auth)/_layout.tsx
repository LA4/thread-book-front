import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import image from "../../constants/images"
const AuthLayout = () => {
    return (
        <>
            <ImageBackground source={image.background} resizeMode="cover" style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Slot></Slot>
            </ImageBackground >
        </>
    )
}

export default AuthLayout