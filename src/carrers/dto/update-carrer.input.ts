import { CreateCarrerInput } from './create-carrer.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCarrerInput extends PartialType(CreateCarrerInput) {
  @Field(() => ID)
  id: string;
}
