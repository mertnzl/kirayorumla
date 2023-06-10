import { View, Text,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import HomeHeader from '../../components/HomeHeader'
import Carousel from '../../components/Carousel'
import MainCategories from '../../components/MainCategories'



const index = () => {


  return (
    <View style={{flex:1,backgroundColor:'#bde0fe'}}>
    <HomeHeader/>
    <Carousel/>
    <MainCategories/>

    </View>
  )
}

export default index