import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field(() => String)
  username: string;
  
  @Field(() => String)
  password: string;
  
  @Field(() => String)
  names: string;
  
  @Field(() => String)
  surnames: string;
  
  @Field(() => String)
  identification: string;
  
  @Field(() => String)
  contactNumber: string;
  
  @Field(() => Boolean)
  hasAceptedInvitation: string;
  
  @Field(() => String)
  rol: string;

}
