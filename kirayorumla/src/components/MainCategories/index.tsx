import { View, Text,ScrollView,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import CategoryItem from '../CategoryItem'
import productSite from '../../../assets/productSite'


const index = () => {

    const [category,setCategory]=useState(productSite)



  return (
    <ScrollView>

        <View style={styles.list}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#616161',marginTop:20,marginLeft:20}}>Categories</Text>
        {category.map((item)=>(
            <CategoryItem key={item.id} item={item}/>
        ))}

        </View>
      
    </ScrollView>
  )
}

export default index
const styles=StyleSheet.create({
    list:{


 },


})