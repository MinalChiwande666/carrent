import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Animated, { Extrapolate, useAnimatedStyle, useSharedValue,interpolate } from 'react-native-reanimated'

// import { FlatList } from 'react-native-gesture-handler'

const Onboarding = () => {
    const scrollx = useSharedValue(0)
    const width = Dimensions.get('window').width
    const [arr, setarr] = useState([
        {
            id: 1,
            image: 'https://img.freepik.com/free-vector/onboarding-concept-illustration_114360-4120.jpg',
            title: 'Download App',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 1,
            image: 'https://img.freepik.com/free-vector/onboarding-concept-illustration_114360-4120.jpg',
            title: 'Download App',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 1,
            image: 'https://img.freepik.com/free-vector/onboarding-concept-illustration_114360-4120.jpg',
            title: 'Download App',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
    ])
    const renderitem = ({ item }: any) => {
        return (
            <>
                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: width }}>
                    <Image source={{ uri: item.image }} style={{ width: 400, height: 250 }} />
                    <View style={{ width: 400, padding: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: "700", color: 'black', marginVertical: 10 }}>{item.title}</Text>
                        <Text style={{ fontSize: 13, color: 'gray', textAlign: 'center', marginHorizontal: 10 }}>{item.desc}</Text>
                    </View>
                </View>
                <View >

                </View>
            </>
        )
    }
    const handlescroll = (event: any) => {
        console.log(event.nativeEvent.contentOffset.x)
        scrollx.value = event.nativeEvent.contentOffset.x
    }
    const indicator = ()=>{
      
      return( 
       
       <>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:80}}>
       {
        arr.map((item,i)=>{
            const interpolateval = [0,1,0]
            const animatedstyle = useAnimatedStyle(():any=>{
             const width = interpolate(scrollx.value,interpolateval,[50,50,50],Extrapolate.CLAMP)

             return{
                width:width
             }
            })
            return(
                <>
                <Animated.View style={[{width:10,height:10,backgroundColor:'blue',borderRadius:50,marginHorizontal:5},animatedstyle]}/>
                </>
            )
        })
       }
       </View>
       </>
      )
      
    }
    return (
        <>
            <FlatList
                data={arr}
                renderItem={renderitem}
                horizontal
                pagingEnabled
                bounces={false}
                onScroll={handlescroll}
                showsHorizontalScrollIndicator={false}
            />
            {indicator()}
        </>

    )
}

export default Onboarding