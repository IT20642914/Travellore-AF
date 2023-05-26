import mongoose from 'mongoose';
const { Schema } = mongoose;

const lbproductSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    desc: {
        type: String,
        required: false,
      },
    img: {
        type: String,
        required: false,
    },
    location1: {
      type: String,
      required: false,
    },
    location2: {
        type: String,
        required: false,
      },
    location3: {
        type: String,
        required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Lbproduct', lbproductSchema);
