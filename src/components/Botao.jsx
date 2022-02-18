import React from 'react';
import {Text, Dimensions, TouchableHighlight, StyleSheet} from 'react-native'


const Style = StyleSheet.create({
    button:{
        fontSize:40,
        height: Dimensions.get('window').width /4,
        width: Dimensions.get('window').width /4,
        padding:20,
        backgroundColor:"#f0f0f0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888"
    },
    buttonOperation: {
        color:"#fff",
        backgroundColor: "#fa8231"
    },
    buttonDouble:{
        width: Dimensions.get('window').width/4*2,
    },
    buttonTriple:{
        width: Dimensions.get('window').width/4*3,
    }
})

export default props => {

    const stylesButton = [Style.button]

    if (props.double) stylesButton.push(Style.buttonDouble)
    if (props.triple) stylesButton.push(Style.buttonTriple)
    if (props.operation) stylesButton.push(Style.buttonOperation)


    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
};