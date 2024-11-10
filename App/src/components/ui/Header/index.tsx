import { ROUTES } from '@/const/routes';
import { useKeycloak } from '@/hooks/keyCloackProvider';
import { AppBar, Container, Toolbar, Typography, styled } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import AvatarWithMenu from './AvatarWithMenu';

const Header: FC = () => {
  const { authenticated } = useKeycloak();

  return (
    <StyledAppBar>
      <Container>
        <StyledToolbar>
          <Link
            to={ROUTES.MAIN}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <AppTitle>DubnaTech2024</AppTitle>
          </Link>
          {authenticated && <AvatarWithMenu />}
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;

const StyledAppBar = styled(AppBar)({
  position: 'sticky',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const AppTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: '1.25rem',
});
