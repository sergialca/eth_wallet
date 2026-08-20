import { ActivityIndicator, StyleSheet } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { useTheme } from '@/hooks/use-theme';

export function FullScreenLoader() {
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      <ActivityIndicator size="large" color={theme.text} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
