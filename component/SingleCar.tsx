import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'

const SingleCar = () => {
    return (
        <View style={style.container}>
           
            <View>
                <Image source={{ uri: 'https://cars.tatamotors.com/images/dark/m-altroz-home.jpg' }} style={style.image} />
            </View>
            <View style={style.maincontainer}>
            <View style={style.bar}>
                <View style={{width:70,height:5,backgroundColor:'lightgray',borderRadius:20}}>

                </View>
            </View>
            <View style={{borderBottomWidth:1,marginHorizontal:10}}>
                <Text style={style.headtxt}>SUV - Car for desire</Text>
                </View>
                <View style={style.starcon}>
                    <MaterialCommunityIcons name={"star"} color={'red'} size={15} />
                    <MaterialCommunityIcons name={"star"} color={'red'} size={15} />
                    <MaterialCommunityIcons name={"star"} color={'red'} size={15} />
                    <MaterialCommunityIcons name={"star"} color={'red'} size={15} />
                    <Text>4/5</Text>
                </View>
                <View style={style.desccon}>
                    
                        <Text style={style.desctxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
                  
                </View>
                <View style={style.availcon}>
                    <Text style={style.availabletxt}>Available at</Text>
                    <MaterialCommunityIcons name={"clock"} style={{ marginHorizontal: 5 }} size={15} color={"black"} />

                </View>
                <View style={style.timecon}>
                    <TouchableOpacity style={style.btntime}>
                        <Text style={style.timetxt}>10:00 am</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btntime}>
                        <Text style={style.timetxt}>10:00 am</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btntime}>
                        <Text style={style.timetxt}>10:00 am</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btntime}>
                        <Text style={style.timetxt}>10:00 am</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',marginVertical:10}}> 
                    <TouchableOpacity style={style.btn}>
                       
                         <Text style={{color:'white'}}>Book Now</Text>
                     
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.666)'
    },
    image: {
        width: '100%',
        height: 300
    },
    headtxt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 10,
        marginVertical: 10,
        // borderBottomWidth: 1
    },
    maincontainer: {
        backgroundColor: 'white',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        marginTop: 2,

    },
    starcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10
    },
    desccon: {
        // padding:7,
        marginHorizontal: 10,
        marginVertical: 5
    },
    desctxt: {
        fontSize: 15,
        color: 'black'
    },
    availcon: {
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    availabletxt: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    btntime: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 5,
        width: 80,
        borderColor: 'black',
        marginVertical:5

    },
    timecon: {
        width:'70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 5,
        flexWrap:'wrap'
    },
    timetxt: {
        color: 'black',
        fontWeight: '900',
        fontSize: 12
    },btn:{
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        padding:15
    },bar:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        justifyContent:'center',
        marginVertical:10
    }
})
export default SingleCar