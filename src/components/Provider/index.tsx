import { store } from '@store';
import { theme } from '@theme';
import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

export const WithProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar style="dark" />
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};
