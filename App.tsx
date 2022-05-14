import { WithProviders } from '@components';
import { AppRoutes } from '@routes/app.routes';
import { useCachedResources } from '@utils';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <WithProviders>
      <AppRoutes />
    </WithProviders>
  );
}
