import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import images from '@/constants/images'
export default function InRead() {
    const [visible, setVisible] = useState(false)
    const handlePressed =()=>{
        setVisible(!visible)
    }
  return (
      <Pressable 
      style={styles.container}
      onPress={()=>{handlePressed()}}
      >
        <View style={styles.containerView}>
            <View> 
                <Text style={styles.title}>Book'Tilte</Text>
                <Text style={styles.subTitle}>Author</Text>
                <Text style={styles.subTitle}>Category</Text>
            </View>
        <View>
            <Text>
                800 pages
            </Text>
        </View>
        
        </View>
       { visible &&  <View style={{height:80}}>
            
            </View>}
        {visible ?  <Image source={images.arrowUp} width={20} height={12}  />
        : <Image source={images.arrowDown} width={20} height={12} />
        
        }    
      </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        padding:13,
        borderRadius:16,
        minHeight:80,
        backgroundColor:"#BFBFAA",
        alignItems:"center",
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
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    title:{
        fontSize:20,
        color:"#3C3D34"

    },
    subTitle:{
        color: "#58594D"
    }
})