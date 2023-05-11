import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class SignupDto{
   @IsString()
   @IsNotEmpty()
   @Length(5,8)
   username:string;

   //@Length(5,10)
   password:string;

   
   
   
   @IsEmail()
   @IsNotEmpty()
   email:string;
}