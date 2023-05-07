
import {
    Box,
    Button,

    Grid,
    Link,
    List,
    ListItem,
    ListItemText,
    TextField,
    ListItemIcon,
    Typography,
  } from "@mui/material";
  import React from "react";
  import Styles from "./Footer.module.scss"
  import webLogo from "../../assets/images/Travel Logo1.png";
  import Facebook from '@mui/icons-material/Facebook'; // or any other social media icon
  import Instagram from '@mui/icons-material/Instagram';
  import Twitter from '@mui/icons-material/Twitter';
  import YouTube from '@mui/icons-material/YouTube';
  const Footer = () => {
  
  
   
  
    return (
      <Box className={Styles.footer}>
  
        <Grid className={Styles.conatiner} container rowSpacing={1} columnSpacing={{ xs: 1,  }}>
          <Grid className={Styles.footercol1}>
            <Box className={Styles.logoBox}>
            <img src={webLogo}  className={Styles.logo} alt="webLogo" />
        
            </Box>
           
            
            <Typography className={Styles.col1text1}>
              Contact us for more details
            </Typography>
            <Box className={Styles.formgroup}>
              
              <TextField className={Styles.texteFeild}  id="footerform"  />
              <Button className={Styles.buttongo} variant="contained">
                Go{" "}
              </Button>
            </Box>
          </Grid>
          <Grid className={Styles.footercol2}>
  
            {/* <Grid className={Styles.footercol2inside}>  
              <h4>Categories</h4>
            <List  className={Styles.serviceLIst1}>
              <Typography>Supplements</Typography>
              <Typography>Sports</Typography>
              <Typography>Bath</Typography>
              <Typography>Beauty</Typography>
              <Typography>Grocery</Typography>
              <Typography>Healthy Home</Typography>
            </List>
          </Grid> */}
          <Grid className={Styles.footercol2inside2}>
    <h4>Social Links</h4>
    <List className={Styles.serviceList1}>
      <ListItem button>
        <ListItemIcon>
          <Facebook  className={Styles.socicallinks} />
        </ListItemIcon>
        <ListItemText className={Styles.socicallinks} primary="Facebook" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Twitter className={Styles.socicallinks} />
        </ListItemIcon>
        <ListItemText className={Styles.socicallinks} primary="Twitter"/>
      </ListItem>
      <ListItem button>
        <ListItemIcon >
          <Instagram  className={Styles.socicallinks}  />
        </ListItemIcon>
        <ListItemText  className={Styles.socicallinks} primary="Instagram" />
      </ListItem>
      <ListItem button>
        <ListItemIcon >
          <YouTube  className={Styles.socicallinks}  />
        </ListItemIcon>
        <ListItemText  className={Styles.socicallinks} primary="YouTube" />
      </ListItem>
      
      {/* Add more ListItems for additional social media links */}
    </List>
  </Grid></Grid>
           
          <Grid className="footer-col4">
            <h4>Quick Links</h4>
            <List className={Styles.serviceLIst}>
              <Typography>
                <Link  underline="hover" className={Styles.linklist} href="/">Home</Link>
              </Typography>
              <Typography>
                <Link  underline="hover" className={Styles.linklist} href="/recipes">Recipes</Link>
              </Typography>
              
              <Typography>
                <Link   underline="hover"className={Styles.linklist} href="/blog">Blogs</Link>
              </Typography>
              <Typography>
                <Link  underline="hover" className={Styles.linklist} href="/events">Events</Link>
              </Typography>
              <Typography>
                <Link  underline="hover" className={Styles.linklist} href="/Tuorism">Tuorism</Link>
              </Typography>
              <Typography>
                <Link  underline="hover" className={Styles.linklist} href="/about">About Us</Link>
              </Typography>
              
              
              
            </List>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Footer;