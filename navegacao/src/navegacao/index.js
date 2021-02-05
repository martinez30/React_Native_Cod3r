import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// import Stack from './Stack'
// import Drawer from './Drawer'
import Tab from './Tab'

export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                {/* <Stack /> */}
                {/* <Drawer /> */}
                <Tab />
            </NavigationContainer>
        </SafeAreaView>
    )
}