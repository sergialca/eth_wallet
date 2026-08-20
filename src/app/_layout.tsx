import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import PrevyReady from './prevy-ready';

import { PrivyProvider } from '@privy-io/expo';

import 'react-native-get-random-values';


const privyAppId = process.env.EXPO_PUBLIC_PRIVY_APP_ID!;
const privyClientId = process.env.EXPO_PUBLIC_PRIVY_CLIENT_ID!;

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <PrivyProvider appId={privyAppId} clientId={privyClientId}>
      <PrevyReady />
    </PrivyProvider>
  );
}
