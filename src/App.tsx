import React from 'react'
import Home from './screens/Home/Home'
import LogIn from './screens/LogIn/Login/LogIn'
import {NavigationContainer} from '@react-navigation/native'
import StackNavigator from './routes/StackNavigator'

const App = () => {
  return (
      <NavigationContainer>
        <StackNavigator />
        
      </NavigationContainer>

  )
}

export default App