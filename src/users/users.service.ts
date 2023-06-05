import { Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';



@Injectable()
export class UsersService implements OnModuleInit {

  private logger: Logger = new Logger('UsersService');


  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  onModuleInit() {
    this.createSuperadmin();
  }

  async createSuperadmin() {
    try {
      const superadmin = await this.userRepository.findOneBy({ names: 'super', surnames: 'admin' });
      console.log({ "superadmin": superadmin })
      if (!superadmin) {
        const newSuperAdmin = this.userRepository.create({
          identification: '0000000000',
          contactNumber: '9999999999',
          username: 'superadmin',
          names: 'super',
          surnames: 'admin',
          creationDate: new Date(),
          password: bcrypt.hashSync('Admin123', 10)
        })

        this.userRepository.save(newSuperAdmin);
        this.logger.verbose('SuperAdmin user has been created')

      } else {
        this.logger.verbose('User SuperAdmin already exists, the app start will not create it')
      }
    } catch (error) {
      this.logger.verbose(error)
    }
  }


  create(createUserInput: CreateUserInput): Promise<User> {
    return;
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {


    }
  }

  async findOneByUsername(username: string): Promise<User> {
    try {
      this.logger.verbose('findOneByUsername')
      return await this.userRepository.findOneByOrFail({ username })
    } catch (error) {
      throw new NotFoundException('Usuario o contraseña no existen');
    }
  }

  async findOneById(id: string): Promise<User> {
    try {
      return await this.userRepository.findOneByOrFail({ id })
    } catch (error) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {

    try {

      // const user = await this.userRepository.preload({
      //   ...updateUserInput,
      //   id
      // })

      // return await this.userRepository.save(user);

      return;

    } catch (error) {
    }
  }

  remove(id: string) {
    return;
  }
}


