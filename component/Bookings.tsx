import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withDelay, withTiming, FadeInLeft, FadeInRight } from 'react-native-reanimated'
import Bottom from './Shared/Bottom'
import { borderRadius, responsiveHeight, responsiveWidth } from './styles/variables'

const Bookings = ({ navigation }: any) => {
    const [slideleft, setslideleft] = useState(1);
    const [slideright, setslidetright] = useState(0)
    const bgtoggle = useSharedValue(0)
    const bg2toggle = useSharedValue(1)
    const animatetoogle = useAnimatedStyle((): any => {
        const width = interpolate(bgtoggle.value, [0, 1, 0], [70, 150, 70])

        return {
            width: bg2toggle.value === 1 ? 70 : width,
            backgroundColor: bg2toggle.value === 1 ? 'transparent' : '#2a9df4',
        }
    })
    const animtetoogle2 = useAnimatedStyle((): any => {
        const width = interpolate(bg2toggle.value, [0, 1, 0], [70, 150, 150], Extrapolate.CLAMP)

        return {
            width: bgtoggle.value === 1 ? 70 : width,
            backgroundColor: bgtoggle.value === 1 ? 'transparent' : '#2a9df4',
        }
    }, [])

    useEffect(()=>{
     if(slideleft===0)
     {
        setslidetright(1)
     }
     else if(slideright === 0)
     {
        setslideleft(1)
     }
    },[])
    return (
        <View style={style.container}>
            <View style={style.headercon}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name={"arrow-left-circle"} color={"black"} size={30} />
                </TouchableOpacity>
                <View style={style.tooglebtncon}>
                    <View style={[style.btncon, { overflow: 'hidden' }]}>
                        <Animated.View style={[{ flexDirection: 'row', overflow: 'hidden', alignItems: 'center', justifyContent: 'center', borderRadius: 30, padding: 5, paddingVertical: 15 }, animatetoogle]}>
                            <TouchableOpacity
                                onPress={() => {
                                    setslidetright(0)
                                    if (slideright === 0) {
                                        setslideleft(1)
                                    }

                                    if (bg2toggle.value === 1) {
                                        bgtoggle.value = withTiming(1, { duration: 300 })
                                        bg2toggle.value = withTiming(0)
                                    }


                                }}
                                style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                                <Text style={style.toogletxt}>History</Text>

                            </TouchableOpacity>
                        </Animated.View>
                        <Animated.View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 20, padding: 10, paddingVertical: 15 }, animtetoogle2]}>
                            <TouchableOpacity
                                onPress={() => {
                                    if(slideleft === 0)
                                    {
                                    setslideleft(0)
                                    setslidetright(1)
                                    }
                                    if (bgtoggle.value === 1) {
                                        bgtoggle.value = withTiming(0)
                                        bg2toggle.value = withTiming(1, { duration: 300 })
                                    }


                                }}
                                style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                                <Text style={style.toogletxt}>Booking</Text>

                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </View>
            <ScrollView>
                {slideleft === 1 ? <Animated.View
                    entering={slideleft === 1 ? FadeInLeft : FadeInRight} exiting={FadeInRight}
                    style={style.cardcontiner}>
                    <View style={style.card}>
                        <View style={style.leftbox}>
                            <Text style={style.cardnametxt}>Nexon</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>
                                    Booked on:
                                </Text>
                                <Text style={style.datetxt}>26 Mar 2023</Text>
                            </View>
                            <View style={style.seatcon}>
                                <Text>Seat:</Text>
                                <Text style={style.datetxt}>4 Seater</Text>
                            </View>
                            <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <MaterialCommunityIcons name={"steering"} color={"black"} size={17} />
                                <MaterialCommunityIcons name={"car-wash"} color={"black"} size={17} />
                                <MaterialCommunityIcons name={"clock-time-eight-outline"} color={"black"} size={17} />
                            </View>
                            <View style={{ marginVertical: 2 }}>
                                <TouchableOpacity style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancel Booking</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Image source={{ uri: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-70.jpeg?isig=0&q=80' }} style={style.imgcard} />
                        </View>
                    </View>
                    <View style={style.card}>
                        <View style={style.leftbox}>
                            <Text style={style.cardnametxt}>Nexon</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>
                                    Booked on:
                                </Text>
                                <Text style={style.datetxt}>26 Mar 2023</Text>
                            </View>
                            <View style={style.seatcon}>
                                <Text>Seat:</Text>
                                <Text style={style.datetxt}>4 Seater</Text>
                            </View>
                            <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <MaterialCommunityIcons name={"steering"} color={"black"} size={17} />
                                <MaterialCommunityIcons name={"car-wash"} color={"black"} size={17} />
                                <MaterialCommunityIcons name={"clock-time-eight-outline"} color={"black"} size={17} />
                            </View>
                            <View style={{ marginVertical: 2 }}>
                                <TouchableOpacity style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancel Booking</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Image source={{ uri: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-70.jpeg?isig=0&q=80' }} style={style.imgcard} />
                        </View>
                    </View>
                    <View style={style.card}>
                        <View style={style.leftbox}>
                            <Text style={style.cardnametxt}>Nexon</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>
                                    Booked on:
                                </Text>
                                <Text style={style.datetxt}>26 Mar 2023</Text>
                            </View>
                            <View style={style.seatcon}>
                                <Text>Seat:</Text>
                                <Text style={style.datetxt}>4 Seater</Text>
                            </View>
                            <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <MaterialCommunityIcons name={"steering"} color={"black"} size={17} />
                                <MaterialCommunityIcons name={"car-wash"} color={"black"} size={17} />
                                <MaterialCommunityIcons name={"clock-time-eight-outline"} color={"black"} size={17} />
                            </View>
                            <View style={{ marginVertical: 2 }}>
                                <TouchableOpacity style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancel Booking</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Image source={{ uri: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-70.jpeg?isig=0&q=80' }} style={style.imgcard} />
                        </View>
                    </View>
                    <View style={style.card}>
                        <View style={style.leftbox}>
                            <Text style={style.cardnametxt}>Nexon</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>
                                    Booked on:
                                </Text>
                                <Text style={style.datetxt}>26 Mar 2023</Text>
                            </View>
                            <View style={style.seatcon}>
                                <Text>Seat:</Text>
                                <Text style={style.datetxt}>4 Seater</Text>
                            </View>
                            <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <MaterialCommunityIcons name={"steering"} color={"black"} size={17} />
                                <MaterialCommunityIcons name={"car-wash"} color={"black"} size={17} />
                                <MaterialCommunityIcons name={"clock-time-eight-outline"} color={"black"} size={17} />
                            </View>
                            <View style={{ marginVertical: 2 }}>
                                <TouchableOpacity style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancel Booking</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Image source={{ uri: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-70.jpeg?isig=0&q=80' }} style={style.imgcard} />
                        </View>
                    </View>
                    <View style={style.card}>
                        <View style={style.leftbox}>
                            <Text style={style.cardnametxt}>Nexon</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>
                                    Booked on:
                                </Text>
                                <Text style={style.datetxt}>26 Mar 2023</Text>
                            </View>
                            <View style={style.seatcon}>
                                <Text>Seat:</Text>
                                <Text style={style.datetxt}>4 Seater</Text>
                            </View>
                            <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <MaterialCommunityIcons name={"steering"} color={"black"} size={17} />
                                <MaterialCommunityIcons name={"car-wash"} color={"black"} size={17} />
                                <MaterialCommunityIcons name={"clock-time-eight-outline"} color={"black"} size={17} />
                            </View>
                            <View style={{ marginVertical: 2 }}>
                                <TouchableOpacity style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancel Booking</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Image source={{ uri: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-70.jpeg?isig=0&q=80' }} style={style.imgcard} />
                        </View>
                    </View>
                </Animated.View> : null}

                {
                    slideright === 1 ?
                        <Animated.View
                            entering={slideleft === 1 ? FadeInRight : FadeInLeft} exiting={FadeInLeft}
                            style={style.cardcontiner}>
                            <View style={style.card}>
                                <View style={style.leftbox}>
                                    <Text style={style.cardnametxt}>Nexon</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text>
                                            Booked on:
                                        </Text>
                                        <Text style={style.datetxt}>26 Mar 2023</Text>
                                    </View>
                                    <View style={style.seatcon}>
                                        <Text>Seat:</Text>
                                        <Text style={style.datetxt}>4 Seater</Text>
                                    </View>
                                    <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <MaterialCommunityIcons name={"steering"} color={"black"} size={17} />
                                        <MaterialCommunityIcons name={"car-wash"} color={"black"} size={17} />
                                        <MaterialCommunityIcons name={"clock-time-eight-outline"} color={"black"} size={17} />
                                    </View>
                                    <View style={{ marginVertical: 2 }}>
                                        <TouchableOpacity style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancel Booking</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <Image source={{ uri: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-70.jpeg?isig=0&q=80' }} style={style.imgcard} />
                                </View>
                            </View>
                            <View style={style.card}>
                                <View style={style.leftbox}>
                                    <Text style={style.cardnametxt}>Nexon</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text>
                                            Booked on:
                                        </Text>
                                        <Text style={style.datetxt}>26 Mar 2023</Text>
                                    </View>
                                    <View style={style.seatcon}>
                                        <Text>Seat:</Text>
                                        <Text style={style.datetxt}>4 Seater</Text>
                                    </View>
                                    <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <MaterialCommunityIcons name={"steering"} color={"black"} size={17} />
                                        <MaterialCommunityIcons name={"car-wash"} color={"black"} size={17} />
                                        <MaterialCommunityIcons name={"clock-time-eight-outline"} color={"black"} size={17} />
                                    </View>
                                    <View style={{ marginVertical: 2 }}>
                                        <TouchableOpacity style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancel Booking</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <Image source={{ uri: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-70.jpeg?isig=0&q=80' }} style={style.imgcard} />
                                </View>
                            </View>
                            <View style={style.card}>
                                <View style={style.leftbox}>
                                    <Text style={style.cardnametxt}>Nexon</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text>
                                            Booked on:
                                        </Text>
                                        <Text style={style.datetxt}>26 Mar 2023</Text>
                                    </View>
                                    <View style={style.seatcon}>
                                        <Text>Seat:</Text>
                                        <Text style={style.datetxt}>4 Seater</Text>
                                    </View>
                                    <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <MaterialCommunityIcons name={"steering"} color={"black"} size={17} />
                                        <MaterialCommunityIcons name={"car-wash"} color={"black"} size={17} />
                                        <MaterialCommunityIcons name={"clock-time-eight-outline"} color={"black"} size={17} />
                                    </View>
                                    <View style={{ marginVertical: 2 }}>
                                        <TouchableOpacity style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancel Booking</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <Image source={{ uri: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-70.jpeg?isig=0&q=80' }} style={style.imgcard} />
                                </View>
                            </View>
                            <View style={style.card}>
                                <View style={style.leftbox}>
                                    <Text style={style.cardnametxt}>Nexon</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text>
                                            Booked on:
                                        </Text>
                                        <Text style={style.datetxt}>26 Mar 2023</Text>
                                    </View>
                                    <View style={style.seatcon}>
                                        <Text>Seat:</Text>
                                        <Text style={style.datetxt}>4 Seater</Text>
                                    </View>
                                    <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <MaterialCommunityIcons name={"steering"} color={"black"} size={17} />
                                        <MaterialCommunityIcons name={"car-wash"} color={"black"} size={17} />
                                        <MaterialCommunityIcons name={"clock-time-eight-outline"} color={"black"} size={17} />
                                    </View>
                                    <View style={{ marginVertical: 2 }}>
                                        <TouchableOpacity style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancel Booking</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <Image source={{ uri: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-70.jpeg?isig=0&q=80' }} style={style.imgcard} />
                                </View>
                            </View>
                            <View style={style.card}>
                                <View style={style.leftbox}>
                                    <Text style={style.cardnametxt}>Nexon</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text>
                                            Booked on:
                                        </Text>
                                        <Text style={style.datetxt}>26 Mar 2023</Text>
                                    </View>
                                    <View style={style.seatcon}>
                                        <Text>Seat:</Text>
                                        <Text style={style.datetxt}>4 Seater</Text>
                                    </View>
                                    <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <MaterialCommunityIcons name={"steering"} color={"black"} size={17} />
                                        <MaterialCommunityIcons name={"car-wash"} color={"black"} size={17} />
                                        <MaterialCommunityIcons name={"clock-time-eight-outline"} color={"black"} size={17} />
                                    </View>
                                    <View style={{ marginVertical: 2 }}>
                                        <TouchableOpacity style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancel Booking</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <Image source={{ uri: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-70.jpeg?isig=0&q=80' }} style={style.imgcard} />
                                </View>
                            </View>
                        </Animated.View> : null
                }
            </ScrollView>
            <Bottom navigation={navigation} nav={"booking"} />
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headercon: {
        width: '100%',
        padding: responsiveWidth(3)
    },
    tooglebtncon: {
        width: responsiveWidth(90),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10

    },
    btncon: {
        width: responsiveWidth(60),
        backgroundColor: '#ECECEC',
        padding: responsiveWidth(2),
        borderRadius: borderRadius.boxRadius,
        marginVertical: responsiveWidth(3),
        flexDirection: 'row',
        alignItems: 'center'
    },
    toogletxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    cardcontiner: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: responsiveWidth(90),
        backgroundColor: 'white',
        borderRadius: borderRadius.normal,
        padding: responsiveWidth(1.4),
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: responsiveWidth(3)

    },
    cardnametxt: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold'
    },
    imgcard: {
        width: responsiveWidth(17),
        height: responsiveHeight(6)
    },
    datetxt: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    },
    seatcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftbox: {
        width: responsiveWidth(55)
    },
    desctxt: {
        fontSize: 6
    }
})
export default Bookings