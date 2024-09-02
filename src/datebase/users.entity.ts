import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // Decorador de GraphQL que indica que esta clase es un tipo GraphQL
@Entity() // Decorador de TypeORM que indica que esta clase es una entidad
export class User {
  @Field(() => Int) // Decorador de GraphQL que define el tipo del campo en el esquema GraphQL
  @PrimaryGeneratedColumn() // Decorador de TypeORM que indica que esta columna es la clave primaria y se genera automáticamente
  id: number;

  @Field() // Decorador de GraphQL que define el campo en el esquema GraphQL
  @Column() // Decorador de TypeORM que define esta columna en la tabla de la base de datos
  name: string;

  @Field() // Decorador de GraphQL
  @Column() // Decorador de TypeORM
  professional: string;

  @Field(() => Int) // Decorador de GraphQL para definir el tipo entero
  @Column({ type: 'int' }) // Decorador de TypeORM para definir el tipo de columna
  age: number;
}
