import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TodoScreen from './screens/TodoScreen';
import UserScreen from './screens/UserScreen';
import FlatListScreen from './screens/FlatListScreen';
import ReactSelectorExample from './screens/ReactSelectorExample';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TodoScreen" component={TodoScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
        <Stack.Screen
          name="ReactSelectorExample"
          component={ReactSelectorExample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
