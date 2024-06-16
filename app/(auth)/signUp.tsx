import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import FormedInput from '@/components/inputs/formedInput';
import FormedButton from '@/components/button/formedButton';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = () => {


    const handleValue = (data: string) => {
        console.log(data)
    }
    const handleTouch = () => {
        console.log("touch")
    }
    return (
        <View >
            <Text style={{ fontSize: 36, color: "#fff" }}>signUp</Text>
            <FormedInput keyboardType='email-address' handleValue={handleValue} placeholder='Email'></FormedInput>
            <FormedInput handleValue={handleValue} placeholder='Password' secureTextEntry={true}></FormedInput>
            <FormedButton name="s'inscrire" handleTouch={handleTouch}></FormedButton>
        </View>
    )
}

export default SignUp