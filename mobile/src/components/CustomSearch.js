import { View, TextInput } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';


const CustomSearch = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8
        }}>
            <Feather
                name="search"
                size={20}
                color="#C6C6C6"
                style={{ marginRight: 5 }}
            />
            <TextInput
                onChangeText={props.setSearch}
                placeholder="Search" />
        </View>
    )
}

export default CustomSearch