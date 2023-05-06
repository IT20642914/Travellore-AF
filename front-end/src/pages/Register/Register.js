import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
//import {useNavigate } from "react-router-dom";
import { basicValidation } from "../../Schemas/index";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Link,
  TextField,
  Box,
  Button,
  Container,
  Grid,
  IconButton,Paper
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import upload from "../../utils/upload";
// const onSubmit = async (values: any, action: any) => {
//   console.log("sumbited data is", values);
//   console.log("sumbited action is", action);
// };

const SignupScreen = () => {

  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      Cpassword: "",
      phoneNumber: "",
      img: "",
    },
    validationSchema: basicValidation,
    onSubmit: async (values) => {
      values.img = await upload(file);
      console.log("sending values is", values);
      axios
        .post("http://localhost:9090/api/register", values)
        .then((response) => {
          // console.log("respose",response.data)

          console.log("resopnse data", response.data);
          if (response.status === 200) {
            const massege = response.data;
            console.log(response.data);
            toast.success(massege, {
              position: toast.POSITION.TOP_RIGHT,
            });
            navigate("/login");
          }
        })
        .catch((error) => {
          console.log(error.response.data);

          if (error.response.status === 401) {
            const massege = error.response.data;
            console.log(error.response.data);
            toast.error(massege, {
              position: toast.POSITION.TOP_RIGHT,
            });
            //   Swal.fire('Any fool can use a computer')
          }
        });
    },
  });

  return (
    <Box sx={{ background: "white" }}>
        <Container component="main" maxWidth="xl">
          <Box sx={{
          marginTop: 8,
        }}>
          <Grid container>
          <CssBaseline />

          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square>
              <Box sx={{display:"center", margin:"4rem", justifyContent:"center",
                 justifyItems:"center", alignItems: "center",}}>
             <Typography sx={{ fontWeight:"600", fontSize:"2rem",color:"#046380"}} >
        Sign Up
              </Typography></Box>
              
<Box
              sx={{
                // background:"red",
                paddingInline:"6rem",
                my: 1,
                mx: 1,
                justifyContent:"center",
                 justifyItems:"center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >        


  
            {/* <FormContainer> */}


   
            <Form   onSubmit={handleSubmit}>
              
            <Form.Group className="my-3" controlId="profile">
              <Box sx={{display:"inline-block"}}> 
              <Typography >Profile Picture</Typography>   
               <IconButton aria-label="upload picture" component="label">
               <input hidden accept="image/*"  onChange={(e) => setFile(e.target.files[0])} type="file" />
               <AccountCircleIcon sx={{width:"5rem", color:"#046380",height:"5rem"}} />
               </IconButton>
            
              </Box >
              </Form.Group>

              <Form.Group className="my-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastname && touched.username ? "input-error" : ""
                  }
                />
                {errors.username && touched.username && (
                  <p className="error">{errors.username}</p>
                )}
              </Form.Group>
              <Form.Group className="my-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? "input-error" : ""}
                />
                {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
              </Form.Group>

              <Form.Group className="my-3" controlId="phoneNumber">
                <Form.Label> Phone Number</Form.Label>
                <Form.Control
                  type="phoneNumber"
                  placeholder="Enter Your Phone Number"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.phoneNumber && touched.phoneNumber
                      ? "input-error"
                      : ""
                  }
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <p className="error">{errors.phoneNumber}</p>
                )}
              </Form.Group>

              <Form.Group className="my-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? "input-error" : ""
                  }
                />
                {errors.password && touched.password && (
                  <p className="error">{errors.password}</p>
                )}
              </Form.Group>
              <Form.Group className="my-3" controlId="Cpassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={values.Cpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.Cpassword && touched.Cpassword ? "input-error" : ""
                  }
                />
                {errors.Cpassword && touched.Cpassword && (
                  <p className="error">{errors.Cpassword}</p>
                )}
              </Form.Group>

              {isSubmitting}
              <Button 
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ background:"linear-gradient(to bottom, #046380 0%, #012935 100%)",mt: 3, mb: 2, '&:hover': {
                    backgroundColor: '"linear-gradient(to bottom, #012935 45%, #046380 100%)"',
                  },}}
                >
                  Sign up
               </Button>
            </Form>
            </Box>
            {/* </FormContainer> */}
    

          </Grid>
          </Grid>
          </Box>
          
        </Container>
     
    </Box>
  );
};

export default SignupScreen;
function async(response: any) {
  throw new Error("Function not implemented.");
}
