import * as React from 'react';
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import "./index.css";
import Travellore from "../../assets/images/Travel Logo1.png"
import Home from "../../pages/Home/index";
import { Route, Routes, useNavigate } from 'react-router-dom';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TreeView from '@mui/lab/TreeView';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Tourism from '../../pages/Tourism/tourism';
import Event from '../../pages/Events/Event'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalB from '../../pages/LocalBussiness/LocalB';
import FeedIcon from '@mui/icons-material/Feed';
import Blogs from '../../pages/Blogs/Blogs';
import Recipes from '../../pages/Recipes/Recipes';
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
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate =useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
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
             <img src={Travellore} id="Travellore" lt="tavelologo" />
            </Box>
        <Divider />
        <List>
            <ListItem   disablePadding  onClick={()=>{ navigate("/")}}> 
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem  spacing={3} disablePadding  onClick={()=>{ navigate("/tuorism")}}>
                <ListItemButton>
                    <ListItemIcon>
                        <EmojiTransportationIcon/>
                     
                    </ListItemIcon>
                    <ListItemText>Tourism Places</ListItemText>
                </ListItemButton>
            </ListItem>
         
            <ListItem disablePadding  onClick={()=>{ navigate("/event")}}>
                <ListItemButton>
                    <ListItemIcon >
                    <EventAvailableIcon/>
                    </ListItemIcon>
                    <ListItemText>Events</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={()=>{ navigate("/localb")}} >
                <ListItemButton>
                    <ListItemIcon >
                    <AttachMoneyIcon/>
                    </ListItemIcon>
                    <ListItemText>Local Businesses</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={()=>{ navigate("/recipes")}} >
                <ListItemButton>
                    <ListItemIcon >
                    <MenuBookIcon/>
                    </ListItemIcon>
                    <ListItemText>Recipes</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={()=>{ navigate("/blogs")}}  >
                <ListItemButton>
                    <ListItemIcon >
                    <FeedIcon/>
                    </ListItemIcon>
                    <ListItemText>Blogs</ListItemText>
                    {/* <TreeView
                aria-label="file system navigator"
               defaultCollapseIcon={<ExpandMoreIcon />}
               defaultExpandIcon={<ChevronRightIcon />}
              // sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'none' }} 
            >
              
 
          <TreeItem nodeId="5" label="Blogs" >
    <TreeItem nodeId="10" label="OSS"  />
    <TreeItem nodeId="6" label="MUI">
      <TreeItem nodeId="8" label="index.js" />
    </TreeItem>
  </TreeItem>
</TreeView>  */}
                </ListItemButton>
            </ListItem>
            
         
        </List>
        <Divider />
        <List>

     
        


          
</List>
     
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

      {/* //seting up all the components */}
        <Routes>
          
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/tuorism' element={<Tourism/>}></Route>
            <Route exact path='/event' element={<Event/>}></Route>
            <Route exact path='/localB' element={<LocalB/>}></Route>
            <Route exact path='/recipes' element={<Recipes/>}></Route>
            <Route exact path='/blogs' element={<Blogs/>}></Route>
        </Routes>
      </Box>
    </Box>
  );
}