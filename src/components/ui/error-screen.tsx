import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export function ErrorScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="default" style={styles.message}>
        User could not be authenticated
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#dc2626',
    textAlign: 'center',
  },
});
