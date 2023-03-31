import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './auth.routes';
import PrivateRoutes from './private.routes';
import { useAuth } from '../hooks/useAuth';

export function Router() {
  const { authenticated } = useAuth();
  return (
    <NavigationContainer>
      {authenticated ? <PrivateRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
