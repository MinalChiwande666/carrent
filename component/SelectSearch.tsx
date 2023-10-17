import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Animated, { useAnimatedStyle, useSharedValue,withSpring,withTiming,withDelay } from 'react-native-reanimated'
const SelectSearch = () => {

  const animatedcard = useSharedValue(0)

  const cardstyle = useAnimatedStyle(():any=>{
    return{
      opacity:animatedcard.value,
      transform:[{scale:animatedcard.value}]
    }
  },[])

  useEffect(()=>{
    animatedcard.value = withDelay(1000,withSpring(1))
  },[])
  return (
    <View style={style.container}>
      <View style={style.searchbarcontainer}>
        <View style={style.searchbox}>
         <MaterialCommunityIcons name={"magnify"} color={"lightgray"} size={24}/>
         <View style={{width:'80%'}}>
            <TextInput
            placeholder='Search Your city'
            style={{padding:2}}
            />
         </View>
         <View>
            <MaterialCommunityIcons name={"car"} color={"black"} size={24}/>
         </View>
        </View>
      </View>

      <View style={style.citycontainer}>
        <View style={style.cities}>
          <Text style={style.cityheadtxt}>Top Cities</Text>
          <View style={style.cityboxes}>
            <Animated.View style={cardstyle}>
              <TouchableOpacity>
              <Image source={{uri:'https://us.123rf.com/450wm/gropgrop/gropgrop1902/gropgrop190200057/124954719-bangalore-skyline-karnataka-india-this-illustration-represents-the-city-with-its-most-notable.jpg?ver=6'}} style={style.img}/>
              <Text style={style.citytxt}>Banglore</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={cardstyle}>
            <TouchableOpacity>
              <Image source={{uri:'https://previews.123rf.com/images/booblgum/booblgum1603/booblgum160300071/53592486-outline-mumbai-skyline-with-blue-landmarks-vector-illustration-business-travel-and-tourism-concept.jpg'}} style={style.img}/>
              <Text style={style.citytxt}>Mumbai</Text>
            </TouchableOpacity>
            </Animated.View>
            <Animated.View style={cardstyle}>
            <TouchableOpacity>
              <Image source={{uri:'https://us.123rf.com/450wm/gropgrop/gropgrop1901/gropgrop190100028/125803862-hyderabad-skyline-telangana-india-this-illustration-represents-the-city-with-its-most-notable.jpg?ver=6'}} style={style.img}/>
              <Text style={style.citytxt}>Hydrabad</Text>
            </TouchableOpacity>
            </Animated.View>
            <Animated.View style={cardstyle}>
            <TouchableOpacity>
              <Image source={{uri:'https://graphicriver.img.customer.envatousercontent.com/files/226093145/Chennai1_outline_590.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=1dae20cc15db55510d5b8c7295528132'}} style={style.img}/>
              <Text style={style.citytxt}>Chennai</Text>
            </TouchableOpacity>
            </Animated.View>
            <Animated.View style={cardstyle}>
            <TouchableOpacity>
              <Image source={{uri:'https://us.123rf.com/450wm/gropgrop/gropgrop1902/gropgrop190200057/124954719-bangalore-skyline-karnataka-india-this-illustration-represents-the-city-with-its-most-notable.jpg?ver=6'}} style={style.img}/>
              <Text style={style.citytxt}>Banglore</Text>
            </TouchableOpacity>
            </Animated.View>
            <Animated.View style={cardstyle}>
            <TouchableOpacity>
              <Image source={{uri:'https://us.123rf.com/450wm/gropgrop/gropgrop1902/gropgrop190200057/124954719-bangalore-skyline-karnataka-india-this-illustration-represents-the-city-with-its-most-notable.jpg?ver=6'}} style={style.img}/>
              <Text style={style.citytxt}>Banglore</Text>
            </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>

      <View style={style.othercitycontainer}>
        <View style={style.othercitybox}>
          <Text style={style.cityheadtxt}>Other Cities</Text>

          <View style={style.dropcontainer}>
            <View style={style.dropbox}>
              <Text style={style.droptxt}>Banglore</Text>
            </View>
            <View style={style.dropbox}>
              <Text style={style.droptxt}>Banglore</Text>
            </View>
            <View style={style.dropbox}>
              <Text style={style.droptxt}>Banglore</Text>
            </View>
            <View style={style.dropbox}>
              <Text style={style.droptxt}>Banglore</Text>
            </View>
            <View style={style.dropbox}>
              <Text style={style.droptxt}>Banglore</Text>
            </View>
            <View style={style.dropbox}>
              <Text style={style.droptxt}>Banglore</Text>
            </View>
            <View style={style.dropbox}>
              <Text style={style.droptxt}>Banglore</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    searchbarcontainer:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    searchbox:{
        width:'75%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        elevation:3,
        padding:10,
        borderRadius:25,
        marginVertical:10
    },
    cityheadtxt:{
     color:'lightgray',
     fontSize:30,
     fontWeight:'bold'
    },
    citycontainer:{
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginVertical:10
    },
    cities:{
      width:'90%'
    },
    img:{
      width:100,
      height:100
    },
    citytxt:{
      color:'lightblue',
      fontSize:18,
      fontWeight:'bold'

    },
    cityboxes:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      flexWrap:'wrap'
    },
    othercitycontainer:{
      width:'100%',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      marginVertical:10
    },
    othercitybox:{
      width:'90%'
    },
    dropcontainer:{
      width:'90%',
      flexDirection:'column',
     
      borderWidth:1,
      borderColor:'lightgray',
      borderRadius:5
      
    },
    dropbox:{
     padding:5,
     borderBottomColor:'lightgray',
     borderBottomWidth:1
    },
    droptxt:{
      color:'black',
      fontSize:17,
      marginVertical:5,
      marginHorizontal:5
    }
})

export default SelectSearch