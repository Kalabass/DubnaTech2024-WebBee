import { ROUTES } from '@/const/routes';
import { useKeycloak } from '@/hooks/keyCloackProvider';
import { Button, Container, Stack, Typography, styled } from '@mui/material';
import { Navigate } from 'react-router-dom';

const MainPage = () => {
  const keycloak = useKeycloak();

  if (keycloak.authenticated) {
    return <Navigate to={ROUTES.PROFILE} replace />;
  }

  const handleLogin = () => {
    keycloak.login({
      redirectUri: `${window.location.origin}${ROUTES.PROFILE}`,
    });
  };

  const handleRegister = () => {
    keycloak.register({
      redirectUri: `${window.location.origin}${ROUTES.PROFILE}`,
    });
  };

  return (
    <MainContainer maxWidth='sm'>
      <Typography variant='h1' gutterBottom>
        Привет, Гость
      </Typography>
      <Stack spacing={2} direction='column' width='100%' mt={4}>
        <Button
          size='large'
          variant='contained'
          color='primary'
          onClick={handleLogin}
          fullWidth
        >
          Войти
        </Button>
        <RegisterButton
          size='large'
          variant='outlined'
          color='primary'
          onClick={handleRegister}
          fullWidth
        >
          Зарегистрироваться
        </RegisterButton>
      </Stack>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
});

const RegisterButton = styled(Button)({
  border: '1.5px solid',
});
