import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './entities/user.entity';
import { Model } from 'mongoose';

import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';

import { CreateUserDto,LoginDto, UpdateImg } from './dto';
import { UpdateName } from './dto/update-name.dto';
import { UpdateFavorite } from './dto/update-favorite.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel( User.name )
    private userModel: Model<User>,
    private jwtService: JwtService,
  ){ }

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { password, ...userData } = createUserDto;
      const newUser = new this.userModel({
        password: bcryptjs.hashSync(password, 10),
        ...userData
      });
      await newUser.save();
      const { password:_, ...user } = newUser.toJSON();
      return user;
    } catch (error) {
      if(error.code === 11000){
       throw new BadRequestException(`${ createUserDto.email } ya existe!`);
      }
      throw new InternalServerErrorException('Error inesperado.');
    }
  }

  async login( loginDto: LoginDto ):Promise<LoginResponse> {
    const {email, password} = loginDto;

    const user = await this.userModel.findOne({ email });
    if(!user){
      throw new UnauthorizedException('Credenciales no validas - email');
    }
    if( !bcryptjs.compareSync(password, user.password)){
      throw new UnauthorizedException('Credenciales no validas - password');
    }

    const { password:_, ...rest  } = user.toJSON();
    return{
      user: rest,
      token: this.getJwtToken({ id: user.id }),
    }

  }

  async checkpass( loginDto: LoginDto ):Promise<LoginResponse> {
    const {email, password} = loginDto;

    const user = await this.userModel.findOne({ email });
    if(!user){
      throw new UnauthorizedException('Credenciales no validas - email');
    }
    if( !bcryptjs.compareSync(password, user.password)){
      throw new UnauthorizedException('Esa no es la contraseña del usuario.');
    }
    const { password:_, ...rest  } = user.toJSON();
    return{
      user: rest,
      token: this.getJwtToken({ id: user.id }),
    }
  }

  async changepass( loginDto: LoginDto ):Promise<LoginResponse> {
    const {email, password} = loginDto;

    const user = await this.userModel.findOne({ email });
    user.password = bcryptjs.hashSync(password, 10);
    await user.save();
    const { password:_, ...rest  } = user.toJSON();
    return{
      user: rest,
      token: this.getJwtToken({ id: user.id }),
    }
  }

  findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findUserById( id: string ) {
    const user = await this.userModel.findById(id);
    const { password, ...rest } = user.toJSON();
    return rest;
  }

  findOne(id: string) {
    return `This action returns a #${id} auth`;
  }

  async update(updateAuthImage: UpdateImg) {
    const {email, img} = updateAuthImage;

    const user = await this.userModel.findOne({ email });
    if(!user){
      throw new UnauthorizedException('Credenciales no validas - email');
    }
    user.img=img;
    user.save();
    const { ...rest  } = user.toJSON();
    return {
      user: rest,
      token: this.getJwtToken({ id: user.id }),
    }
  }

  async updateName(updateName: UpdateName) {
    const {email, name} = updateName;

    const user = await this.userModel.findOne({ email });
    if(!user){
      throw new UnauthorizedException('Credenciales no validas - email');
    }
    if(name.length > 6){
      throw new UnauthorizedException('El nombre no puede tener más de 6 caracteres');
    }
    user.name=name;
    user.save();
    const { ...rest  } = user.toJSON();
    return {
      user: rest,
      token: this.getJwtToken({ id: user.id }),
    }
  }

  async updateFavorite(updateFavorite: UpdateFavorite) {
    const {email, favorite} = updateFavorite;

    const user = await this.userModel.findOne({ email });
    if(!user){
      throw new UnauthorizedException('Credenciales no validas - email');
    }
    if(user.favorites.includes(favorite)){
      const index = user.favorites.indexOf(favorite);
      user.favorites.splice(index,1);
      user.save();
    }else{
      user.favorites.push(favorite);
      user.save();
    }
    const { ...rest  } = user.toJSON();
    return {
      user: rest,
      token: this.getJwtToken({ id: user.id }),
    }
  }

  remove(id: string) {
    return `This action removes a #${id} auth`;
  }

  getJwtToken(payload: JwtPayload ){
    const token = this.jwtService.sign(payload);
    return token;
  }

}
