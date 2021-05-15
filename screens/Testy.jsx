import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { pozyskajDane } from '../actions/dane.jsx'

export default class Testy extends Component {

    state = {
        text:'Lets see whether it works'
    }

    reverseText = () => {
        let newArr = []

        let array = this.state.text.split("")
        let len = array.length
        for(let i = len; i>=0; i--){
            newArr.push(array[i])
        }

        // let reversedText = JSON.stringify(newArr)

        this.setState({newText:newArr})
    }



    render() {
        return (
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            }}>
                
                <TouchableOpacity style={{
                    padding:30,
                    backgroundColor:'blue',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:30
                    }}
                    onPress={()=>pozyskajDane()}

                    >
                    <Text style={{color:'white',fontSize:24}}>Zapytaj o dane</Text>
                </TouchableOpacity>



                <Text>{this.state.text}</Text>
                <TouchableOpacity onPress={()=>this.reverseText()}>
                    <Text>Reverse text</Text>
                </TouchableOpacity>
                <Text>{this.state.newText}</Text>

            </View>
        )
    }
}
