import {TouchableOpacity,Image , Text , StyleSheet, Dimensions,View, ImageBackground} from "react-native"
import React,{useState,useEffect} from 'react'
import  {Category, Product} from '../../models'
import { useNavigation } from '@react-navigation/native'
import categorys from "../../../assets/categorys"

const {width ,height } = Dimensions.get('window')



const index = ({item}:{item:Category}) => {
    const navigation = useNavigation()

    const [categories,setCategories] = useState<Category[]>([])

    useEffect(() => {
        setCategories(categorys);
        return () => {
            setCategories([])
        }
    })

  return (
    <View>
        
           <TouchableOpacity onPress={() => navigation.navigate("CategoryFilter",{site:item})} style={{width:width*0.5,height:width*0.5,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
           <Image style={{width:width*0.4,height:width*0.4,borderRadius:10, backgroundColor:'white',marginTop:10}} source={{uri:item.src}} />
           <Text style={{fontSize:14,color:'#313131',fontWeight:'500'}}>{item.name}</Text>
        </TouchableOpacity>


      
       
      
    </View>
  )
}

export default index