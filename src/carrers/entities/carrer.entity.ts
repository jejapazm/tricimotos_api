import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsString } from 'class-validator';
import { timeStamp } from 'console';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'carrers' })
@ObjectType()
export class Carrer {

  @PrimaryGeneratedColumn('uuid', { name: 'car_id' })
  @Field(() => ID)
  id: string;

  @ManyToOne(() => User, (user) => user.id, { nullable: true, lazy: true })
  @JoinColumn({ name: 'car_passenger' })
  @Field(() => User, { nullable: true })
  passenger?: User;

  @ManyToOne(() => User, (user) => user.id, { nullable: true, lazy: true })
  @JoinColumn({ name: 'car_driver' })
  @Field(() => User, { nullable: true })
  driver?: User;

  @Column({ type: 'timestamptz', name: 'car_creation_date' })
  @IsDate()
  @Field()
  creationDate: Date;

}
