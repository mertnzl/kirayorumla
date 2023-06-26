import { View, Text,ScrollView,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import CategoryItem from '../CategoryItem'
import categorys from '../../../assets/categorys'


const index = () => {

    const [category,setCategory]=useState(categorys)



  return (
    <View
   // showsVerticalScrollIndicator={false}
    //bounces={true}
    >
          <Text style={{fontSize:20,fontWeight:'bold',color:'#023e8a',marginTop:20, flexDirection:'row',alignSelf:'center'}}>Siteler</Text>
        <View style={styles.list}>
          
        {category.map((item)=>(
            <CategoryItem key={item.id} item={item}/>
        ))}

        </View>
      
    </View>
  )
}

export default index
const styles=StyleSheet.create({
    list:{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom:20,
        //backgroundColor: "red",
        
       
       


 },


})