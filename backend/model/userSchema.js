import mongoose, { mongo } from "mongoose";
import { timestamp } from "rxjs";


const userSchema = mongoose.Schema({

     name:{
          type:String,
          required:true
     },
     email:{
          type:String,
          required:true,
          unique:true
     },
     password:{
          type:String,
          required:true
     },

},{ timestamp:true });

const User = mongoose.model('User', userSchema);

export default User;