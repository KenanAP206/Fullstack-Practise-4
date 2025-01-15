import { Schema, model } from "mongoose"

let ProductSchema = new Schema({
    name:{ type: String, required: true },
    price:{ type: Number},
    desc:{ type: String},
    image:{ type: String}
})

export let ProductModel= model("products",ProductSchema)