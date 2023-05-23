import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home/Home'
import StackNavigator from './StackNavigator'
import Tags from '../screens/Tags/Tags'
import Sentences from '../screens/Sentences/Sentences'

const Drawer= createDrawerNavigator()

const DrawerNavigator = () => {
  return (
   <Drawer.Navigator>
    <Drawer.Screen name='Stack' component={StackNavigator} />
    <Drawer.Screen name='Tags' component={Tags} />
    <Drawer.Screen name='Sentences' component={Sentences} />
   </Drawer.Navigator>
  )
}

export default DrawerNavigator