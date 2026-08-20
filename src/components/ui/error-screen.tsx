import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

type ErrorScreenProps = {
  error?: Error;
};

export function ErrorScreen({ error }: ErrorScreenProps) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Auth error</ThemedText>
      <ThemedText type="small">Screen: src/components/ui/error-screen.tsx</ThemedText>
      <ThemedText type="small">Route: (app) AuthBoundary error</ThemedText>
      <ThemedText type="default" style={styles.message}>
        {error?.message ?? 'User could not be authenticated'}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.two,
    paddingHorizontal: Spacing.four,
  },
  message: {
    color: '#dc2626',
    textAlign: 'center',
  },
});
