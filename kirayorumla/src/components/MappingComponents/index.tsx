import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { Category, Product, } from '../../models'
import productSite from '../../../assets/productSite'
const { width, height } = Dimensions.get('window')
const index = ({ site }: { site: Category }) => {


  const [filtering, setFiltering] = useState<Product[]>([])
  var latitude = site.latitude;
  var longitude = site.longitude;

  useEffect(() => {
    setFiltering(productSite)
    return () => {
      setFiltering([])
    }
  }, [])


  return (
    <View style={{ alignItems: 'center',marginTop:10 }}>

      <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 12,color:'#023e8a' }}>{site.name} Konumu</Text>

      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0005,
          longitudeDelta: 0.009,
        }}

        style={{ width: width * 0.9, height: height * 0.22, borderRadius: 10, borderColor: 'gray', borderWidth: 0.5, marginHorizontal: '5%' }}
      >
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}

        />



      </MapView>



    </View>
  )
}

export default index
