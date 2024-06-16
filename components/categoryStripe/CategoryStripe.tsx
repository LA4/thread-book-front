import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
type PropsListCategory ={
    category : string
}
const listOfCategories = ["romance","romance","romance","romance","romance","romance", "fantaisy","horror","fantastic","poesie","Science Fiction" ]
const ListCategoryItem = ({category}:PropsListCategory )=>{
    const [active, setActive]=useState<Boolean>(false)
const handlePress= ()=>{
    setActive(!active)
}
    return (
        <Pressable
        onPress={()=>{handlePress()}} >
          <Text style={[styles.categoryText, active && styles.textActive]}>{category}</Text>
      </Pressable>
    )
}
const CategoryStripe = () => {


  return (
  <View style={styles.container}>
      <ScrollView 
        horizontal={true}
        contentContainerStyle={styles.scroll}
        showsHorizontalScrollIndicator={false} >
            {listOfCategories.map((e,i)=>( <ListCategoryItem key={i} category={e}/>))}
        </ScrollView>
    </View>
  )
}

export default CategoryStripe

const styles = StyleSheet.create({
    container:{
        width: windowWidth,
        height:40,
        backgroundColor:"#58594D",
        margin:20,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        gap:20
    },
    scroll:{
        gap: 20
    },
    categoryText:{
        color: "#BFBFAA",
    },
    textActive:{
        textDecorationLine:"underline"

    }
})