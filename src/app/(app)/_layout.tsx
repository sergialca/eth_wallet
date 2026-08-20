import { Redirect, Stack } from 'expo-router';

import { ErrorScreen } from '@/components/ui/error-screen';
import { FullScreenLoader } from '@/components/ui/full-screen-loader';
import { AuthBoundary } from '@privy-io/expo';

export default function AppLayout() {
  return (
    <AuthBoundary
      loading={<FullScreenLoader />}
      error={<ErrorScreen />}
      unauthenticated={<Redirect href="../index" />}
    >
      <Stack />
    </AuthBoundary>
  );
}