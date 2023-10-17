import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Animated,{ useAnimatedStyle, useSharedValue,withSpring, withTiming } from 'react-native-reanimated'
import { useFocusEffect } from '@react-navigation/native'
import { responsiveWidth } from '../styles/variables'
const Bottom = ({ navigation ,nav}: any) => {
  
    const btmindicator = useSharedValue(responsiveWidth(-2.5))

    const animatebtm = useAnimatedStyle(():any=>{
          return{
            left:btmindicator.value,
           
          }
    },[])
    
    useFocusEffect(
        React.useCallback(()=>{
         if(nav==="Home")
         {
            btmindicator.value = withTiming(responsiveWidth(-2.5),{duration:1000})
         }
         else if(nav === "booking")
         {
            btmindicator.value = withTiming(responsiveWidth(50),{duration:1000})
         }
         else if(nav === "notification")
         {
            btmindicator.value = withTiming(responsiveWidth(23),{duration:1000})
         }
        },[nav])
    )
  
    return (
        <View style={{ position: 'relative', bottom: 0, width: '100%', padding: 5, elevation: 4, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
            <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <Animated.View style={[{width:'20%',height:35,position:"absolute",backgroundColor:'#2a9df4',borderRadius:20,left:responsiveWidth(-8),padding:20},animatebtm]}>
                </Animated.View>
                    <TouchableOpacity
                        onPress={() => {
                            
                            navigation.navigate('Home')
                            if(nav === "Home")
                            {
                                btmindicator.value = withSpring(-8)
                            }
                        }}
                        style={{ flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
                        <MaterialCommunityIcons name="home-circle-outline" color={nav === "Home"?'white':'#1AA7EC'} size={24} />
                        <Text style={{ color: nav === "Home"?'white':'#1AA7EC', fontWeight: '600', fontSize: 8, textAlign: 'center' }}>Home</Text>
                    </TouchableOpacity>
                
                <TouchableOpacity
                onPress={()=>{
                    btmindicator.value = withSpring(90)
                    navigation.navigate('notification')
                }}
                style={{ flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
                    <MaterialCommunityIcons name="bell" color={nav === 'notification'?'white':"#1AA7EC"} size={24} />
                    <Text style={{ color: nav === 'notification'?'white':'#1AA7EC', fontWeight: '600', fontSize: 8, textAlign: 'center' }}>Subscription</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                       
                        btmindicator.value = withSpring(250)
                        navigation.navigate('Booking')
                        
                        
                       
                        
                    }}
                    style={{ flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
                    <MaterialCommunityIcons name="calendar-range" color={nav === 'booking'?'white':"#1AA7EC"} size={24} />
                    <Text style={{ color:nav === 'booking' ?'white':'#1AA7EC', fontWeight: '600', fontSize: 8, textAlign: 'center' }}>Bookings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
                    <MaterialCommunityIcons name="dots-horizontal-circle-outline" color={nav === 'booking'?'white':"#1AA7EC"} size={24} />
                    <Text style={{ color: '#1AA7EC', fontWeight: '600', fontSize: 8, textAlign: 'center' }}>More</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Bottom