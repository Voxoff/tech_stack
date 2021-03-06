import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
    <View>
      <Text>Hey </Text>
    </View>
    </Provider>
  )
}

export default App
