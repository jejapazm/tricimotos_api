import { Injectable } from '@nestjs/common';
import { CreateCarrerInput } from './dto/create-carrer.input';
import { UpdateCarrerInput } from './dto/update-carrer.input';

@Injectable()
export class CarrersService {
  create(createCarrerInput: CreateCarrerInput) {
    return 'This action adds a new carrer';
  }

  findAll() {
    return `This action returns all carrers`;
  }

  findOne(id: string) {
    return `This action returns a #${id} carrer`;
  }

  update(id: string, updateCarrerInput: UpdateCarrerInput) {
    return `This action updates a #${id} carrer`;
  }

  remove(id: string) {
    return `This action removes a #${id} carrer`;
  }
}
