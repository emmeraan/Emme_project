import { Matches,IsString, IsEmail } from "class-validator";
import { DataTypes } from "sequelize";
import { BeforeValidate, Column, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model {

  @Column(
   {  
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         len: [5, 10]
      }
   }
   
  )
  username: string;

  @Column(
  {
   allowNull: false,
   validate: {
      isEmail: true,
   }
})
   email: string;


   @Column
   ({
   //    validate: {
   //    is: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{5,10}$/
   //  }
}
  )
  password: string;
}