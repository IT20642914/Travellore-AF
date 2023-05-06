import React from 'react'
import {Form,Row,Col, Card } from 'react-bootstrap';
import { useFormik } from 'formik';
import {basicLoginvalidation} from '../../Schemas/index'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setAuthToken } from '../../Components/authTokens';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode";
import { setlogin } from '../../Redux/actions/authAction';
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import {Typography,Link, TextField,Box, Button, Container, Grid } from '@mui/material';

import backgroundImage from '../../assets/images/travelimge.jpg';

const Login = () => {

    const dispatch =useDispatch();
    const navigate = useNavigate();
    const {values,errors,touched,handleBlur,handleSubmit,handleChange} = useFormik({
        initialValues: {
    
          email: '',
          password: '',
     
        },
        validationSchema:basicLoginvalidation,
        onSubmit: values => {
           console.log("Login details",values);
    
    
    //        if(values.email=="avishkachanaka@gmail.com"){
    //         const accessToken="response.data.accessToken;"
    //           const refeshtoken=  "response.data.refreshToken;"
    //            const username= "avishka"
    //            const roles= "admin"
    //            dispatch(setlogin({accessToken,username,roles,refeshtoken}))
    //     navigate("/a")
    //  }else{
    //     navigate("/b")
    //     const accessToken=  "response.data.accessToken;"
    //     const refeshtoken=  "response.data.refreshToken;"
    //      const username= "avishka22"
    //      const roles= "user"
    //      dispatch(setlogin({accessToken,username,roles,refeshtoken}))
    //  }



        
          axios.post("http://localhost:9090/api/login",values).then( async (response)=>{
           const status=await response.status
            if( status==200){
              const accessToken= await response.data.accessToken;
               const refeshtoken= await response.data.refreshToken;
               const message= await response.data.message;
               const ImgUrl=await response.data.img
              toast.success(message, {
                position: toast.POSITION.TOP_RIGHT
              });
        
            console.log("accessToken",accessToken);
            const decoded = jwt_decode(accessToken);
            console.log("decode IsAdmin",decoded.isAdmin);
            const username=decoded.username;
            const IsAdmin= decoded.isAdmin
        
            setAuthToken(accessToken);
             localStorage.setItem("accessToken",accessToken)
             localStorage.setItem("refreshToken",refeshtoken)
             localStorage.setItem('username',username)
             localStorage.setItem('IsAdmin',IsAdmin)
             localStorage.setItem('ImgUrl',ImgUrl)
             
             dispatch(setlogin({accessToken,username,IsAdmin,ImgUrl}))
             
             if(!IsAdmin){
              console.log("user login");
              navigate('/');
             }
             else{
              console.log("admin login");
    
              navigate('/adminpanel');
             }
    
            
    
            }

          }).catch((error) => {
            if(error.response.status === 400){
              const massege=error.response.data.error;
              console.log(error.response.data.error);
              toast.error(massege, {
                position: toast.POSITION.TOP_RIGHT  
              });
     
            }
            if(error.response.status === 401){
                const massege=error.response.data.error;
              console.log(error.response.data.error);
              toast.error(massege, {
                position: toast.POSITION.TOP_RIGHT
        
            
              });
           }
           if(error.response.status === 500){
            const massege=error.response.data.error;
            console.log(error.response.data.error);
            toast.error(massege, {
              position: toast.POSITION.TOP_RIGHT
          
            });
         }
          });


        
    
   },
      
       });
    
  return (
    <Box sx={{background:"white"}}>
    <Container component="main" maxWidth="lg" >
    <Box
        sx={{
          marginTop: 8,
        }}
      >
   <Grid container>
   <CssBaseline />
   <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:  `url(${backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "right",
            }}
          />
      <Grid  item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square>


<Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >        
     <Typography sx={{fontWeight:"600", fontSize:"2rem",color:"#046380"}}>
                Sign in
              </Typography>
  
      
    <Form sx={{ mt: 1 }}  onSubmit={handleSubmit}  >
   
    <Form.Group  controlId="email" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter your email" 
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.email  && touched.email ? "input-error" :""} />
    {errors.email && touched.email &&<p className='error'>{errors.email}</p> }
      
    </Form.Group>
    <Form.Group className="my-3" controlId="password">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" 
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.password && touched.password  ? "input-error" :""} />
    {errors.password && touched.password &&<p className='error'>{errors.password}</p> }
    </Form.Group>
    
    <Button 
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ background:"linear-gradient(to bottom, #046380 0%, #012935 100%)",mt: 3, mb: 2, '&:hover': {
                    backgroundColor: '"linear-gradient(to bottom, #012935 45%, #046380 100%)"',
                  },}}
                >
                  Sign In
 </Button>
 <Grid container>
    <Grid sx={{margin:"1rem"}} item >
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
   </Grid>
   <Grid sx={{margin:"1rem"}} item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
  </Form>
  {/* </FormContainer> */}
  </Box>
  </Grid>

  </Grid>
  </Box>
  </Container>
  </Box>
  )
}

export default Login