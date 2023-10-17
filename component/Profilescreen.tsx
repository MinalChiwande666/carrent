import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// @ts-ignore

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Profilescreen = ({navigation}:any) => {

    const settinbox = [
        {
            id: 1,
            name: 'Password',
            icon: 'eye-outline'
        },
        {
            id: 2,
            name: 'Email',
            icon: 'eye-outline'
        },
        {
            id: 3,
            name: 'Support',
            icon: 'face-agent'
        },
        {
            id: 4,
            name: 'Sign Out',
            icon: 'logout'
        }
    ]
    return (
        <LinearGradient colors={['#1AA7EC', 'purple']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }} >
            <View style={style.headcon}>
                <TouchableOpacity
                onPress={()=>{
                    navigation.goBack()
                }}
                >
                    <MaterialCommunityIcons name={"chevron-left"} size={34} color={"white"} />
                </TouchableOpacity>
                <View >
                    <Text style={{fontSize:17,color:'white'}}>Profile</Text>
                </View>
            </View>
            <View style={style.imgcon}>

                <Image source={{ uri: 'https://image.lexica.art/full_jpg/f358f622-4df3-473c-978e-acb9efa128d5' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                <Text style={style.protxt}>Minal</Text>
            </View>
            <View style={style.detailcon}>
                <View style={style.settingcon}>
                    <View style={style.settingbox}>
                        <Text style={style.settingtxt}>Settings</Text>
                        {
                            settinbox.map((item, i) => (



                                <Pressable style={style.btnsettings}>
                                    <Text style={style.settingtxtbox}>{item.name}</Text>
                                    <MaterialCommunityIcons name={item.icon} size={17} color={'black'} />
                                </Pressable>


                            ))
                        }
                    </View>
                </View>
            </View>
        </LinearGradient>

    )
}

const style = StyleSheet.create({
    headcon: {
        padding: 4,
        marginVertical: 5,
        flexDirection:'row',
        alignItems:'center'
    },
    imgcon: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        position: 'relative',
        top: 80,
        zIndex: 999,

    },
    protxt: {
        color: 'black',
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    detailcon: {
        flex: 1,
        backgroundColor: 'white',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30
    },
    settingtxt: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    settingcon: {
        width: '100%',
        marginTop: 90,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    settingbox:
    {
        width: '90%'
    },
    btnsettings: {
        width: '100%',
        backgroundColor: '#eee',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    settingtxtbox: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    }

})
export default Profilescreen