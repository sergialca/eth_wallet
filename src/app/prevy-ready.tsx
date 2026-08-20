import { ThemedText } from '@/components/themed-text';
import { usePrivy } from '@privy-io/expo';
import { Redirect } from 'expo-router';

export default function PrevyReady() {
  const { isReady } = usePrivy();
  if (!isReady) {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  return <Redirect href="./index" />;
}