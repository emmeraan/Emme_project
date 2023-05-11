import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UnauthorizedException, UsePipes, ValidationPipe } from '@nestjs/common';
import { User } from './user.model';
import { LoginDto } from './login.dto';
import { Redirect } from '@nestjs/common/decorators';
import { SignupDto } from './signup.dto';

@Controller('/data')
export class UserController {

  constructor(private readonly userService: UsersService) {}

  

  @Post('signup')
  @UsePipes(ValidationPipe)
  signup(@Body() user:SignupDto):Promise<User>{
   return this.userService.createUser(user)
  }

  
  @Get('/login')
  @UsePipes(ValidationPipe)
  async signin(@Body() loginDto:LoginDto){
   
    const user= await this.userService.UserLogin(
      loginDto.email  ,loginDto.password
    )

    if(!user){
      throw new UnauthorizedException("invalid Credential")
    }
   return "Login Suceessfully" ;
   //console.log({user});
   //return { url: 'https://youtube.com' };

  }
}