import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, FlatList, TouchableWithoutFeedback, Keyboard, Pressable, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native';
import FormedInput from '@/components/inputs/formedInput';
import FormedButton from '@/components/button/formedButton';

const windowWidth = Dimensions.get('window').width;

const AddBooks = () => {
    const [term, setTerm] = useState<string>("")
    const [dataFormated, setdataFormated] = useState(null)
    const [selectedData, setSelectedData] = useState({
        id: "",
        title: "",
        pageCount: "",
        categories: "",
        author: "",
        publisher: "",
        description: ""
    })
    const [modalVisible, setModalVisible] = useState<boolean | undefined>(false)
    // get api of books
    const fetchBookFromApi = async (term: string) => {
        if (term.trim() === "") {
            return
        }
        setdataFormated(null)
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=5&printType=books`)
            const data = await response.json()

            setdataFormated(data.items.map((item: any) => ({
                id: item.id,
                title: item.volumeInfo.title,
                pageCount: item.volumeInfo.pageCount,
                categories: item.volumeInfo.categories,
                author: item.volumeInfo.authors,
                publisher: item.volumeInfo.publisher,
                description: item.volumeInfo.description
            })))
            setSelectedData(data.item)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchBookinBack = async () => {
        console.log()
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=5&printType=books`)
            const data = await response.json()


            setSelectedData(data.item)
        } catch (error) {
            console.log(error)
        }
    }
    const handleSelecteData = (item: any) => {
        setSelectedData(item)
        setModalVisible(false)
    }

    const handleSubmit = (term: string) => {
        setModalVisible(true)
        fetchBookFromApi(term)
    }
    const handleAdd = () => {
        console.log(selectedData)
    }
    const handleResetFilds = () => {
        setSelectedData({
            id: "",
            title: "",
            pageCount: "",
            categories: "",
            author: "",
            publisher: "",
            description: ""
        })
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.titleAddBook} >Reading a new book ?</Text>
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
                        <FormedInput placeholder='Le titre' width={windowWidth - 50} valueInfo={selectedData?.title} label="Book's title" />

                        <View style={styles.topInputs}>

                            <FormedInput placeholder='Pages' label="Pages" valueInfo={selectedData?.pageCount} keyboardType='numeric' width={windowWidth / 3} />
                            <FormedInput placeholder='Author' label="Author" valueInfo={selectedData?.author[0]} width={windowWidth / 2} />
                        </View>

                        <FormedInput placeholder='Category' label="Category" valueInfo={selectedData?.categories[0]} width={windowWidth - 40} />
                        <FormedInput placeholder='Publisher' label="Publisher" valueInfo={selectedData?.publisher} width={windowWidth - 40} />


                    </View>
                    <View style={styles.synopsysContainer} >
                        <FormedInput
                            placeholder='Description'
                            multiline={true}
                            height={150}
                            width={windowWidth - 40}
                            label='Description'
                            valueInfo={selectedData?.description}
                        />
                    </View>
                    <View style={styles.bottmButton}>
                        <FormedButton name="Reset fields" backgroundColor='#78786D' width={150} handleTouch={() => { handleResetFilds() }}></FormedButton>
                        < FormedButton name="Add book" width={150} handleTouch={() => { handleAdd() }}></FormedButton>
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
        padding: 20,
        marginVertical: 8
    },

    inputsContainer: {
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

    },
    synopsysContainer: {
        height: 200,
        marginVertical: 20

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
    },
    buttonContainer: {
        width: 140,
        padding: 2,
        height: 20,
        backgroundColor: "red",

    }, titleAddBook: {
        color: "#3C3D34",
        alignSelf: "center",
        margin: 12,
        fontFamily: 'RalewayBold',
        fontSize: 24,
        textTransform: "uppercase"
    },
    bottmButton: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
        , padding: 10
    }
})