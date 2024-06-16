import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TreadHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerProfil}>
        <View style={styles.profile}></View>
      <Text style={styles.userName}>TreadHeader</Text>

        </View>

      <View style={styles.pagesContainer}>
        <Text style={styles.pagesColor}>1200</Text>
        <Text style={styles.pageText}>pages</Text>
      </View>
    </SafeAreaView>
  )
}

export default TreadHeader

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:70,
        backgroundColor:"#58594D",
        padding:15,
        flexDirection: "row",
        justifyContent:"space-between",
    },
    containerProfil:{
      flexDirection: "row",
      gap:12,
      alignItems:"center"
    },
    userName:{
      fontSize: 20,
      color: "#E0E0D1"
    },
    pagesContainer:{
      width: 60,
      justifyContent:"center",
    },
    pagesColor:{
      fontSize:20,
      color: "#FFCC80"
    },
    pageText:{
      fontSize: 13,
      color: "#E0E0D1"
    },
    profile:{
      width: 30,
      height:30,
      borderWidth: 4,
      borderColor:"#BFBFAA",
      borderRadius:50
    }
})