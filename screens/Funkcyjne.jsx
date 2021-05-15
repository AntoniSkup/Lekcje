import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Funkcyjne() {

    
    const [danie='jajecznica', setDanie] = React.useState();

    const zmienDanie = () => {
        if(danie=='jajecznica') {
            setDanie('parowki');
        }else{
            setDanie('jajecznica');
        }
    }

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
            onPress={()=>zmienDanie()}
            >
                <Text style={{color:"white", fontSize:20,fontWeight:'bold'}}>Zmien danie</Text>
            </TouchableOpacity>
            <Text style={{fontSize:30}}>{danie} </Text>
        </View>
    )
}
