import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsString } from 'class-validator';
import { timeStamp } from 'console';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'users' })
@ObjectType()
export class User {

  @PrimaryGeneratedColumn('uuid', { name: 'usr_id' })
  @Field(() => ID)
  id: string;

  @Column({ unique: true, name: 'usr_username' })
  @Field(() => String)
  username: string;

  @Column({ nullable: true, name: 'usr_password' })
  password: string;

  @Column({ nullable: true, name: 'usr_names' })
  @IsString()
  @Field(() => String)
  names: string;

  @Column({ name: 'usr_surnames' })
  @IsString()
  @Field(() => String)
  surnames: string;

  @Column({ unique: true, name: 'usr_identification' })
  @IsString()
  @Field(() => String)
  identification: string;

  @Column({ nullable: true, name: 'usr_contact_number' })
  @IsString()
  @Field(() => String, { nullable: true })
  contactNumber: string;

  @Column({ type: 'text', array: true, default: ["user"], name: 'usr_roles' })
  @Field(() => [String])
  roles: string[];

  @Column({ type: 'bool', default: false, name: 'usr_has_acepted_invitation' })
  @IsBoolean()
  @Field(() => Boolean)
  hasAceptedInvitation: boolean;

  @Column({ type: 'bool', default: false, name: 'usr_is_deleted' })
  @IsBoolean()
  @Field(() => Boolean, { defaultValue: false })
  idDeleted: boolean;

  @Column({ nullable: true, type: 'timestamptz', name: 'usr_invitation_expiration_date' })
  @IsDate()
  @Field()
  invitationExpirationDate?: Date;


  // AUDITORY
  @ManyToOne(() => User, (user) => user.lastUpdateBy, { nullable: true, lazy: true })
  @JoinColumn({ name: 'usr_last_update_by' })
  @Field(() => User, { nullable: true })
  lastUpdateBy?: User;

  @Column({ type: 'timestamptz', nullable: true, name: 'usr_update_date' })
  @IsDate()
  @Field({ nullable: true })
  updateDate: Date;

  @ManyToOne(() => User, (user) => user.deletedBy, { nullable: true, lazy: true })
  @JoinColumn({ name: 'usr_deleted_by' })
  @Field(() => User, { nullable: true })
  deletedBy?: User;

  @Column({ type: 'timestamptz', nullable: true, name: 'usr_deletion_date' })
  @IsDate()
  @Field({ nullable: true })
  deletionDate: Date;

  @ManyToOne(() => User, (user) => user.createdBy, { lazy: true })
  @JoinColumn({ name: 'usr_created_by' })
  @Field(() => User)
  createdBy?: User;

  @Column({ type: 'timestamptz', name: 'usr_creation_date' })
  @IsDate()
  @Field()
  creationDate: Date;
  // AUDITORY

}
