import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const index = () => {
  return (
    <View style={{alignItems:'center'}}>
        <LottieView
       source={require('../../../assets/animation2.json')}
       autoPlay
       loop
       style={{width:150,height:150,marginRight:20}}
      />
    </View>
  )
}
export default index