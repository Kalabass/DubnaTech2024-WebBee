import '@/assets/cssReset.css';
import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { KeycloakProvider } from '../hooks/keyCloackProvider';
import { AppRouter } from './AppRouter';

const App: FC = () => {
  return (
    <KeycloakProvider>
      <RouterProvider router={AppRouter} />
    </KeycloakProvider>
  );
};

export default App;
