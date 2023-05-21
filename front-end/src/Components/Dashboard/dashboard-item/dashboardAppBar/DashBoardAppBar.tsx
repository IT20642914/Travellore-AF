import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/MailOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';

import FNHText from '../../../../components/atoms/FNHText';
// import style from './style.module.scss'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius:"2rem",
  color:"black",
  // backgroundColor: alpha(theme.palette.common.black, 0.09),
  '&:hover': {
    // backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>

        <FNHText
              fontSize="1rem"
              fontWeight="400"
              color="black"
              text="Messages"
            />
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
  
        <FNHText
              fontSize="1rem"
              fontWeight="400"
              color="black"
              text="Notifications"
            />
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <FNHText
              fontSize="1rem"
              fontWeight="400"
              color="black"
              text="Profile"
            />
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1,}}>
      <AppBar 
       position="fixed"
       sx={{
        boxShadow:"none",
        background:"white",
        zIndex: 0,
        borderBottom: 'none',
         width: "100%",

       }}>


        <Toolbar>
        <Box sx={{ display: "inline", justifyContent:"center", alignItems:"center", justifyItems:"center", marginTop: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "-1rem",
            }}
          >
            <FNHText
              fontSize="2rem"
              fontWeight="700"
              color="#0A223E"
              text="FYNH"
            />
            <FNHText
              fontSize="2rem"
              fontWeight="700"
              color="#1460BA"
              text="."
            />
            <FNHText fontSize="2rem" fontWeight="700" color="#0A223E" text="T" />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "left" }}>
            <FNHText
              fontWeight="500"
              fontSize="0.8rem"
              color="#0A223E"
              text="Builder Dashboard"
            />
          </Box>
        </Box>
     {/* <FNHButtonInput
                buttonText="Send"
                buttonHeight="1.5rem"
                buttonTextColor="#fff"
                borderRadius="0.75rem"
                buttonBorderRadius="1rem"
                placeholder="Input your email"
              />  */}
          {/* <FNHBuilderInput /> */}

          <Box sx={{ marginInline:"2rem" , marginTop: "1.2rem" }}>

          <Search  >
            <SearchIconWrapper >
              <SearchIcon  style={{color:"#1460BA"}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Enter Location or Community name"
              inputProps={{ 'aria-label': 'search' }}
              style={{ borderRadius: '2rem', width: '24rem', border:" 1px solid #ECECEC",}}
            />
          </Search>
          </Box>
          <Box sx={{ flexGrow: 1  ,marginTop: "1.2rem"}} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Box sx={{display:"flex" ,justifyContent:"center", justifyItems:"center",alignItems:"center"}}>
            <Typography sx={{color:"#0A223E"}}>Admin.M </Typography>
            </Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
           
            >
              
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
       
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}


    </Box>
  );
}
