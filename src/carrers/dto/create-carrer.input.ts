import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCarrerInput {
  @Field(() => Int)
  exampleField: number;
}

