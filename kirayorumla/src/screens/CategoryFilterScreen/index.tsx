
import React ,{useState} from 'react'

import {Category} from '../../models'
import { ScrollView } from 'react-native'
import Animation from '../../components/Animation'
import MappingComponents from '../../components/MappingComponents'
import Colors from '../../../colors'
import Form from '../../components/Form'
import ButtonComponents from '../../components/ButtonComponents'



const index = (props) => {



const [site,setSite] = useState<Category>(props.route.params.site)



  return (
    <ScrollView style={{paddingTop:10,flex:1,backgroundColor:Colors.blue[100]}}>
      
      <Animation/>
      <Form site={site} />
    <MappingComponents site={site}/>
    <ButtonComponents />
    
      </ScrollView>
  )
}

export default index