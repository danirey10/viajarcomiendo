import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class UpdateFavorite extends PartialType(CreateUserDto) {

    @IsEmail()
    email: string;

    @IsNumber()
    favorite: number;

}
