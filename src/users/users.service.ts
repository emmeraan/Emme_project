import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { encodepassowrd } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
    constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}


  UserLogin(email:string,password:string): Promise<User> {
    return this.userModel.findOne({
      where: {
        email,password
      },
    });
  }
  createUser(user){
    const password=encodepassowrd(user.password);
   return this.userModel.create({...user,password});
 }

}