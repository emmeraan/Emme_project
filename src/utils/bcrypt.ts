import * as bcrypt from 'bcrypt';
export function encodepassowrd(rawpassword:string){
   const SALT=bcrypt.genSaltSync();
   return bcrypt.hashSync(rawpassword,SALT)
}

export function comparepassword(rawpassword:string,hash:string){
   return bcrypt.compareSync(rawpassword,hash)
}