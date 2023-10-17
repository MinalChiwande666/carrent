import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, Alert, Touchable, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'


import { SwipeablePanel } from 'rn-swipeable-panel';
// @ts-ignore
import img1 from '../component/assets/Alfa_Romeo_logo.png'
// @ts-ignore
import img2 from '../component/assets/BMW_1916.png'
// @ts-ignore
import img3 from '../component/assets/toyota-astra-motor.png'
// @ts-ignore

import img4 from '../component/assets/Toyota-logo.png'
import Bottom from './Shared/Bottom'
import { borderRadius, fontSize, responsiveWidth } from './styles/variables'

const Homescreen = ({ navigation }: any) => {
  const scroll = useSharedValue(0)
  const [activepanel, setactivepanel] = useState<any>(false)
  const [paneldata, setpaneldata] = useState<any>({})
  const rbref = useRef()
  const [featured, setfeatured] = useState([
    {
      id: 1,
      name: 'Suv',
      rate: '4/5',
      price: '3000',
      img: 'https://cars.tatamotors.com/images/dark/m-altroz-home.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 1,
      name: 'Suv',
      rate: '4/5',
      price: '3000',
      img: 'https://cars.tatamotors.com/images/dark/m-altroz-home.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 1,
      name: 'Suv',
      rate: '4/5',
      price: '3000',
      img: 'https://cars.tatamotors.com/images/dark/m-altroz-home.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 1,
      name: 'Suv',
      rate: '4/5',
      price: '3000',
      img: 'https://cars.tatamotors.com/images/dark/m-altroz-home.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 1,
      name: 'Suv',
      rate: '4/5',
      price: '3000',
      img: 'https://cars.tatamotors.com/images/dark/m-altroz-home.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 1,
      name: 'Suv',
      rate: '4/5',
      price: '3000',
      img: 'https://cars.tatamotors.com/images/dark/m-altroz-home.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 1,
      name: 'Suv',
      rate: '4/5',
      price: '3000',
      img: 'https://cars.tatamotors.com/images/dark/m-altroz-home.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },

  ])

  useEffect(() => {

  }, [])
  const scrollstyle = useAnimatedStyle((): any => {
    const header = interpolate(scroll.value, [0, 90], [100, 90])

    return {
      padding: scroll.value >= 100 ? 0 : 10,

      opacity: scroll.value >= 100 ? 0 : 1,
      height: header
    }
  })

  const bgstyle = useAnimatedStyle((): any => {
    return {
      backgroundColor: scroll.value >= 100 ? 'white' : '',
      elevation: scroll.value >= 100 ? 3 : 0
    }
  })
  const handlescroll = (event: any) => {
    console.log(event?.nativeEvent?.contentOffset?.y)
    scroll.value = event?.nativeEvent?.contentOffset?.y
  }
  return (
    <><SafeAreaView>
      <LinearGradient colors={['#1AA7EC', 'white']} start={{ x: 0, y: 2 }} end={{ x: 1, y: 0}}>
        <Animated.View style={[styles.headercon, bgstyle]}>
          <Animated.View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: responsiveWidth(1.5) }, scrollstyle]}>
            <TouchableOpacity
           
            style={{ backgroundColor: 'white', padding: responsiveWidth(1.5), borderRadius: responsiveWidth(2)}}>
              <MaterialCommunityIcons name="menu" color="black" size={24} />
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=>{
              navigation.navigate('profile')
            }}
            style={{ backgroundColor: 'white', borderRadius: borderRadius.boxRadius2 }}>
              <Image source={{ uri: 'https://image.lexica.art/full_jpg/f358f622-4df3-473c-978e-acb9efa128d5' }} style={{ width: responsiveWidth(13), height: responsiveWidth(13), borderRadius: responsiveWidth(10) }} />
            </TouchableOpacity>
          </Animated.View>
          <Pressable onPress={() => {
            navigation.navigate('Serachcity')
          }} style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: responsiveWidth(2), elevation: 3 }}>
            <View style={{ width: '90%', padding: responsiveWidth(3), borderRadius: responsiveWidth(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', elevation: 3 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1AA7EC', borderRadius: responsiveWidth(10), padding: responsiveWidth(2) }}>
                <MaterialCommunityIcons name="map-marker-alert-outline" size={24} color="white" />
              </View>
              <View style={{ width: '70%' }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Select city to search</Text>
              </View>
              <View>
                <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
              </View>
            </View>
          </Pressable>
        </Animated.View>
      </LinearGradient>
    </SafeAreaView>
      <LinearGradient colors={['#1AA7EC', 'white']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0}} style={{flex:1}}>
        <ScrollView onScroll={handlescroll}>
          <View style={{ backgroundColor: 'white', width: '100%', borderTopEndRadius: 20, borderTopStartRadius: 20, padding: 10,marginTop:5 }}>
            <Text style={{ fontSize: fontSize.normal, fontWeight: 'bold', color: 'black' }}>Top Rated</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 5 }}>

              <View style={{ marginHorizontal: 10, width: 150, elevation: 3, backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
                <Image source={{ uri: 'https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg' }} style={{ width: 100, height: 50 }} />
                <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />

                </View>
                <View>
                  <Text style={{ fontSize: 9, color: 'black', fontWeight: 'bold' }}>Suv</Text>
                  <Text>Flat 10% Off</Text>
                </View>
              </View>

              <View style={{ marginHorizontal: 10, width: 150, elevation: 3, backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
                <Image source={{ uri: 'https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg' }} style={{ width: 100, height: 50 }} />
                <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />

                </View>
                <View>
                  <Text style={{ fontSize: 9, color: 'black', fontWeight: 'bold' }}>Suv</Text>
                  <Text>Flat 10% Off</Text>
                </View>
              </View>

              <View style={{ marginHorizontal: 10, width: 150, elevation: 3, backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
                <Image source={{ uri: 'https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg' }} style={{ width: 100, height: 50 }} />
                <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />

                </View>
                <View>
                  <Text style={{ fontSize: 9, color: 'black', fontWeight: 'bold' }}>Suv</Text>
                  <Text>Flat 10% Off</Text>
                </View>
              </View>

              <View style={{ marginHorizontal: 10, width: 150, elevation: 3, backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
                <Image source={{ uri: 'https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg' }} style={{ width: 100, height: 50 }} />
                <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />

                </View>
                <View>
                  <Text style={{ fontSize: 9, color: 'black', fontWeight: 'bold' }}>Suv</Text>
                  <Text>Flat 10% Off</Text>
                </View>
              </View>

              <View style={{ marginHorizontal: 10, width: 150, elevation: 3, backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
                <Image source={{ uri: 'https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg' }} style={{ width: 100, height: 50 }} />
                <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />
                  <MaterialCommunityIcons name="star" color={"yellow"} size={15} />

                </View>
                <View>
                  <Text style={{ fontSize: 9, color: 'black', fontWeight: 'bold' }}>Suv</Text>
                  <Text>Flat 10% Off</Text>
                </View>
              </View>

            </ScrollView>
               <Text style={{fontSize:15,marginVertical:5,fontWeight:'bold',color:'black'}}>Top Brands</Text>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{padding:5}}
            >
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <View style={{marginHorizontal:10}}>
               <Image source={img1} style={{width:40,height:40}}/>
               </View>
               <View style={{marginHorizontal:10}}>
               <Image source={img2} style={{width:40,height:40}}/>
               </View>
               <View style={{marginHorizontal:10}}>
               <Image source={img3} style={{width:50,height:50}}/>
               </View>
               <View style={{marginHorizontal:10}}>
               <Image source={img4} style={{width:40,height:25}}/>
               </View>
               <View style={{marginHorizontal:10}}>
               <Image source={img4} style={{width:40,height:25}}/>
               </View>
               <View style={{marginHorizontal:10}}>
               <Image source={img2} style={{width:40,height:40}}/>
               </View>
               <View style={{marginHorizontal:10}}>
               <Image source={img2} style={{width:40,height:40}}/>
               </View>
            </View>
          
            </ScrollView>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 10 }}>Featured</Text>
            <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              {
                featured.map((item, i) => (

                  <TouchableOpacity
                    onPress={() => {
                      setpaneldata(item)
                      setactivepanel(true)
                    }}
                    style={{ width: '90%', marginVertical: 10, borderRadius: 10 }}>

                    <Image source={{ uri: item.img }} style={{ width: '100%', height: 150, borderRadius: 10, opacity: 1 }} />
                    <View style={{ position: 'absolute', backgroundColor: 'rgba(37, 32, 32, 0.300)', width: '100%', height: 150, borderRadius: 10 }} />
                    <TouchableOpacity style={{ position: 'absolute', right: 5, top: 4 }}>
                      <MaterialCommunityIcons name={"heart"} color={"pink"} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', right: 40, top: 4 }}>
                      <MaterialCommunityIcons name={"bookmark-outline"} color={"white"} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', left: 10, top: 4 }}>
                      <MaterialCommunityIcons name={"star"} color={"yellow"} size={24} />
                    </TouchableOpacity>
                  </TouchableOpacity>
                ))
              }

            </View>
          </View>
        </ScrollView>
      </LinearGradient>
      {!activepanel ? <Bottom nav={"Home"} navigation={navigation}/> : null}
      <SwipeablePanel
        isActive={activepanel}
        closeOnTouchOutside={false}
        onClose={() => setactivepanel(false)}
        fullWidth={true}
        // openLarge={true}
        barContainerStyle={{
          backgroundColor: 'lightgray'
        }}
        closeRootStyle={{
          backgroundColor: '#1AA7EC'
        }}
        style={{
          
          backgroundColor: 'rgb(55, 38, 128)'
        }}
        closeIconStyle={{
          backgroundColor: 'white',

        }}
        onlyLarge={true}
        showCloseButton={true}
        allowTouchOutside={false}
      >
        <LinearGradient  colors={['#1AA7EC', 'purple']} start={{ x: 0, y: 2 }} end={{ x: 1, y: 0}} style={{ flex: 1,height:'100%' }}>
          <View>
            <Image source={{ uri: paneldata.img }} style={{ width: 400, height: 200 }} />
            <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15 }}>
              <View style={{ width: 85, height: 5, borderRadius: 10, backgroundColor: 'black', marginVertical: 5 }}>

              </View>
              <View style={{ width: 85, height: 5, borderRadius: 10, backgroundColor: 'gray', marginVertical: 5 }}>

              </View>
              <View style={{ width: 85, height: 5, borderRadius: 10, backgroundColor: 'gray', marginVertical: 5 }}>

              </View>
              <View style={{ width: 85, height: 5, borderRadius: 10, backgroundColor: 'gray', marginVertical: 5 }}>

              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginVertical: 4, marginHorizontal: 5 }}>{paneldata.name}</Text>
              <View style={{ width: '30%', height: 5, flexDirection: 'row', marginHorizontal: 5 }}>
                <View style={{ width: '90%', backgroundColor: 'green', height: 5 }} />
                <View style={{ width: '10%', backgroundColor: 'red', height: 5 }} />

              </View>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 5 }}>
              <MaterialCommunityIcons name={"star"} size={18} color={"red"} />
              <MaterialCommunityIcons name={"star"} size={18} color={"red"} />
              <MaterialCommunityIcons name={"star"} size={18} color={"red"} />
              <MaterialCommunityIcons name={"star"} size={18} color={"red"} />
              <Text style={{ marginHorizontal: 2, color: 'white' }}>{paneldata.rate}</Text>
            </View>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
              <Text style={{ fontSize: 15, fontFamily: 'sans-serif', color: 'lightgray' }}>{paneldata.desc}</Text>
            </View>

          </View>
          <View style={{ marginHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Rs:</Text>
            <Text style={{ fontSize: 14, color: 'white', marginHorizontal: 3 }}>{paneldata.price}</Text>
          </View>
          <View style={{ position: 'relative', bottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 50, marginHorizontal: 5 }}>
            <TouchableOpacity style={{ width: 150, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'lightgray', padding: 10, borderRadius: 5 }}>
              <Text style={{ color: 'lightgray', fontSize: 16, fontWeight: 'bold' }}>Contact us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 150, backgroundColor: 'black', padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SwipeablePanel>

    </>
  )
}
var styles = StyleSheet.create({
  headercon: {
    // backgroundColor: '#1AA7EC',

  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  header: {
    height: 200
  },
  head: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tooglebtn: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10
  },
  headtxt: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  txt: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  searchbox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10
  },
  search: {
    width: '90%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 25,
    // position:'absolute',
    // top:5,
    elevation: 5,


  },
  searchtxt: {
    color: 'black',
    fontWeight: 'bold'
  },
  main: {
    width: '100%',
    backgroundColor: 'white'
  },
  maintop: {
    //  marginTop:90,
    borderTopEndRadius: 20,
    backgroundColor: 'white',
    borderTopStartRadius: 20
  }
});
export default Homescreen