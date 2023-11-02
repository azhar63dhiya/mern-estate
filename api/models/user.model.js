import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAMFBMVEXk5ueutLeor7Ld4OHn6eqrsbXq7O3KztDh4+TU19nb3d+/xMa0ur25vsHGyszX2tsMh/67AAADOUlEQVR4nO2b3ZKjIBBGBRsBAX3/t110MimTTaSb+JHdKs7czN2c6h8EmhmGTqfT6XQ6nU6n0+l0/jdoIjdn3DTRFy1otsHoGzF4R1+xocFGZYy6k39P69DcJXuog8UvOtrWWfLmhccembg2VCGX3njsLM1UaH6VmEOKkmsk4k89tgypsUVYyiIbDq9CXjNElBrhIivLQ6kIDwpTRJmAVaHT9n1AW6QKt0h+gPZyFIiYMME8yLJzs+dnhpkMIhGlAspDGJIcFFilSKpkw6C+haOkcXYiRoQWYXIyK0ZFmhxYekaxSE4PZElh7Qae0IiYiHt4N0FsDihUmBgPCMqU5CLKID7IU4UIpnmmiuT8QyYKsXOriwnEpCYkmOzIF3tQ71BVFyPWk7o1FrKBFO3rf00g3+JZLqIUZntfsT/BHAQrPoHGI0Ty4VxeKKgbA3FIUKdA8ZYadwiUHjMSSmSYZDULWWBvyLb3yGslUaUY4FXBIFndYIfiGys7KKAz8R2yzP4x+GtQXqkg++YOp5V1C5H8JSwmqI1IprB7M6qVyDZEOHExsckk46YyvM+Qsbhr2Jcua3wVF6NCg3nKkwr5pJ9ctF7mr8xpp8GGaLTZ0FrF4L8zL96gwY2rtcti/eq+NLe+mdB04Csm+Y+6efV2CSlun+cYYwo5MvPYMDKUf9ZcIFHtJXLom1wtRsW0eEf4oT5Nzi9JPzfNYyfvrx1G5FSfaPRJnS2vh/ioaGdUZMiH89n5XzbJAlxoXJT8CGh0uPi9A41JFI6Di4oXvknJ3ztWcbxBJ3/NN5HcctoqLJf1AhfylXl5wCyfpohceavIU4mfpUg2Mz9Hhw/CUjP5e49JtbtKGuKVIttSV7e4lF4jVbnUXFlT1aUnQIXm62r1iPhVCvsRkBhpVFzN4IKpIjog0sVd84AWNHPVQJZPZD8G4b2dq4d/YeywIvxSAedmhycCWkmO8O4lCdfABzj3gfx7zg8wS7loqx4yyNHlkMifRVVRXvSrZrE1lCcubZLDeK3j2iSHkZ4Lt9AF0nn3UGglUpp1tFnWfkzOB1HAHdJfnL9EHO//BIOnMF8f29HoXyY6nU6n03nFHzvwJkjWHi5QAAAAAElFTkSuQmCC"
    },
}, { timestamps: true});

const User = mongoose.model('user', userSchema);

export default User;