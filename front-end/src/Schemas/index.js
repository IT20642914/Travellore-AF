
import * as yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(yup) 
const passwordRules =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
//Must contain at least one number and one uppercase and lowercase letter, 
//and at least 8 or more characters
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const basicValidation= yup.object().shape({
username:yup.string().required("Required"),
email:yup.string().email('please Enter valid email').required("Required"),
phoneNumber:yup.string().required('please Enter mobile Number') 
.matches(phoneRegExp,'please enter valide phone number')
.min(10, "too short")
.max(10, "too long"),
password:yup 
.string()
.min(5).minLowercase(1, 'password must contain at least 1 lower case letter')
.minUppercase(1, 'password must contain at least 1 upper case letter')
.minNumbers(1, 'password must contain at least 1 number')
.minSymbols(1, 'password must contain at least 1 special character')
.matches(passwordRules,{massage: "Please Create a Strong Password"})
.required("Required"),

Cpassword:yup
.string()
.oneOf([yup.ref("password"),null],"password must match")
.required("Required")

});

export const basicLoginvalidation= yup.object().shape({

    email:yup.string().email('please Enter valid email').required("Required"),
    password:yup
    .string()
    .required("please enter valid password"), 
    });

 
    
    

