import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from "@theme/default/index"
import { Groups } from '@screens/Groups';
import { Loading } from '@components/Loading';


export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
    return (
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Groups/> : <Loading/>}
      </ThemeProvider>
    );
  
}