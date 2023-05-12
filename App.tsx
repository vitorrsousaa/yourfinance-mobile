import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/assets/theme';
import { AuthProvider } from './src/contexts/AuthContext';
import Main from './src/Main';

import 'react-native-gesture-handler';

const queryClient = new QueryClient();

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
      <StatusBar style="dark" />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Main />
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
