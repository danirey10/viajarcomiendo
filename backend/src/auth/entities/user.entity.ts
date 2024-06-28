import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {

    _id: string;

    @Prop({ required:true, maxlength: 6 })
    name: string;

    @Prop({ unique:true, required:true })
    email: string;

    @Prop({ minlength: 6, required:true })
    password?: string;

    @Prop({ default:'' })
    img?: string;

    @Prop({ default:true })
    isActive: boolean;

    @Prop({ type:[Number] })
    favorites: number[];

}


export const UserSchema= SchemaFactory.createForClass( User );