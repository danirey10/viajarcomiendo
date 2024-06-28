import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail } from 'class-validator';
import { Prop } from '@nestjs/mongoose';

export class UpdateName extends PartialType(CreateUserDto) {

    @IsEmail()
    email: string;

    @Prop({ maxlength: 6 })
    name: string;

}
