import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/assets/theme';
import Main from './src/Main';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'Gotham-700': require('./src/assets/fonts/Gotham-Bold.otf'),
    'Gotham-500': require('./src/assets/fonts/Gotham-Medium.otf'),
    'Gotham-400': require('./src/assets/fonts/Gotham-Book.otf'),
    'Gotham-300': require('./src/assets/fonts/Gotham-Light.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </ThemeProvider>
  );
}
