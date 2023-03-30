import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/assets/theme';
import Main from './src/Main';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'Gotham-600': require('./src/assets/fonts/Gotham-Bold.otf'),
    'Gotham-500': require('./src/assets/fonts/Gotham-Medium.otf'),
    'Gotham-400': require('./src/assets/fonts/Gotham-Book.otf'),
    'Gotham-300': require('./src/assets/fonts/Gotham-Light.otf'),
    'Gotham-200': require('./src/assets/fonts/Gotham-Thin.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
