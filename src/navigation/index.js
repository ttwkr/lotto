import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../main';
import Lotto from '../lotto';

const Stack = createStackNavigator();

const Navi = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Main'} component={Main} option={'This Main'} />
          <Stack.Screen
            name={'Lotto'}
            component={Lotto}
            options={'This Lotto'}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navi;
