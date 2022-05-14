// @ts-nocheck
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabOneScreen } from '@screens';

import { TAppRoutesStackParamList } from './types';

const Stack = createNativeStackNavigator<TAppRoutesStackParamList>();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabOne">
        <Stack.Screen component={TabOneScreen} name="TabOne" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
