
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { headerNavigations } from '../../constants';
import Travellore from "../../assets/images/Travel Logo1.png"
import React, { useState, useEffect, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { setlogout } from '../../Redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
// const settings = ['Profile', 'Logout'];
import {settings }from "../../constants/index"
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [currentPath, setCurrentPath] = useState('/');
  const  IsLogin= useSelector((state)=> state.login.isLoggedIn)
  const  ImgUrl= useSelector((state)=> state.login.ImgUrl)


console.log("IMAG",ImgUrl);

  const navigate = useNavigate();
  const location = useLocation();
  const [navigations, setNavigations] = useState(headerNavigations);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const onNavClick=(path)=>{
    
        navigate(path);
    
  }


  const handlesighup =()=>{
    navigate("/register");
  }
  const handlesighin =()=>{
    navigate("/login");
  }


  const dispatch =useDispatch();

  const onsettingsClick=(name)=>{
    console.log(name)
    dispatch(setlogout())

  }
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  useEffect(() => {
    const currentNavigations = headerNavigations.map((nav) => {
      if (nav.path === currentPath) {
        return {
          ...nav,
          selected: true,
        };
      }

      return {
        ...nav,
        selected: false,
      };
    });

    setNavigations(currentNavigations);
  }, [currentPath]);

  return (
    <AppBar position="static" sx={{background:"linear-gradient(to bottom, #046380 0%, #012935 100%)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
         
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {headerNavigations.map((item) => (
                <MenuItem key={item.key} onClick={handleCloseNavMenu}>
                  <Typography  sx={{ mr: item.key !== 6 ? 8 : 0, fontWeight: item.selected ? 600 : 400 }} textAlign="center" onClick={() => onNavClick(item.path)}>{item.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{width:"5rem", height:"5rem" , display:{xs:"flex", sm:"flex" } ,alignItems:"center"}}>    <img src={Travellore} id="Travellore" alt="tavelologo" /> </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
        
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {headerNavigations.map((item) => (
              <Button
                key={item.key}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => onNavClick(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </Box>

       {  IsLogin&& <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='sss' src={ImgUrl} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.key} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={() => onsettingsClick(setting.name)} >{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}

        { !IsLogin && <Box sx={{ flexGrow: 0 }}>
          <Button onClick={handlesighup} sx={{  fontWeight: "300", fontSize: "1rem", color: "white"}}variant="text">Sign Up</Button>
          <Button onClick={handlesighin}sx={{  fontWeight: "300", fontSize: "1rem", color: "white"}}variant="text">Sign In</Button>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
