import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ROUTES } from '../const/routes';
import { useKeycloak } from '../hooks/keyCloackProvider';
import AdminPage from '../pages/AdminPage';
import MainPage from '../pages/MainPage';
import ProfilePage from '../pages/ProfilePage';

const ProtectedRoute = ({
  element,
  requiredRole,
}: {
  element: JSX.Element;
  requiredRole?: string;
}) => {
  const keycloak = useKeycloak();

  if (!keycloak.authenticated) {
    keycloak.login();
  }

  if (
    requiredRole &&
    !keycloak.tokenParsed?.realm_access?.roles?.includes(requiredRole)
  ) {
    return <Navigate to={ROUTES.MAIN} />;
  }

  return element;
};

export const AppRouter = createBrowserRouter([
  {
    children: [
      {
        path: ROUTES.MAIN,
        element: <MainPage />,
      },
      {
        path: ROUTES.PROFILE,
        element: <ProtectedRoute element={<ProfilePage />} />,
      },
      {
        path: ROUTES.ADMIN,
        element: (
          <ProtectedRoute element={<AdminPage />} requiredRole='secret-admin' />
        ),
      },
    ],
  },
]);
