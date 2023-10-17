import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
// import { ScrollView } from 'react-native-gesture-handler'
// import { Image } from 'react-native-reanimated/lib/typescript/Animated'
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import BasicGesture from './component/BasicGesture'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Homescreen from './component/Homescreen'
import Available from './component/Available'
import Onboarding from './component/Onboarding'
import SingleCar from './component/SingleCar'
import SelectSearch from './component/SelectSearch'
import Bookings from './component/Bookings'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Profilescreen from './component/Profilescreen'
import Bottom from './component/Shared/Bottom'
import Notifications from './component/Notifications'
const App = () => {
  
  const Stack = createNativeStackNavigator()
  return (

    <>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
        animation:'slide_from_left'
      }}
      
      initialRouteName='Home'
      >
        <Stack.Screen 
        
        name="Home" component={Homescreen}/>
        <Stack.Screen name="Booking" component={Bookings}/>
        <Stack.Screen name="Serachcity" component={SelectSearch}/>
        <Stack.Screen name='profile' component={Profilescreen}/>
        <Stack.Screen name='notification' component={Notifications}/>
      </Stack.Navigator>
     
    </NavigationContainer>
   
    {/* <BasicGesture/> */}
    {/* <Homescreen/> */}
    {/* <Available/> */}
    {/* <SelectSearch/> */}
    {/* // <Onboarding/> */}
    {/* <Bookings/> */}
    {/* <SingleCar/> */}
    </>

  )
}

export default App