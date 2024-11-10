import profilePic from '@/assets/images/vasylenko.jpg';
import { FullHeightContainer } from '@/components/ui/common/FullHeightContainer';
import { BackgroundBox } from '@/components/ui/common/StyledBacgroundBox';
import { StyledPaper } from '@/components/ui/common/StyledPaper';
import { useKeycloak } from '@/hooks/keyCloackProvider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Box, Tooltip, styled } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC, ReactNode } from 'react';
import TextBlock from '../components/ui/common/TextBlock';

interface ProfileImageProps {
  component: ReactNode;
  src: string;
  alt: string;
}

const ProfileImage = styled(Box)<ProfileImageProps>({
  width: '100%',
  maxWidth: 400,
  maxHeight: 400,
  objectFit: 'cover',
});

const StyledGrid = styled(Grid)({
  alignItems: 'center',
  alignContent: 'center',
});

const ProfilePage: FC = () => {
  const keycloak = useKeycloak();

  if (!keycloak.authenticated) {
    keycloak.login();
    return null;
  }

  const {
    given_name: firstName,
    family_name: lastName,
    email,
    email_verified: emailVerified,
  } = keycloak.tokenParsed || {};

  const adornment = !!emailVerified ? (
    <Tooltip title='Почта подтверждена'>
      <CheckCircleIcon color='success' />
    </Tooltip>
  ) : (
    <Tooltip title='Почта не подтверждена'>
      <ErrorIcon color='error' />
    </Tooltip>
  );

  return (
    <BackgroundBox>
      <FullHeightContainer maxWidth='md'>
        <StyledPaper>
          <Grid container spacing={5}>
            <StyledGrid container size={{ xs: 12, md: 5 }}>
              <ProfileImage
                component='img'
                src={profilePic}
                alt='Фото профиля'
              />
            </StyledGrid>
            <StyledGrid container size={{ xs: 12, md: 7 }} spacing={2}>
              <TextBlock title='Имя:' value={firstName} />
              <TextBlock title='Фамилия:' value={lastName} />
              <TextBlock title='Почта:' value={email} adornment={adornment} />
            </StyledGrid>
          </Grid>
        </StyledPaper>
      </FullHeightContainer>
    </BackgroundBox>
  );
};

export default ProfilePage;
