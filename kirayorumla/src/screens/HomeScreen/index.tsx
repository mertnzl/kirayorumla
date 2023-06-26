import { View, Text,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import HomeHeader from '../../components/HomeHeader'
import Carousel from '../../components/Carousel'
import MainCategories from '../../components/MainCategories'



const index = () => {


  return (
    <View style={{flex:1,backgroundColor:'#00b4d8'}}>
    <HomeHeader/>
    <ScrollView
    showsVerticalScrollIndicator={false}
    bounces={true}
    >
    <Carousel/>
    <MainCategories/>
    </ScrollView>
    </View>
  )
}

export default index