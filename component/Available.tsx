import { View, Text,Image,FlatList,ScrollView, useWindowDimensions,Dimensions } from 'react-native'
import React, { useState } from 'react'
// import { ScrollView } from 'react-native-gesture-handler'
// import { FlatList } from 'react-native-gesture-handler'

const Available = () => {
  const width = Dimensions.get("window").width
    const [cardetail,setcardetail] = useState([
        {
            id:1,
            name:'Suv',
            available:'New Delhi',
            images:[
                'https://media.zigcdn.com/media/model/2023/May/exter-7_270x180.jpg',
                'https://st.arenaev.com/news/22/07/ev-from-china-dongfeng-nano-box/-828x414/arenaev_001.jpg',
                'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Exter/10443/1694584843066/front-left-side-47.jpg',
                'https://topauto.co.za/wp-content/uploads/2022/03/2022-Hyundai-Grand-Creta-Header-1.jpg'
            ],
            fromtime:'09:30am',
            totime:'6:30am',
            date:'23-09-2023'
        }
    ])

    const renderitem = ({item}:any)=>{
      console.log("items",item)
     return(
      <>
      <ScrollView
      horizontal
      pagingEnabled
      >
        {
          item.images.map((it:any,i:any)=>(
              <Image source={{uri:it}} style={{width:width,height:300}}/>
          ))
        }
      </ScrollView>
      </>
     )
    }
  return (
 
      <View style={{flex:1}}>
        <FlatList
        data={cardetail}
        renderItem={renderitem}
        /> 
        
      </View>
   
  )
}

export default Available