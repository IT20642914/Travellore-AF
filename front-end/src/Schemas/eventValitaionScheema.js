import * as yup from 'yup';



export  const eventValidation = yup.object().shape({
    name:yup.string().required("Event Name is required"),
    date:yup.string().required("Event Date is required"),
    location:yup.string().required("Event Location is required"),
    description:yup.string().required("Event Description is required"),
    registrationLink:yup.string().required("Event Registration Link is required"),
    price:yup.string().required("Event Price is required"),
    category:yup.string().required("Event Category is required"),
    contactInfo:yup.string().required("Event Contact Information is required"),
    time:yup.string().required("Event Time is required"),

})