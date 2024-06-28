import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto, UpdateImg } from './dto';
import { AuthGuard } from './guards/auth.guard';
import { LoginResponse } from './interfaces/login-response';
import { User } from './entities/user.entity';
import { UpdateName } from './dto/update-name.dto';
import { UpdateFavorite } from './dto/update-favorite.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('/checkpass')
  checkpass(@Body() loginDto: LoginDto) {
    return this.authService.checkpass(loginDto);
  }

  @Post('/changepass')
  changepass(@Body() loginDto: LoginDto) {
    return this.authService.changepass(loginDto);
  }

  @Post('/update')
  update(@Body() updateAuthImage: UpdateImg) {
    return this.authService.update(updateAuthImage);
  }

  @Post('/updatename')
  updateName(@Body() updateName: UpdateName) {
    return this.authService.updateName(updateName);
  }

  @Post('/addfavorite')
  updateFavorite(@Body() updateFavorite: UpdateFavorite) {
    return this.authService.updateFavorite(updateFavorite);
  }

  @UseGuards( AuthGuard )
  @Get()
  findAll( @Request() req: Request ) {
    return this.authService.findAll();
  }

  @UseGuards( AuthGuard )
  @Get('/check-token')
  checkToken( @Request() req: Request ): LoginResponse {
    const user = req['user'] as User;
    return{
      user,
      token: this.authService.getJwtToken({ id: user._id }),
    }
  }
 /*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
*/


}
