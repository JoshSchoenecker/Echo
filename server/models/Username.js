import mongoose from "mongoose"
const  Schema = mongoose.Schema;


const Username = new Schema(
    {
      username: {type: String, required: true}
    },
    { timestamps: true, toJSON: { virtuals: true } }
  );


export default Username