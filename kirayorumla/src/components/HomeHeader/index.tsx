import { SafeAreaView, Text ,Image,View,Dimensions,ScrollView} from 'react-native'
import React from 'react'

const {height,width} = Dimensions.get('window')

const index = () => {
  return (
 
    <View >
    <View style={{paddingTop:height*0.05,backgroundColor:'#004aad',alignItems:'center'}}>
      <Image
      
      style={{height:height*0.06,width:width*0.2,borderBottomLeftRadius:6,borderBottomRightRadius:6}}
       source={require("../../../assets/HeaderIcon.png")}/>
    </View>
    <View>
      
    </View>
    
      
     
    </View>
    
  )
}

export default index