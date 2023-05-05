import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
 username:{
    type: String,
    required: true,
    unique: true,
 },
 email:{
    type: String,
    required: true,
    unique: true,
 },
 password:{
    type: String,
    required: true,
    
 },
 img:{
    type: String,
    required: false,
    
 },
 country:{
    type: String,
    required: true,
    
 },
 phone:{
    type: String,
    required: false,
    
 }, 
 desc:{
    type: String,
    required: false,
    
 },
 roles: {
    type: [String],
    enum: ["user", "admin",],
    default: ["user"],
},
},
{
    timestamps: true,
});
const Users= mongoose.model("Users", UserSchema);
module.exports = Users;