import { TextInput, StyleSheet, Text, View, KeyboardTypeOptions } from 'react-native'
import React, { useState } from 'react'

type PropsType = {
    keyboardType?: KeyboardTypeOptions,
    placeholder?: string,
    handleValue?: (data: string) => void | undefined,
    secureTextEntry?: boolean
}

const FormedInput = ({ keyboardType = "default", placeholder, handleValue, secureTextEntry }: PropsType) => {

    const [value, setValue] = useState<string>("")
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

        <TextInput
            style={styles.input}
            onChangeText={(v) => handleText(v)}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
        />
    )
}

export default FormedInput

const styles = StyleSheet.create({

    input: {
        backgroundColor: "#F5F6F6",
        padding: 12,
        margin: 6,
        width: 280,
        height: 42,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        color: "#58594D"

    }
})