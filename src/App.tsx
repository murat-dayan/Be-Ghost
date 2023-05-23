import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import StackNavigator from './routes/StackNavigator'
import DrawerNavigator from './routes/DrawerNavigator'

const App = () => {
  return (
      <NavigationContainer>
        <DrawerNavigator />
        
      </NavigationContainer>

  )
}

export default App