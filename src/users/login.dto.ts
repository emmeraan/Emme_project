import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class LoginDto{
   @IsEmail()
   email:string;
   
   password:string;

   
}