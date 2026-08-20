import { ActivityIndicator, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function FullScreenLoader() {
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Auth loading</ThemedText>
      <ThemedText type="small">Screen: src/components/ui/full-screen-loader.tsx</ThemedText>
      <ThemedText type="small">Route: (app) AuthBoundary loading</ThemedText>
      <ActivityIndicator size="large" color={theme.text} />
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
