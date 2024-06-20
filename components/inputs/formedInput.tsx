import { TextInput, StyleSheet, Text, View, KeyboardTypeOptions } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font'

type PropsType = {
    keyboardType?: KeyboardTypeOptions,
    placeholder?: string,
    handleValue?: (data: string) => void | undefined,
    secureTextEntry?: boolean,
    width?: number,
    label?: string
    valueInfo?: string | number
}

const FormedInput = ({
    keyboardType = "default",
    placeholder, handleValue,
    secureTextEntry,
    width = 230,
    label,
    valueInfo = "" }: PropsType) => {
    const [fontsLoaded] = useFonts({
        'RalewayBold': require('@/assets/fonts/Raleway-Bold.ttf'),
        'Raleway': require('@/assets/fonts/Raleway-Regular.ttf'),
    });
    const [value, setValue] = useState<string>(valueInfo.toString())
    const catchValue = () => {
        if (handleValue) {
            handleValue(value)
        }
    }

    const handleText = (v: string) => {
        setValue(v)
        catchValue()
    }
    return (
        <View>
            {label &&
                <Text style={styles.inputText}>{label}</Text>

            }
            <TextInput
                style={[styles.input, { width: width }]}
                onChangeText={(v) => handleText(v)}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default FormedInput

const styles = StyleSheet.create({

    input: {
        backgroundColor: "#F5F6F6",
        padding: 12,
        margin: 6,
        height: 42,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        color: "#58594D"

    }, inputText: {
        color: "#58594D",
        paddingLeft: 20,
        fontFamily: "RalewayBold"
    }
})