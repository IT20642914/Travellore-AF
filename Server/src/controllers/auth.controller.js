import {signUpBodyValidation,logInBodyValidation,} from "../validations/validationSchema";






//login
const handleLogin = async (req,res) => {
    try{
  
        const {email,password}=req.body;
        const { error } = logInBodyValidation(req.body);
        if (error)
          return res
            .status(403)
            .json({ error: true, message: error.details[0].message });
    
      
  
           const user= await Users.findOne({email:email});
  ;
       if(!user)  return res.status(400).json({error:"User Doesn't Exist"});
  
  
       const DbPassword= user.password;
      
       bcrypt.compare(password,DbPassword).then(async(match)=>{
          if(!match){
              res.status(401).json({error:"Wrong Email and password combination",
            message:"Wrong Email and password combination"});
          }else{
  
              const { accessToken, refreshToken } = await generateTokens(user);
              const userName=user.username;
             
              const role=user.roles;
              res.status(200).json({
                  error: false,
                  accessToken,
                  refreshToken,
                  userName,role,
                  message: `${user.username} Logged in sucessfully`,
              });
  
  
        
          }
       })  }catch(err){
        console.log(err);
        res.status(500).json({ error: true, message: "Internal Server Error" });
       }
  }
  