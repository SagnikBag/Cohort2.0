import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
 {
  username:{
   type:String,
   required:true,
   trim:true,
   unique:true,
  },
  email:{
   type:String,
   requred:true,
   unique:true,
   lowercase:true,
   trim:true,
  },
  password:{
   type:String,
   required:true,
   minlength:6,
  },
  verified:{
   type:Boolean,
   default:false,
  },
 },
 {timestamps: true}
);
// Hash the password before saving the user
userSchema.pre('save',async function (){
 if(!this.isModified('password')) return;
 this.password = await bcrypt.hash(this.password,10);
});
// Compare the candidate password with the stored hashed password
userSchema.methods.comparePassword = function (candidatePassword){
 return bcrypt.compare(candidatePassword, this.password)
};

const userModel = mongoose.model("User",userSchema);

export default userModel;
