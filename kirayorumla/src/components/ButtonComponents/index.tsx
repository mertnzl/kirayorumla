import { View, Text,TouchableOpacity,Dimensions } from 'react-native'

import React from 'react'
const {width,height} = Dimensions.get('window')
const index = () => {
  return (
    <View style={{alignItems:'center',marginTop:20}}>
        <TouchableOpacity style={{backgroundColor:'#023e8a',width:width*0.8,height:height*0.06,alignItems:'center',justifyContent:'center',borderRadius:5}} >
            <Text style={{color:'white', fontWeight:'500',fontSize:20}}>Kaydet</Text>
        </TouchableOpacity>
        
    </View>
  )
}

export default index