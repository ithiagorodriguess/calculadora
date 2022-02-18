import React from 'react';
import {Text, View, StyleSheet} from 'react-native'


const Style = StyleSheet.create({
    display:{
        flex:1,
        padding:20,
        justifyContent:"center",
        backgroundColor:"rgba(0,0,0,0.6)",
        alignItems:"flex-end",        
    },
    displayValue: {
        fontSize:60,
        color: "#fff"
    }
})

export default props => {
    return(
        <View style={Style.display}>
            <Text style={Style.displayValue} numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    )
};