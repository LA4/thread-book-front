import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import InRead from '@/components/inREad/InRead'
import CategoryStripe from '@/components/categoryStripe/CategoryStripe'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Actuel reading book</Text>
            <InRead></InRead>
            <CategoryStripe></CategoryStripe>
           <ScrollView contentContainerStyle={{gap:20, width:"100%" }} showsVerticalScrollIndicator={false}>
           <InRead></InRead>
            <InRead></InRead>
            <InRead></InRead>
            <InRead></InRead>
            <InRead></InRead>
           </ScrollView>
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",
        backgroundColor:"#E0E0D1",
        padding:15,
        alignItems:"center"
    
    }
})