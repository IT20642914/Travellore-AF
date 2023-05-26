import React, { useState } from "react";
import { styled, useTheme ,} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import "./index.css";
import Travellore from "../../assets/images/traveloradmin.png"
import {  useNavigate } from 'react-router-dom';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { setlogout } from '../../Redux/actions/authAction';
import Home from '../../pages/Home/index';
import Tourism from '../../pages/Tourism/tourism';
import LocalB from '../../pages/LocalBussiness/LocalB';
import LocalBusinessesAd from "../../pages/admin/LocalBusinesses/LocalBusinessesAd";
import Blogs from '../../pages/Blogs/Blogs';
import Recipes from '../../pages/Recipes/Recipes';
import  EventAd from '../../pages/admin/Events/EventAd'
import DashboardHome from "../../pages/admin/dashboard-item/builder-pages/DashboardHome"
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function MiniDrawer() {
  const [page, setPage] = useState("adminhome");
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate =useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dispatch =useDispatch();

  const handlelogout=(name)=>{
 
    dispatch(setlogout())
    navigate("/")
  
  }
  const handleClick = (pageName) => {
    setPage(pageName);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{background:"#046380"}}  open={open}>
        <Toolbar>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
         
          Travellore
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
           
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
      
        </DrawerHeader>
         <Box >
             <img src={Travellore} id="Travellore" alt="tavelologo" />
            </Box>
        <Divider />
        <List>
            <ListItem   disablePadding  onClick={()=>{ handleClick("adminhome")}}> 
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon sx={{ color:"#046380 "}}/>
                    </ListItemIcon>
                    <ListItemText sx={{ color:"#046380 "}}>Home</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem  spacing={3} disablePadding  onClick={()=>{ handleClick("tuorism")}}>
                <ListItemButton>
                    <ListItemIcon>
                        <EmojiTransportationIcon sx={{ color:"#046380 "}}/>
                     
                    </ListItemIcon>
                    <ListItemText sx={{ color:"#046380 "}}>Tourism Places</ListItemText>
                </ListItemButton>
            </ListItem>
         
            <ListItem disablePadding  onClick={()=>{ handleClick("event")}}>
                <ListItemButton>
                    <ListItemIcon >
                    <EventAvailableIcon sx={{ color:"#046380 "}}/>
                    </ListItemIcon>
                    <ListItemText sx={{ color:"#046380 "}}>Events</ListItemText>
                </ListItemButton>
            </ListItem>
            {/* <ListItem disablePadding onClick={()=>{ handleClick("localb")}} >
                <ListItemButton>
                    <ListItemIcon >
                    <AttachMoneyIcon sx={{ color:"#046380 "}}/>
                    </ListItemIcon>
                    <ListItemText sx={{ color:"#046380 "}}>Local Businesses</ListItemText>
                </ListItemButton>
            </ListItem> */}
            <ListItem disablePadding onClick={()=>{ handleClick("lbProducts")}} >
                <ListItemButton>
                    <ListItemIcon >
                    <AttachMoneyIcon sx={{ color:"#046380 "}}/>
                    </ListItemIcon>
                    <ListItemText sx={{ color:"#046380 "}}>Local Businesses</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={()=>{ handleClick("recipes")}} >
                <ListItemButton>
                    <ListItemIcon >
                    <MenuBookIcon sx={{ color:"#046380 "}}/>
                    </ListItemIcon>
                    <ListItemText sx={{ color:"#046380 "}}>Recipes</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={()=>{ handleClick("blogs")}}  >
                <ListItemButton>
                    <ListItemIcon >
                    <FeedIcon sx={{ color:"#046380 "}}/>
                    </ListItemIcon>
                    <ListItemText sx={{ color:"#046380 "}}>Blogs</ListItemText>
                </ListItemButton>
            </ListItem>
           
         
        </List>
        <Divider />

        <List>
       {/* //list */}
       <ListItem disablePadding   >
                <ListItemButton onClick={handlelogout}>
                    <ListItemIcon >
                    <LogoutIcon sx={{ color:"#046380 "}}/>
                    </ListItemIcon >
                    <ListItemText   sx={{ color:"#046380 "}}>Logout</ListItemText>
                </ListItemButton>
            </ListItem>

      </List>
      
     
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

  
      <Box>
            <DashboardHome/>
           
               {page === "adminhome" && <Home/>}
            
               {page === "tuorism" && <Tourism/>}
               {page === "event" && <EventAd/>}
               {page === "localb" && <LocalB/>}
               {page === "blogs" && <Blogs/>}
               {page === "recipes" && <Recipes/>}
               {page ==="lbProducts"&&<LocalBusinessesAd/>}
      </Box>

    
      </Box>
    </Box>
  );
}