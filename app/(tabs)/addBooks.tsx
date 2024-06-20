import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, FlatList, TouchableWithoutFeedback, Keyboard, Pressable, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native';
import FormedInput from '@/components/inputs/formedInput';
import FormedButton from '@/components/button/formedButton';

const windowWidth = Dimensions.get('window').width;
const GOOGLE_KEY_API = "AIzaSyAdXaOTyr2Xa176iIVhrb8PgmCZ6dvXpSc"

const AddBooks = () => {
    const [term, setTerm] = useState<string>("")
    const [dataFormated, setdataFormated] = useState()
    const [selectedData, setSelectedData] = useState(null)
    const [modalVisible, setModalVisible] = useState<boolean | undefined>(false)
    // get api of books
    const fetchBookFromApi = async (term: string) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&printType=books`)
        const data = await response.json()

        setdataFormated(data.items.map((item: any) => ({
            id: item.id,
            title: item.volumeInfo.title,
            pageCount: item.volumeInfo.pageCount || 'Nombre de pages non disponible',
            categories: item.volumeInfo.categories || 'Nombre de pages non disponible',
            author: item.volumeInfo.authors,
            publisher: item.volumeInfo.publisher,
            description: item.volumeInfo.description
        })))
        console.log(data.items)
    }
    const handleSelecteData = (item: any) => {
        setSelectedData(item)
        console.log(item)
        setModalVisible(false)
    }

    useEffect(() => {
        if (selectedData) {
        }
    }, [selectedData]);


    const handleSubmit = (term: string) => {
        setModalVisible(true)
        fetchBookFromApi(term)
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text >Reading a new AddBooks</Text>
                    <View style={styles.containerSearch}>
                        <FormedInput placeholder='Search' handleValue={(v) => setTerm(v)} />
                        <FormedButton name="search" handleTouch={() => { handleSubmit(term) }}></FormedButton>
                    </View>
                    <Modal
                        animationType="fade"
                        visible={modalVisible}

                    >
                        <Pressable
                            style={{ height: 70, backgroundColor: "#E0E0D1", alignItems: "center", justifyContent: "center" }}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text>Hide Modal</Text>
                        </Pressable>
                        <FlatList
                            data={dataFormated}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <Pressable onPress={() => {
                                    handleSelecteData(item)
                                }}>
                                    <View style={styles.bookItem}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text>Authors: {item.author}</Text>
                                        <Text>Page Count: {item.pageCount}</Text>
                                        <Text>Categories: {item.categories}</Text>
                                        <Text>Publisher: {item.publisher}</Text>
                                    </View>
                                </Pressable>
                            )}
                        />
                    </Modal>
                    <View style={styles.inputsContainer}>
                        {/* <Text>{selectedData}</Text> */}
                        <FormedInput placeholder='Le titre' width={windowWidth - 50} label="Book's title" />

                        <View style={styles.topInputs}>

                            <FormedInput placeholder='Pages' label="Pages" keyboardType='numeric' width={windowWidth / 3} />
                            <FormedInput placeholder='Author' label="Author" width={windowWidth / 2} />
                        </View>
                        <FormedInput placeholder='Category' label="Category" />
                    </View>
                    <View style={styles.synopsysContainer} >
                        <TextInput
                            multiline={true}
                            placeholder='Synopsys'
                            style={styles.inputSynopsys}
                        />
                    </View>
                    <View>
                        <Pressable onPress={() => handleSubmit(term)}>
                            <Text> Ajouter</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback >
    )
}

export default AddBooks

const styles = StyleSheet.create({
    bookItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#E0E0D1",
        padding: 15,
        alignItems: "center",

    },
    containerSearch: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20
    },

    inputsContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

    },
    synopsysContainer: {
        padding: 20,
        width: windowWidth - 50,
        height: 200

    },
    inputSynopsys: {
        textAlignVertical: "top",
        padding: 20,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
    },
    topInputs: {
        width: "100%",
        flexDirection: "row"
    }
})