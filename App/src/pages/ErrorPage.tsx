import { ROUTES } from '@/const/routes';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Button, Container, Typography, styled } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: FC = () => {
  return (
    <ErrorContainer maxWidth='sm'>
      <ErrorIcon />
      <Typography variant='h3' gutterBottom>
        Oops!
      </Typography>
      <Typography variant='h4' color='textSecondary'>
        Что-то пошло не так. Страница, которую вы ищете, не найдена.
      </Typography>
      <Box sx={{ color: 'white', marginTop: 4 }}>
        <Button
          component={Link}
          to={ROUTES.MAIN}
          size='large'
          variant='contained'
          color='primary'
          fullWidth
        >
          Вернуться
        </Button>
      </Box>
    </ErrorContainer>
  );
};

export default ErrorPage;

const ErrorContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
});

const ErrorIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  fontSize: 80,
  color: theme.palette.error.light,
  marginBottom: 16,
}));
