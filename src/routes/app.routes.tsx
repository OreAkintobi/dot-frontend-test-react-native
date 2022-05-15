// @ts-nocheck
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AwardScreen } from '@screens';

import { TAppRoutesStackParamList } from './types';

const Stack = createNativeStackNavigator<TAppRoutesStackParamList>();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Award">
        <Stack.Screen component={AwardScreen} name="Award" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
