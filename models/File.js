const mongoose= require("mongoose");

const fileSchema= mongoose.Schema(
   {
       name: {
           type: String,
           required: true
       },
       type: {
           type: String,
           required: true
       },
       size: Number
   }
);


module.exports=mongoose.model("File", fileSchema)