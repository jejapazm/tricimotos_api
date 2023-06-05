import { Module } from '@nestjs/common';
import { CarrersService } from './carrers.service';
import { CarrersResolver } from './carrers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrer } from './entities/carrer.entity';

@Module({
  providers: [CarrersResolver, CarrersService],
  imports: [
    TypeOrmModule.forFeature([Carrer])
  ]
})
export class CarrersModule {}
