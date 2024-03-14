import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interfaces";
import mongoosePaginate from "mongoose-paginate-v2";

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: [true, "El nombre no puede ser vacio"],
        },
        email: {
            type: String,
            unique: true,
            required: [true, "El correo no puede ser vacio"]
        },
        password: {
            type: String,
            required: [true, "La contraseña no puede ser vacia"]
        },
        description: {
            type: String,
            default: "Soy nuevo"
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model('users', UserSchema);
export default UserModel;