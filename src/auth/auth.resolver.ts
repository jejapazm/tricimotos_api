import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { User } from 'src/users/entities/user.entity';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService
  ) { }


   @Mutation(() => User, { name: 'login' })
  async login(
    @Args('loginInput') loginInput: LoginInput
  ): Promise<User> {
    return this.authService.login(loginInput);
  }

}
