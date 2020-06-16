import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Start from './pages/Start';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator 
            headerMode="none"
        >
            <Stack.Screen name='Start' component={Start}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )
}