import { Schema, Types, model, Model } from "mongoose";
import { Menu } from "../interfaces/menu.interfaces";

const MenuSchema = new Schema<Menu>(
    {
        menu: {
            type: String,
            required: [true, "La opcion del menu no puede ser vacio"],
        },
        icon: {
            type: String,
            unique: true,
            required: [true, "Ingrese un icono no puede ser vacio"]
        },
        redirect: {
            type: String,
            default: "#"
        },
        submenus: {
            type: [],
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model('menus', MenuSchema);
export default UserModel;