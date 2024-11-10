import '@/assets/style/cssReset.css';
import { muiTheme } from '@/const/muiTheme';
import { KeycloakProvider } from '@/hooks/keyCloackProvider';
import { ThemeProvider } from '@emotion/react';
import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './AppRouter';

const App: FC = () => {
  return (
    <KeycloakProvider>
      <ThemeProvider theme={muiTheme}>
        <RouterProvider router={AppRouter} />
      </ThemeProvider>
    </KeycloakProvider>
  );
};

export default App;
