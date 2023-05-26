
import mongoose from 'mongoose';
const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: false,
    },
        name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: false,
    },
    time:{
      type: String,
      required: false,
    },
    registrationLink:{
      type: String,
      required: false,
    },
    category:{
      type: String,
      required: false,
    },
    contactInfo:{
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Event', eventSchema);