import { View, Text ,TextInput, StyleSheet, ScrollView, SafeAreaView, TouchableWithoutFeedback, Keyboard, Pressable} from 'react-native'
import React from 'react'
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const AddBooks = () => {
    return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
            <Text>Reading a new AddBooks</Text>
            <View><Text>Search bar</Text></View>
            <View style={styles.inputsContainer}>
                <Text>Book's title</Text>
                <TextInput placeholder='Le titre'/>
                <Text>Author</Text>
                <TextInput placeholder='Author'/>
                <Text>Category</Text>
                <TextInput placeholder='Category'/>
            </View>
            <View style={styles.synopsysContainer} >
                <TextInput
                    multiline={true}
                    placeholder='Synopsys'
                    style={styles.inputSynopsys}
                    

                />
            </View>
            <View>
                <Pressable>
                    <Text> ajouter</Text>
                </Pressable>
            </View>
        </SafeAreaView>
            </TouchableWithoutFeedback>
    )
}

export default AddBooks

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:"100%",
        height:"100%",
        backgroundColor:"#E0E0D1",
        padding:15,
        alignItems:"center"
    
    },
    inputsContainer:{
        width:"100%",

    },
    synopsysContainer:{
        padding:20,
        width: windowWidth - 50,
        height: 200

    },
    inputSynopsys:{
        width:"100%",
        height:"100%",
        backgroundColor: "white",
    }
})