import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Dania extends Component {

    state = {
        danie: 'parowki'
    }

    zmienDanie = () => {
        if(this.state.danie == 'parowki'){
            this.setState({danie:'kotlet'})
        }else {
            this.setState({danie:'parowki'})
        }
    }
    render() {
        return (
            <View style={{justifyContent:'center',alignItems:'center',}}>

                <TouchableOpacity style={{
                    width:200,
                    height:100,
                    borderRadius:30,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'blue'
                }}
                onPress={()=>this.zmienDanie()}
                >
                    <Text style={{color:"white", fontSize:20,fontWeight:'bold'}}>Zmien danie</Text>
                </TouchableOpacity>
                <Text style={{fontSize:30}}>{this.state.danie} </Text>
            </View>
        )
    }
}
