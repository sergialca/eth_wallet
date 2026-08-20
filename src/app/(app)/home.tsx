import { usePathname } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export default function AppHomeScreen() {
  const pathname = usePathname();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">App home</ThemedText>
      <ThemedText type="small">Screen: src/app/(app)/home.tsx</ThemedText>
      <ThemedText type="small">Route: {pathname}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.two,
  },
});
