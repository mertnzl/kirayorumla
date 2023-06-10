import React, { useState } from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");


const index = () => {

    const [activeIndex,setActiveIndex] = useState(0);
    const [banners,setBanners] = useState([
        'https://i.hizliresim.com/g2pentz.png',
        'https://i.hizliresim.com/soltpzt.png',
        'https://i.hizliresim.com/2ew7s33.png'
  
    ])

    



    const onViewRef = React.useRef((viewableItems) => {
        if (viewableItems.viewableItems.length > 0) {
          setActiveIndex(viewableItems.viewableItems[0].index || 0);
        }
        console.log(viewableItems);
      });


      const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
    
      return (
        <View>
      <FlatList
        data={banners}
        renderItem={(item) => (
            <Image
              source={{ uri: item.item }}
              style={{ width: width, height: height * 0.26,resizeMode:"stretch", }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          
      />

       </View>

    
      )
    }
    
    export default index;

  