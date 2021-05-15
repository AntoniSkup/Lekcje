import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class ProfileScreen extends Component {

    render() {
        const { params } = this.props.route

        this.props.navigation.setOptions({
            headerTitle: params.imie
        })


        return (
            <View style={{flex:1, alignItems:'center'}}>

                <View 
                style={{
                        borderRadius:150,


                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                    backgroundColor:'white'
                }}>
                    <Image
                    source={{uri: params.profilePic}} 
                    style={{
                        width:300,
                        height:300, 
                        borderRadius:150, 
                        margin:10,
                    }}
                    />
                </View>

                


                <View style={{
                    width:'90%', 
                    flex:1, 
                    backgroundColor:'white', 
                    borderRadius:20,
                    alignItems:'center', //wysrodkowanie
                    padding:20
                }}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:22, fontWeight:'bold'}}>Imie: </Text>
                        <Text style={{color:'blue', fontSize:22, fontWeight:'bold'}}>{params.imie}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:22, fontWeight:'bold'}}>Wiek: </Text>
                        <Text style={{color:'blue', fontSize:22, fontWeight:'bold'}}>{params.wiek}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
