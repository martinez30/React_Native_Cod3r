import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ioicons from 'react-native-vector-icons/Ionicons'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator 
    screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch(route.name){
                case 'TelaA': 
                iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                    break
                case 'TelaB': 
                    iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                    break
                case 'TelaC': 
                    iconName = focused ? 'ios-list-box' : 'ios-list'
            }

            return <Ioicons name={iconName} size={size} color={color} />
        },
    })}
    tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: {fontSize: 30}
    }} initialRouteName="TelaB">
        <Tab.Screen name="TelaA" component={TelaA}/>
        <Tab.Screen name="TelaB" component={TelaB}/>
        <Tab.Screen name="TelaC" component={TelaC}/>
    </Tab.Navigator>
)