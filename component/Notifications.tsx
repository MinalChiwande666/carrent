import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Easing } from 'react-native'
import React from 'react'
import Bottom from './Shared/Bottom'
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated'
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors, fontSize, responsiveHeight, responsiveWidth } from './styles/variables'
const Notifications = ({ navigation }: any) => {
  return (
    <>
      <View style={style.container}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
            style={style.notifyleftbtn}>
            <MaterialCommunityIcons name={'chevron-left'} color={'black'} size={35} />
            <Text style={style.headtxt}>Notification</Text>
          </TouchableOpacity>
        </View>
        <View style={style.notifycon}>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.newcon}>
              <Text style={style.newheadtxt}>New</Text>
              <Animated.View entering={FadeInLeft.duration(1000)} exiting={FadeInRight}>
                <TouchableOpacity style={style.newnotifybtn}>
                  <MaterialCommunityIcons name={"car"} size={30} color={"green"} />
                  <View>
                    <Text style={style.notifytextnew}>Best car Just arrived here click to check</Text>
                  </View>
                  <View>
                    <Image source={{ uri: 'https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg' }} style={style.notifyimg} />
                  </View>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View entering={FadeInLeft.duration(1000)} exiting={FadeInRight}>
                <TouchableOpacity style={style.newnotifybtn}>
                  <MaterialCommunityIcons name={"car"} size={30} color={"green"} />
                  <View>
                    <Text style={style.notifytextnew}>Best car Just arrived here click to check</Text>
                  </View>
                  <View>
                    <Image source={{ uri: 'https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg' }} style={style.notifyimg} />
                  </View>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View entering={FadeInLeft.duration(1000)} exiting={FadeInRight}>
                <TouchableOpacity style={style.newnotifybtn}>
                  <MaterialCommunityIcons name={"car"} size={30} color={"green"} />
                  <View>
                    <Text style={style.notifytextnew}>Best car Just arrived here click to check</Text>
                  </View>
                  <View>
                    <Image source={{ uri: 'https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg' }} style={style.notifyimg} />
                  </View>
                </TouchableOpacity>
              </Animated.View>
            </View>

            <Animated.View entering={FadeInLeft.duration(1000)} exiting={FadeInRight}>
              <TouchableOpacity style={style.newnotifybtn}>
                <MaterialCommunityIcons name={"car"} size={30} color={"green"} />
                <View>
                  <Text style={style.notifytextnew}>Best car Just arrived here click to check</Text>
                </View>
                <View>
                  <Image source={{ uri: 'https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg' }} style={style.notifyimg} />
                </View>
              </TouchableOpacity>
            </Animated.View>
            <View style={[style.newcon, { marginVertical: responsiveWidth(6) }]}>
              <Text style={style.newheadtxt}>Earlier Today</Text>
              <Animated.View entering={FadeInLeft.duration(1000)} exiting={FadeInRight}>
                <TouchableOpacity style={style.newnotifybtn}>
                  <MaterialCommunityIcons name={"car"} size={30} color={"green"} />
                  <View>
                    <Text style={style.notifytextnew}>Best car Just arrived here click to check</Text>
                  </View>
                  <View>
                    <Image source={{ uri: 'https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg' }} style={style.notifyimg} />
                  </View>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View entering={FadeInLeft.duration(1000)} exiting={FadeInRight}>
                <TouchableOpacity style={style.newnotifybtn}>
                  <MaterialCommunityIcons name={"car"} size={30} color={"green"} />
                  <View>
                    <Text style={style.notifytextnew}>Best car Just arrived here click to check</Text>
                  </View>
                  <View>
                    <Image source={{ uri: 'https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg' }} style={style.notifyimg} />
                  </View>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View entering={FadeInLeft.duration(1000)} exiting={FadeInRight}>
                <TouchableOpacity style={style.newnotifybtn}>
                  <MaterialCommunityIcons name={"car"} size={30} color={"green"} />
                  <View>
                    <Text style={style.notifytextnew}>Best car Just arrived here click to check</Text>
                  </View>
                  <View>
                    <Image source={{ uri: 'https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg' }} style={style.notifyimg} />
                  </View>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </ScrollView>
        </View>

      </View>
      <Bottom navigation={navigation} nav={"notification"} />
    </>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: responsiveWidth(2)
  },
  headtxt: {
    fontSize: fontSize.semiLarge,
    fontWeight: 'bold',
    color: 'black'
  },
  notifyleftbtn: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  notifycon: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveWidth(5)
  },
  newcon: {
    width: responsiveWidth(90),
    flexDirection: 'column',


  },
  newheadtxt: {
    fontSize: fontSize.normal,
    fontWeight: 'bold',
    color: 'black'
  },
  notifyimg: {
    width: responsiveWidth(12),
    height: responsiveHeight(5)
  },
  newnotifybtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: responsiveWidth(0.5),

    borderBottomColor: '#2a9df4',
    borderBottomWidth: 0.4,
    marginVertical: responsiveWidth(3)
  },
  notifytextnew: {
    fontSize: fontSize.normal,
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: 5
  }
})
export default Notifications