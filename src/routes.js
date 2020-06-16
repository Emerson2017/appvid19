import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Start from './pages/Start';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Statistics from './pages/Statistics'

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator headerMode="none">
            {/* <Stack.Screen name='Start' component={Start}/>
            <Stack.Screen name='Login' component={Login}/> */}
            {/* <Stack.Screen name='Home' component={Home}/> */}
            <Stack.Screen name='Statistics' component={Statistics}/>
            {/* <Stack.Screen name='Cadastro' component={Cadastro}/> */}
        </Stack.Navigator>
    )
}