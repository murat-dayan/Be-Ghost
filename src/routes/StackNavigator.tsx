import React from 'react'
import Home from '../screens/Home/Home'
import GhostMode from '../screens/GhostMode/GhostMode'
import {createNativeStackNavigator} from '@react-navigation/native-stack'


const Stack= createNativeStackNavigator<RootStackParamList>()

export type RootStackParamList = {
  Home: undefined;
  GhostMode: undefined
};


const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='GhostMode' component={GhostMode} />
    </Stack.Navigator>
  )
}



export default StackNavigator