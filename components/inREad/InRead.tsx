import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import images from '@/constants/images'
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
export default function InRead() {

    const [fontsLoaded] = useFonts({
        'RalewayBold': require('@/assets/fonts/Raleway-Bold.ttf'),
        'Raleway': require('@/assets/fonts/Raleway-Regular.ttf'),
    });

    const [visible, setVisible] = useState(false)
    const handlePressed = () => {
        setVisible(!visible)
    }
    return (
        <Pressable
            style={styles.container}
            onPress={() => { handlePressed() }}
        >
            <View style={styles.containerView}>
                <View>
                    <Text style={styles.title}>C'est toi le chat</Text>
                    <Text style={styles.subTitle}>Laura trompette</Text>
                    <Text style={styles.subTitle}>Category</Text>
                </View>
                {visible ?
                    <View>
                        <TextInput
                            keyboardType="numeric"
                            autoFocus={true}
                            style={styles.fontBold}
                            placeholder='800 pages' />
                        <Text style={styles.fontBold}>/ 1200</Text>
                    </View>
                    : <View>
                        <Text style={styles.fontBold}>
                            800 pages
                        </Text>
                    </View>

                }

            </View>
            {visible && <View style={styles.synopsisContainer}>
                <Text style={styles.fontRegular}>Depuis la mort subite de sa femme trois ans plus tôt, Paul, chef cuisinier,
                    élève seul sa fille de sept ans. Le quotidien n'est pas toujours facile et
                    Paul remarque que sa fille souffre encore beaucoup de ce décès brutal.
                    Lorsqu'il croise un chat abandonné, il décide de l'offrir à Louise afin
                    d'améliorer son bien-être. L'animal a également des souffrances à soigner.
                </Text>
            </View>}
            {visible ? <Image source={images.arrowUp} width={20} height={12} />
                : <Image source={images.arrowDown} width={20} height={12} />

            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth - 20,
        padding: 13,
        borderRadius: 16,
        minHeight: 80,
        backgroundColor: "#BFBFAA",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    },
    containerView: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    synopsisContainer: {
        margin: 5,
        padding: 5,
    },
    title: {
        fontSize: 20,
        color: "#3C3D34",
        fontFamily: "RalewayBold"

    },
    subTitle: {
        color: "#58594D",
        fontFamily: "Raleway"
    },
    fontBold: {
        fontFamily: "RalewayBold"
    },
    fontRegular: {
        fontFamily: "Raleway"
    }
})