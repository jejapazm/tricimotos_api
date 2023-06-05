import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


@InputType()
export class LoginInput {
    
    
    @Field( () => String )
    @IsNotEmpty()
    username: string;
    
    @Field( () => String )
    @MinLength(8)
    password: string;
    

}