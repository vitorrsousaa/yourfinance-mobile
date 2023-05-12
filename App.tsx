import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import Main from './src/Main';
import { AuthProvider } from './src/contexts/AuthContext';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from './src/components/ThemeProvider';

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
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Main />
        </QueryClientProvider>
      </AuthProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
