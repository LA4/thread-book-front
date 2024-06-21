import { StyleSheet, ScrollView, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from "../constants/images"
import { useFonts } from 'expo-font';

const index = () => {
    const [fontsLoaded] = useFonts({
        'RalewayBold': require('@/assets/fonts/Raleway-Bold.ttf'),
        'Raleway': require('@/assets/fonts/Raleway-Regular.ttf'),
    });
    if (fontsLoaded) {
        return (
            <ImageBackground
                source={images.background}
                resizeMode='cover'
                style={{ flex: 1, backgroundColor: "(0deg, rgba(159,172,172,1) 0%, rgba(126,126,126,1) 100%)" }}
            >

                <SafeAreaView>
                    <ScrollView contentContainerStyle={{ height: "100%" }}>
                        <View style={styles.container}>
                            <Text style={{
                                fontSize: 48,
                                color: "white"
                            }}>TreadBook</Text>
                            <Link href={"/(auth)/signIn"} style={{
                                fontSize: 48,
                                color: "white"
                            }}> Sign in</Link>
                            <Link href={"/(auth)/signUp"} style={{
                                fontSize: 48,
                                color: "white"
                            }}>sign up</Link>

                            <Link href={"/(tabs)/home"} style={{
                                fontSize: 48,
                                color: "white"
                            }}>Go Home</Link>

                        </View>
                    </ScrollView>
                </SafeAreaView >
            </ImageBackground >
        )
    }
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
        , alignItems: "center"
        , fontFamily: "Raleway"

    }
})