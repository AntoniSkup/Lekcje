import React from 'react'
import { View, Text , Image, TouchableOpacity} from 'react-native'


export default function Zdjecia() {
    const [ imageUri = 'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/mielone_02.jpg', setImageUri ] = React.useState()

    const zmienZdjecie = () => {
        setImageUri('https://image.ceneostatic.pl/data/products/41204046/p-morliny-berlinki-z-serem-parowki-250-g.jpg')
    }
    return (
        <View style={{flex:1}}>
            <TouchableOpacity 
            onPress={()=>zmienZdjecie()}
            style={{flex:1}}>
                
                <Image source={{ uri: imageUri}}  style={{flex:1}} />
            </TouchableOpacity>
        </View>
    )
}
