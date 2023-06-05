import { Injectable, NotFoundException } from '@nestjs/common';

import * as bcrypt from 'bcrypt'
import { LoginInput } from './dto/login.input';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {


    constructor(
        private readonly usersService: UsersService
    ) { }

    async login(loginInput: LoginInput): Promise<User> {

        const { username, password } = loginInput;
        const user = await this.usersService.findOneByUsername(username);

        if (!bcrypt.compareSync(password, user.password))
            throw new NotFoundException(`Email or Password do not match`);

        if (user.idDeleted === true)
            throw new NotFoundException('Usuario desactivado');


        return user;

    }
    
}
