import { createRoot } from 'react-dom/client';
import PrincipalRoute from './router';
import { LoadingProvider } from './context/loading';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <LoadingProvider>
    <PrincipalRoute/>
  </LoadingProvider>
);