import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/core'

import FirstComponent from '../components/FirstComponent'

export default function HomeScreen() {

    const navigation = useNavigation()
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <TouchableOpacity onPress={()=>navigation.navigate("Post")}>
                <Text style={{color:"blue"}}>Post screen</Text>
            </TouchableOpacity>

            {/* <FirstComponent  title={'walec'} typ={"kwadrat"} />
            <FirstComponent  title={'walec'} typ={"kolo"} /> */}
            
            <TouchableOpacity onPress={()=>navigation.navigate("List")}>
                <Text style={{color:"blue"}}>Go to user list</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=> navigation.navigate("Testy")}>
                <Text style={{color:"blue"}}>Testy bazy danych</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("Dania")}>
                <Text style={{color:"blue"}}>Dania</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("Funkcyjne")}>
                <Text style={{color:"blue"}}>Funkcyjne</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("Zdjecia")}>
                <Text style={{color:"blue"}}>Zdjecia</Text>
            </TouchableOpacity>
        </View>
    );
}