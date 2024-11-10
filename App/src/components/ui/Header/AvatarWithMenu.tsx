import { ROUTES } from '@/const/routes';
import { useKeycloak } from '@/hooks/keyCloackProvider';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Box, Menu, MenuItem, styled, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const AvatarWithMenu: FC = () => {
  const { logout, tokenParsed } = useKeycloak();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout({ redirectUri: window.location.origin });
  };

  const firstName = tokenParsed?.given_name || '';
  const lastName = tokenParsed?.family_name || '';

  return (
    <>
      <StyledAvatar onClick={handleClick}>
        {`${firstName.charAt(0).toUpperCase()}${lastName
          .charAt(0)
          .toUpperCase()}`}
      </StyledAvatar>
      <StyledMenu
        elevation={2}
        disableScrollLock
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem component={Link} to={ROUTES.PROFILE}>
          <MenuItemBox>
            <Avatar sx={{ margin: '0 !important' }} />
            <Typography>Профиль</Typography>
          </MenuItemBox>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <MenuItemBox>
            <LogoutIcon sx={{ width: 32, height: 32 }} color='disabled' />
            <Typography>Выйти</Typography>
          </MenuItemBox>
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default AvatarWithMenu;

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.primary.main,
  border: '2px solid',
}));

const MenuItemBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    overflow: 'visible',
    marginTop: theme.spacing(1.5),
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      marginLeft: '-4px',
      marginRight: theme.spacing(1),
    },
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      backgroundColor: theme.palette.background.paper,
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}));
