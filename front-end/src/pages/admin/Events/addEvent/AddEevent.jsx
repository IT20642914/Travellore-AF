import { useState } from "react";
import { Box, Typography ,IconButton} from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { eventValidation } from "../../../../Schemas/eventValitaionScheema";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import upload from "../../../../utils/upload";
import { Form } from "react-bootstrap";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const AddEevent = () => {
  const [EventData, SetEvetData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
    registrationLink: "",
    price: "",
    category: "",
    contactInfo: "",
  });
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
      name: "",
      date: "",
      location: "",
      description: "",
      price: "",
      category: "",
      time: "",
      contactInfo: "",
      imge: "",
      registrationLink:"",
    },
    validationSchema: eventValidation,
    onSubmit: async (values) => {
      values.img = await upload(file);
    },
  });

  return (
    <Box
      sx={{
        height: "64rem",
        background:
          "linear-gradient(323.85deg, #012935.14%, #046380 99.41%, #012935 99.41%)",
        borderRadius: "4rem",
        margin: "2rem",
      }}
    >
      <Box
        sx={{ marginTop: "1rem", paddingTop: "2rem" }}
        className="container flex"
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3" controlId="name">
            <Typography sx={{ color: "white" }} for="name">
              Event Name
            </Typography>
            <Form.Control
              type="name"
              placeholder="Enter Event Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? "input-error" : ""}
            />
            {errors.name && touched.name && (
              <p className="error">{errors.name}</p>
            )}
          </Form.Group>

          <Form.Group className="my-3" controlId="category">
            <Typography sx={{ color: "white" }} for="category">
            Enter   Category
            </Typography>
            <Form.Control
              type="category"
              placeholder="Enter Category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.category && touched.category ? "input-error" : ""
              }
            />
            {errors.category && touched.category && (
              <p className="error">{errors.category}</p>
            )}
          </Form.Group>

          <Form.Group className="my-3" controlId="date">
            <Typography sx={{ color: "white" }} for="category">
              Enter Date
            </Typography>
            <Form.Control
              type="date"
              placeholder="Enter date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.date && touched.date ? "input-error" : ""}
            />
            {errors.date && touched.date && (
              <p className="error">{errors.date}</p>
            )}
          </Form.Group>

          <Form.Group className="my-3" controlId="time">
            <Typography sx={{ color: "white" }} for="time">
            Enter Time
            </Typography>
            <Form.Control
              type="text"
              placeholder="Enter time"
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.time && touched.time ? "input-error" : ""
              }
            />
            {errors.time && touched.time && (
              <p className="error">{errors.time}</p>
            )}
          </Form.Group>


          <Form.Group className="my-3" controlId="location">
            <Typography sx={{ color: "white" }} for="location">
             Enter Location
            </Typography>
            <Form.Control
              type="location"
              placeholder="Enter location"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.location && touched.location ? "input-error" : ""
              }
            />
            {errors.location && touched.location && (
              <p className="error">{errors.location}</p>
            )}
          </Form.Group>
          <Form.Group className="my-3" controlId="registrationLink">
            <Typography sx={{ color: "white" }} for="registrationLink">
             Enter RegistrationLink
            </Typography>
            <Form.Control
              type="registrationLink"
              placeholder="Enter registrationLink"
              value={values.registrationLink}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.registrationLink && touched.registrationLink ? "input-error" : ""
              }
            />
            {errors.registrationLink && touched.registrationLink && (
              <p className="error">{errors.registrationLink}</p>
            )}
          </Form.Group>

          <Form.Group className="my-3" controlId="price">
            <Typography sx={{ color: "white" }} for="price">
             Enter price
            </Typography>
            <Form.Control
              type="price"
              placeholder="Enter price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.price && touched.price ? "input-error" : ""
              }
            />
            {errors.price && touched.price && (
              <p className="error">{errors.price}</p>
            )}
          </Form.Group>

          <Form.Group className="my-3" controlId="contactInfo">
            <Typography sx={{ color: "white" }} for="contactInfo">
             Enter Contact Information
            </Typography>
            <Form.Control
              type="contactInfo"
              placeholder="Enter contactInfo"
              value={values.contactInfo}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.contactInfo && touched.contactInfo ? "input-error" : ""
              }
            />
            {errors.contactInfo && touched.contactInfo && (
              <p className="error">{errors.contactInfo}</p>
            )}
          </Form.Group>


          <Form.Group className="my-3" controlId="description">
            <Typography sx={{ color: "white" }} for="description">
             Enter description
            </Typography>
            <Form.Control
              id="description"
              type="Description"
              placeholder="Enter description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.description && touched.description ? "input-error" : ""
              }
            />
            {errors.description && touched.description && (
              <p className="error">{errors.description}</p>
            )}
          </Form.Group>
          <Form.Group className="my-3" controlId="profile">
              <Box sx={{display:"inline-block"}}> 
              <Typography sx={{ color: "white" }} for="image">
              Select a Pitcture
            </Typography>
               <IconButton aria-label="upload picture" component="label">
               <input hidden accept="image/*"  onChange={(e) => setFile(e.target.files[0])} type="file" />
               <AddPhotoAlternateIcon sx={{width:"5rem", color:"white",height:"5rem"}} />
               </IconButton>
            
              </Box >
              </Form.Group>
        

          <button type="submit" className="btn flex">
            <SaveAltIcon style={{ color: "white" }} />
            <Typography sx={{ color: "white" }} for="comment">
              {" "}
              Add Details
            </Typography>
          </button>
        </Form>
      </Box>
    </Box>
  );
};

export default AddEevent;
