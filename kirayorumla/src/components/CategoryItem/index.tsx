import {TouchableOpacity,Image , Text , StyleSheet, Dimensions,View, ImageBackground} from "react-native"
import React,{useState} from 'react'
import {Product, Category} from '../../models'
import { useNavigation } from '@react-navigation/native'

const {width ,height } = Dimensions.get('window')

type CategoryItemProps={
    item:Category
}

const index = ({item}:CategoryItemProps) => {
    const navigation = useNavigation()

  return (
    <View>
       <TouchableOpacity onPress={() => navigation.navigate("CategoryDetails",{category:item.name})} style={{width:width*0.25,height:width*0.24,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
        <Image style={{width:width*0.18,height:width*0.18,borderRadius:10, backgroundColor:'white'}} source={{uri:item.src}} />
        <Text style={{fontSize:12,color:'#616161',fontWeight:'500'}}>{item.name}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default index