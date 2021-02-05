import React from 'react';
import { View } from 'react-native'

export default props => { 
    const lado = props.lado || 50
    const altura = props.altura || 50
    
    return (
        <View style={{
            height: lado,
            width: altura,
            backgroundColor: props.cor || '#000'
        }} />
)}
