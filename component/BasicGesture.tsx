import React from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { ExclusiveGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gestureComposition';
import Animated, { Easing,withTiming, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const BasicGesture = () => {
  const scrollhandle = useSharedValue(0)
  const textopacity = useSharedValue(1)
  const seachbtm = useSharedValue(0)
  const scrollanim = useAnimatedStyle((): any => {
    const bgcolor = interpolate(scrollhandle.value, [0, 300], [250, 100],Extrapolate.CLAMP)
    
    return {
      height: bgcolor,
      backgroundColor: scrollhandle.value >=300 ? "#FFFFF" : '#1AA7EC',
      elevation:scrollhandle.value === 0? 0:2
    }
  })

  const opacity = useAnimatedStyle((): any => {
    const opa = interpolate(scrollhandle.value, [1, 0.8,0.5], [0, 0.5, 1])

    return {
      opacity: opa
    }
  })
  const bottm = useAnimatedStyle((): any => {
    const btm = interpolate(scrollhandle.value, [0, 500], [0, 0])

    return {
      bottom: btm,
      position:'absolute'
    }
  })
  const handlescroll = (event: any) => {
    console.log(event.nativeEvent.contentOffset.y)
    if (event.nativeEvent.contentOffset.y > 0) {
      scrollhandle.value = withSpring(event.nativeEvent.contentOffset.y)
      seachbtm.value = event.nativeEvent.contentOffset.y
      textopacity.value = withSpring(1)
    } else {
      scrollhandle.value = 0
      textopacity.value = withSpring(0)
      seachbtm.value = withSpring(0)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
      <Animated.View style={[{ width: '100%', backgroundColor: '#1AA7EC', flexDirection: 'column', alignItems: 'center',height:500}, scrollanim]}>
       <Text style={{color:'white',marginVertical:10}}>RENTALS Solutions</Text>
        <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',marginVertical:3}}>
          <Animated.View style={[{width:'70%',backgroundColor:'lightblue',flexDirection:'row',padding:4,borderRadius:13,alignItems:'center',justifyContent:'space-between',marginTop:30},opacity]}>
              <TouchableOpacity style={{width:'50%',backgroundColor:'white',flexDirection:'column',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#1AA7EC'}}>Rentals</Text>
                <Text >For all users</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'50%',backgroundColor:'white',flexDirection:'column',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#1AA7EC'}}>Rentals</Text>
                <Text >For all users</Text>
              </TouchableOpacity>
          </Animated.View>
        </View>
        {/* <View style={{ marginVertical: 10, zIndex: 2 }}>
          <Animated.Text style={[{ fontWeight: 'bold', opacity: 1, color: 'white', fontSize: 20, fontFamily: 'sans-serif' }, opacity]}>We Provide Rental Services</Animated.Text>
        </View> */}

        <Animated.View style={[{ width: '90%', backgroundColor: 'white', padding: 10, borderRadius: 25, bottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 3,marginBottom:10 }, bottm]}>
          <View style={{ backgroundColor: '#1AA7EC', borderRadius: 50, padding: 5 }}>
            <MaterialCommunityIcons name="map-marker-alert-outline" color="white" size={24} />
          </View>
          <View style={{ width: 200 }}>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Select city to search</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" color="black" size={24} />
          </View>
        </Animated.View>

      </Animated.View>
      </SafeAreaView>
      <View style={{ flex: 1, backgroundColor: '#1AA7EC' }}>
        <ScrollView onScroll={handlescroll}>
          <View style={{ width: '100%', backgroundColor: '#FAF9F6', borderTopEndRadius: 30, borderTopStartRadius: 30, paddingVertical: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20 }}>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
            </ScrollView>

            
          </View>

          <View style={{ width: '100%', backgroundColor: '#FAF9F6',paddingVertical: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20,paddingVertical:5 }}>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', elevation: 3, borderRadius: 15 }}>
              <Image source={{uri:'https://www.revv.co.in/blogs/wp-content/uploads/2021/07/Fully-Sanitized-Revv-Car-1280x720.jpg'}} style={{width:'100%',height:100}}/>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white',  elevation: 3, borderRadius: 10 }}>
                <Image source={{uri:'https://www.revv.co.in/assets/RentalImages/HomeScreen/safeCars/xbanner-sanitised02.png.pagespeed.ic.mSw1kEjtO8.png'}} style={{width:'100%',height:100}}/>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', elevation: 3, borderRadius: 10 }}>
               <Image source={{uri:'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_03-min.jpg'}} style={{width:'100%',height:100}}/>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', elevation: 3, borderRadius: 10 }}>
               <Image source={{uri:'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_04-min.jpg'}} style={{width:'100%',height:100}}/>
              </View>
            
            </ScrollView>

            
          </View>
          <View style={{ width: '100%', backgroundColor: '#FAF9F6',paddingVertical: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20,paddingVertical:5 }}>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
            </ScrollView>

            
          </View>
          <View style={{ width: '100%', backgroundColor: '#FAF9F6',paddingVertical: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20,paddingVertical:5 }}>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
            </ScrollView>

            
          </View>
          <View style={{ width: '100%', backgroundColor: '#FAF9F6',paddingVertical: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20,paddingVertical:5 }}>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
            </ScrollView>

            
          </View>
          <View style={{ width: '100%', backgroundColor: '#FAF9F6',paddingVertical: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20,paddingVertical:5 }}>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
            </ScrollView>

            
          </View>
          <View style={{ width: '100%', backgroundColor: '#FAF9F6',paddingVertical: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20,paddingVertical:5 }}>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
            </ScrollView>

            
          </View>
          <View style={{ width: '100%', backgroundColor: '#FAF9F6',paddingVertical: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20,paddingVertical:5 }}>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
            </ScrollView>

            
          </View>
          <View style={{ width: '100%', backgroundColor: '#FAF9F6',paddingVertical: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20,paddingVertical:5 }}>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
            </ScrollView>

            
          </View>
          <View style={{ width: '100%', backgroundColor: '#FAF9F6',paddingVertical: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20,paddingVertical:5 }}>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
            </ScrollView>

            
          </View>
          <View style={{ width: '100%', backgroundColor: '#FAF9F6',paddingVertical: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20,paddingVertical:5 }}>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
            </ScrollView>

            
          </View>
          <View style={{ width: '100%', backgroundColor: '#FAF9F6',paddingVertical: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20,paddingVertical:5 }}>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
              <View style={{ width: 200, marginHorizontal: 5, backgroundColor: 'white', padding: 12, elevation: 3, borderRadius: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, }}>Flat 20% Off</Text>
                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>for all users</Text>
              </View>
            </ScrollView>

            
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  scrollContent: {
    // paddingTop: HEADER_HEIGHT,
    backgroundColor: 'purple'
  },
  contentText: {
    fontSize: 16,
    padding: 20,
  },
});



export default BasicGesture