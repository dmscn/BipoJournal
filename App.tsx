import 'react-native-gesture-handler';
import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MoodList from './app/MoodList';
// import AddMood from './app/AddMood';

const Stack = createStackNavigator();

export default (): React.ReactFragment => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MoodList" component={MoodList} />
          {/* <Stack.Screen name="AddMood" component={AddMood} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
);
