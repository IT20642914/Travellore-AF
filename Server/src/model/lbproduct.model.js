import mongoose from 'mongoose';
const { Schema } = mongoose;

const lbproductSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
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
      required: true,
    },
    location2: {
        type: String,
        required: true,
      },
    location3: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Lbproduct', lbproductSchema);
