import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CarrersService } from './carrers.service';
import { Carrer } from './entities/carrer.entity';
import { CreateCarrerInput } from './dto/create-carrer.input';
import { UpdateCarrerInput } from './dto/update-carrer.input';

@Resolver(() => Carrer)
export class CarrersResolver {
  constructor(private readonly carrersService: CarrersService) {}

  @Mutation(() => Carrer)
  createCarrer(@Args('createCarrerInput') createCarrerInput: CreateCarrerInput) {
    return this.carrersService.create(createCarrerInput);
  }

  @Query(() => [Carrer], { name: 'carrers' })
  findAll() {
    return this.carrersService.findAll();
  }

  @Query(() => Carrer, { name: 'carrer' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.carrersService.findOne(id);
  }

  @Mutation(() => Carrer)
  updateCarrer(@Args('updateCarrerInput') updateCarrerInput: UpdateCarrerInput) {
    return this.carrersService.update(updateCarrerInput.id, updateCarrerInput);
  }

  @Mutation(() => Carrer)
  removeCarrer(@Args('id', { type: () => ID }) id: string) {
    return this.carrersService.remove(id);
  }
}
