import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../main';

const Stack = createStackNavigator();

const Navi = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Main'} component={Main} option={'This Main'} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navi;
